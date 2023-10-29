package vars

import (
	"os"
	"time"
)

// @ Global Consts
const (
	//@ Backup dir...
	//? Here will save the dump.sql files
	BackupDir = "./backups"
	//@ Archives dir
	//? Here will save the dumps.zip archives
	ArchivesDir = "./backups/archives"
	//@ Time interval for backups
	//? The backup will be done every 4 hours
	BackupInterval = 4 * time.Hour
)

// @ Global Variables
var (
	//@ APP
	//? Server's PORT
	PORT = os.Getenv("PORT")
	//@ DB
	// ? General DB connection string
	DB = os.Getenv("DB")
	// ? Advanced DB variables (split)
	DB_NAME = os.Getenv("DB_NAME")
	DB_USER = os.Getenv("DB_USER")
	DB_PASS = os.Getenv("DB_PASS")
	DB_HOST = os.Getenv("DB_HOST")
	DB_PORT = os.Getenv("DB_PORT")
	//@ JWT Token
	JWTTOKEN = os.Getenv("JWTTOKEN")
	//@ SSL/TLS certs pathes
	Cert = "/var/www/certs/domain-example.ru.pub"
	Key  = "/var/www/private/domain-example.ru.key"
)
