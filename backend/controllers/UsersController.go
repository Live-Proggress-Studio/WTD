package controllers

import (
	"net/http"
	"os"
	"time"
	"wtd/initializers"
	"wtd/models"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

// @ Signup controller
func Signup(c *gin.Context) {
	// Get Email/pass off req body
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to hash password",
		})
		return
	}

	// Check if user with the given email already exists
	var existingUser models.User
	result := initializers.DB.Where("email = ?", body.Email).First(&existingUser)
	if result.RowsAffected > 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Пользователь с таким email уже существует",
		})
		return
	}

	// Create The User
	user := models.User{Email: body.Email, Password: string(hash)}
	result = initializers.DB.Create(&user)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create user",
		})
		return
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create token",
		})
		return
	}

	// Set the cookie with SameSite=Lax attribute
	c.SetCookie("Authorization", tokenString, 30*24*60*60, "", os.Getenv("CLIENT_URL"), false, true) // Secure=false, SameSite=Lax
	c.JSON(http.StatusOK, gin.H{})
}

// @ Login controller
func Login(c *gin.Context) {
	// Get the email and pass off req body
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})

		return
	}
	// Look up requested user
	var user models.User

	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})
		return
	}

	// Compare sent in pass with saved user pass hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email or password",
		})

		return
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create token",
		})
		return
	}

	// Set the cookie with SameSite=Lax attribute
	c.SetCookie("Authorization", tokenString, 30*24*60*60, "", os.Getenv("CLIENT_URL"), false, true) // Secure=false, SameSite=Lax

	// Respond with JSON indicating successful login
	c.JSON(http.StatusOK, gin.H{
		"message": "Успешная авторизация!",
	})
}

// @ JWTValidate controller
func JWTValidate(c *gin.Context) {

	user, _ := c.Get("user")

	c.JSON(http.StatusOK, gin.H{
		"message": user,
	})
}

// @ Get All Users controller
func GetAllUsers(c *gin.Context) {
	var users []models.User

	initializers.DB.Find(&users)

	c.JSON(http.StatusOK, gin.H{
		"users": users,
	})
}

// @ Get User by ID controller
func GetUserByID(c *gin.Context) {
	userID := c.Param("id")

	var user models.User

	result := initializers.DB.First(&user, userID)

	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Пользователь не найден",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}

// @ Logout controller
func Logout(c *gin.Context) {
	c.SetCookie("Authorization", "", -1, "", os.Getenv("CLIENT_URL"), false, true)

	c.JSON(http.StatusOK, gin.H{
		"message": "Успешный выход из аккаунта!",
	})
}
