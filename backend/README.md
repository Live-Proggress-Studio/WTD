# WTD Back-end

WTD Auth api

DB: postgres

## DEPENDENCIES

github.com/gin-gonic/gin \
github.com/golang-jwt/jwt/v5 \
github.com/joho/godotenv \
golang.org/x/crypto \
gorm.io/driver/postgres \
gorm.io/gorm

## INSTALLATION

```
#APP
PORT=4000
# DB
DB=host user=username password=PASS dbname=dbname port=5432  sslmode=disable
# JWT
JWT_SECRET=mdaikdnm&ijd8$1h8H#*H8h48H%*
```

```bash
make
```

## ADNPOINTS

**POST** `http://localhost:4000/signup`

```json
{
    "email": "user@email.com",
    "password": "123"
}

```
**POST** `http://localhost:4000/login`

```json
{
    "email": "user@email.com",
    "password": "123"
}
```

**GET** `http://localhost:4000/validate`

```json
{
    "message": {
        "ID": 10,
        "CreatedAt": "2023-08-15T00:52:26.769002+03:00",
        "UpdatedAt": "2023-08-15T00:52:26.769002+03:00",
        "DeletedAt": null,
        "email": "user@email.com",
        "Password": "$2a$10$MkTzR49pf1FfpgnBjFl9GuoagDdeb3T9fGYaZMZYsjtghGImia8Fa"
    }
}
```