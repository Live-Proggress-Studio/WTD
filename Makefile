appname := wtd
SERVER_PID := main.exe

# Запуск сервера и фронтенда одновременно
Default: run-backend run-frontend

# Запуск сервера
run-backend:
	@cd backend && go run ./cmd/$(appname)/main.go &

# Завершение сервера
stop-backend:
	taskkill /f /t /im $(SERVER_PID)

# Запуск фронтенда
run-frontend:
	cd frontend && yarn && yarn dev

# Завершение всех процессов (сервера и фронтенда)
stop: stop-backend
