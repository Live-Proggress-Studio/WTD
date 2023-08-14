package initializers

import (
	"wtd/models"
)

func SyncDB() {
	DB.AutoMigrate(&models.User{})
}
