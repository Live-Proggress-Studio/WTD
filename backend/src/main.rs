use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer, get, post};
// use actix_web::cookie::SameSite;
use actix_cors::Cors;
use chrono::{Utc};
use cookie::SameSite;
use sqlx::postgres::{PgPoolOptions, PgPool};
use std::env;
use serde::{Deserialize, Serialize};
use bcrypt::{hash, verify, DEFAULT_COST};
use sqlx::query;
use jsonwebtoken::{encode, Header, Algorithm, EncodingKey};
use serde_json::json;
use std::error::Error;
use tower_cookies::{Cookie};
// use cookie::SameSite;
use http::header::SET_COOKIE;
// use axum_core::extract::FromRequest;

const IS_SSL: bool = false; 

// User struct!
#[derive(sqlx::FromRow, Serialize, Deserialize)]
pub struct User {
    pub id: i64,
    pub created_at: Option<chrono::DateTime<Utc>>,
    pub updated_at: Option<chrono::DateTime<Utc>>,
    pub deleted_at: Option<chrono::DateTime<Utc>>,
    pub email: Option<String>,
    pub password: String,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct NewUser {
    pub name: String,
    pub email: String,
    pub password: String,
}

// http://127.0.0.1:4000/api/users
#[get("/users")]
async fn get_all_users(pool: web::Data<PgPool>) -> Result<HttpResponse, actix_web::Error> {
    let result = sqlx::query_as::<_, User>("SELECT * FROM users")
        .fetch_all(pool.get_ref())
        .await
        .map_err(actix_web::error::ErrorInternalServerError)?;

    Ok(HttpResponse::Ok().json(result))
}


// http://127.0.0.1:4000/api/signup
#[post("/signup")]
async fn register_user(user: web::Json<NewUser>, pool: web::Data<PgPool>) -> Result<HttpResponse, actix_web::Error> {
    let created_at = Utc::now();
    let hashed_password = match hash(&user.password, DEFAULT_COST) {
        Ok(hash) => hash,
        Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"error": "Failed to hash password"}))),
    };

    // Проверяем, существует ли пользователь с таким email
    let email_exists = sqlx::query_scalar!(
        "SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)",
        user.email.clone()
    )
    .fetch_one(pool.get_ref())
    .await
    .map_err(actix_web::error::ErrorInternalServerError)?;

    if email_exists.unwrap_or_default() {
        return Ok(HttpResponse::Conflict().json(json!({"error": "User with this email already exists"})));
    }
    
    let result = query!(
        r#"
        INSERT INTO users (created_at, updated_at, email, password, name)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
        "#,
        created_at,
        created_at,
        user.email.clone(),
        hashed_password,
        user.name.clone()
    )
    .fetch_one(pool.get_ref())
    .await;

    match result {
        Ok(row) => {
            let user_id = row.id;
            Ok(HttpResponse::Created().json(json!({"user_id": user_id})))
        }
        Err(_) => Ok(HttpResponse::InternalServerError().json(json!({"error": "Failed to create user"}))),
    }
}

// JWT claims struct!
/// Структура с JWT данными (exp date и sub)
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,
    exp: i64,
}

// Cors function!
/// Функция, которая разрешает связь между клиентом и сервером
/// client:8080 <-----> server:4000
/// P.s вызывается во wrap();
fn cors() -> Cors {
    Cors::default()
        .allow_any_origin()
        .allowed_methods(vec!["GET", "POST", "OPTIONS"])
        .allowed_headers(vec!["Content-Type", "Authorization"])
        .allow_any_origin()
        .supports_credentials()
}

// Login struct!
/// Структура, содержит данные, которые пользователь использует для авторизации.
#[derive(Debug, Clone, Deserialize, Serialize)]
struct Login {
    email: String,
    password: String,
}

// Login handler func
/// Login handler - хендлер авторизации пользователя
/// Endpoint: http://127.0.0.1:4000/api/login
#[post("/login")]
async fn login(user: web::Json<Login>, pool: web::Data<PgPool>, req: HttpRequest) -> Result<HttpResponse, actix_web::Error> {
    dotenv::dotenv().ok();

    // Извлекаем куки из HttpRequest
    // let cookies = req.cookies();

    // Поиск пользователя в базе данных по email
    let db_user = sqlx::query_as::<_, User>("SELECT * FROM users WHERE email = $1")
        .bind(&user.email)
        .fetch_optional(pool.get_ref())
        .await
        .map_err(actix_web::error::ErrorInternalServerError)?;

    if let Some(db_user) = db_user {
        // Проверка пароля. Если пароль верен, создаем JWT-токен.
        if verify(&user.password, &db_user.password).unwrap_or(false) {
            let jwt_secret = env::var("JWT_SECRET").expect("JWT_SECRET not found in .env");
            let secret_key = jwt_secret.as_bytes();
            let expiration = Utc::now()
                .checked_add_signed(chrono::Duration::days(30))
                .expect("valid timestamp")
                .timestamp();

            let claims = Claims {
                sub: db_user.email.unwrap_or_default(),
                exp: expiration,
            };

            let token = encode(
                &Header::new(Algorithm::HS512),
                &claims,
                &EncodingKey::from_secret(secret_key),
            )
            .expect("JWT encoding failed");

            // Создаем куки (cookies) в ответе
            let cookie = Cookie::build("Authorization", token.clone())
                .same_site(SameSite::None)
                .secure(true)
                .path("/")
                .finish();

            // Преобразуем куки в строку
            // let cookie_str = format!("{}", cookie);

            // Создаем заголовок Set-Cookie
            let set_cookie_header = format!("{}={}", cookie.name(), cookie.value());

            // Возвращаем успешный HTTP-ответ с JWT-токеном
            Ok(HttpResponse::Ok()
                .append_header((SET_COOKIE, set_cookie_header))
                .json(json!({ "Authorization": token.to_string() })))
        } else {
            // Если пароль неверен, возвращаем ошибку аутентификации
            Ok(HttpResponse::Unauthorized().json(json!({ "error": "Invalid email or password" })))
        }
    } else {
        // Если пользователя с указанным email не существует, возвращаем ошибку аутентификации
        Ok(HttpResponse::Unauthorized().json(json!({ "error": "Invalid email or password" })))
    }
}

#[actix_web::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Load dotenv variables
    dotenv::dotenv().ok();

    let http_prefix: &str;

    if IS_SSL {
        http_prefix = "https://"
    } else {
        http_prefix = "http://"
    }

    let db_url = env::var("DB").expect("DB connection string not found in .env file");
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&db_url)
        .await
        .expect("Failed to create database pool");

    let port = env::var("PORT").unwrap_or_else(|_| "4000".to_string());
    let bind_addr = format!("127.0.0.1:{port}");

    println!("Server stated at the {http_prefix}{bind_addr}!");

    HttpServer::new(move || {
        App::new()
            .wrap(cors())
            .app_data(web::Data::new(pool.clone()))
            .service(web::scope("/api")
                .service(get_all_users)
                .service(register_user)
                .service(login)
            )
    })
    .bind(bind_addr)?
    .run()
    .await?;

    Ok(())
}
