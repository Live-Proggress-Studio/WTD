package main

import (
	"github.com/Live-Proggress-Studio/WTD/initializers"
	"github.com/Live-Proggress-Studio/WTD/pkg/db"
	"github.com/Live-Proggress-Studio/WTD/pkg/routes"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
	initializers.SyncDB()
}

func main() {

	// DB backup
	go db.MakeDBDump()

	// @SETUP ROUTES
	r := routes.SetupRoutes()

	// @RUN DEV SERVER
	r.Run()

	// @RUN PRODUCTION SERVER WITH SSL
	// r.RunTLS(vars.PORT, vars.Cert, vars.Key)
}
