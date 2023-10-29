package initializers

import (
	"github.com/Live-Proggress-Studio/WTD/models"
)

func SyncDB() {
	DB.AutoMigrate(&models.User{})
}
