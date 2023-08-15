package vars

import "os"

var (
	//@ APP
	PORT = os.Getenv("PORT")
	//@ DB
	DB_NAME = os.Getenv("DB_NAME")
	DB_USER = os.Getenv("DB_USER")
	DB_PASS = os.Getenv("DB_PASS")
	DB_HOST = os.Getenv("DB_HOST")
	DB_PORT = os.Getenv("DB_PORT")
	//@ JWT
	JWTTOKEN = os.Getenv("JWTTOKEN")
	//@ SSL/TLS certs path
	Cert = "/var/www/certs/domain-example.ru.pub"
	Key  = "/var/www/private/domain-example.ru.key"
)
