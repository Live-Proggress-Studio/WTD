package routes

import (
	"wtd/controllers"
	"wtd/middleware"

	"github.com/gin-gonic/gin"
)

// @Setup Routes
func SetupRoutes() *gin.Engine {
	r := gin.Default()

	// Enable CORS
	middleware.EnableCORS(r)

	// Routes
	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.RequireAuth, controllers.JWTValidate)
	r.GET("/users", controllers.GetAllUsers)
	r.GET("/users/:id", controllers.GetUserByID)
	r.POST("/logout", middleware.RequireAuth, controllers.Logout)

	return r
}
