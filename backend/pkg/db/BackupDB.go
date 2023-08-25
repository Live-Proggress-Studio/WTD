package db

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"runtime"
	"time"

	"github.com/Live-Proggress-Studio/WTD/pkg/vars"
)

// @ CreateBackup - Creates a backup of the database by pg_dunp util
func CreateBackup() error {
	now := time.Now().Local()
	backupFileName := fmt.Sprintf("%s/%s.sql", vars.BackupDir, now.Format("2006-01-02_15-04-05"))

	cmdArgs := []string{
		"-h", os.Getenv("host"),
		"-U", os.Getenv("user"),
		"--file", backupFileName,
		os.Getenv("DB"),
	}

	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "windows":
		// Windows
		cmd = exec.Command("C:\\Program Files\\PostgreSQL\\14\\bin\\pg_dump.exe", cmdArgs...)
	default:
		// Unix
		cmd = exec.Command("pg_dump", cmdArgs...)
	}

	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("[DB|BACKUP]: Ошибка бэкапа БД: %v\n%s", err, output)
	}

	log.Printf("[DB|BACKUP]: Бэкап БД создан и сохранен в %s\n", backupFileName)
	return nil
}

// @ MakeDBDump - Creates a dump of the database
func MakeDBDump() {
	if _, err := os.Stat(vars.BackupDir); os.IsNotExist(err) {
		os.Mkdir(vars.BackupDir, os.ModePerm)
	}

	if _, err := os.Stat(vars.ArchivesDir); os.IsNotExist(err) {
		os.Mkdir(vars.ArchivesDir, os.ModePerm)
	}

	ticker := time.NewTicker(vars.BackupInterval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			err := CreateBackup()
			if err != nil {
				log.Printf("[DB|BACKUP]: Ошибка создания дампа Базы Данных: %v", err)
			}

			err = ArchiveBackups()
			if err != nil {
				log.Printf("[DB|BACKUP]: Ошибка ахивирования дампов Базы Данных: %v", err)
			}
		}
	}
}
