package main

import (
	"wtd/initializers"
	"wtd/pkg/routes"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
	initializers.SyncDB()
}

func main() {
	// @SETUP ROUTES
	r := routes.SetupRoutes()

	// @RUN DEV SERVER
	r.Run()

	// @RUN PRODUCTION SERVER WITH SSL
	// r.RunTLS(vars.PORT, vars.Cert, vars.Key)
}
