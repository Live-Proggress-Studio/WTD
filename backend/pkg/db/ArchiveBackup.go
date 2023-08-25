package db

import (
	"archive/zip"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"sort"
	"time"

	"github.com/Live-Proggress-Studio/WTD/pkg/vars"
)

// @ Archive .sql files
func ArchiveBackups() error {
	fileList, err := filepath.Glob(filepath.Join(vars.BackupDir, "*.sql"))
	if err != nil {
		return fmt.Errorf("error getting file list: %v", err)
	}

	if len(fileList) < 4 {
		// log.Println("Not enough backup files for archiving")
		return nil
	}

	sort.Slice(fileList, func(i, j int) bool {
		return fileList[i] > fileList[j]
	})

	zipFileName := fmt.Sprintf("%s/%s.zip", vars.ArchivesDir, time.Now().Format("2006-01-02_15-04-05"))

	zipFile, err := os.Create(zipFileName)
	if err != nil {
		return fmt.Errorf("error creating zip file: %v", err)
	}
	defer zipFile.Close()

	zipWriter := zip.NewWriter(zipFile)
	defer zipWriter.Close()

	for _, file := range fileList[:4] {
		err = AddFileToZip(file, zipWriter)
		if err != nil {
			return fmt.Errorf("error adding file to zip: %v", err)
		}

		// Удаляем файл .sql после архивации
		err = os.Remove(file)
		if err != nil {
			log.Printf("Error deleting backup file %s: %v", file, err)
		}
	}

	log.Printf("[DB|BACKUP]: Заархивировано и удалено %d файлов резервных копий в %s\n...", len(fileList[:4]), zipFileName)

	return nil
}

// @ Add .sql file to zip archive
func AddFileToZip(filePath string, zipWriter *zip.Writer) error {
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	fileInfo, err := file.Stat()
	if err != nil {
		return err
	}

	zipFile, err := zipWriter.Create(fileInfo.Name())
	if err != nil {
		return err
	}

	_, err = io.Copy(zipFile, file)
	if err != nil {
		return err
	}

	return nil
}
