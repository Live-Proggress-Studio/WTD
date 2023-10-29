# Use official Golang image
FROM golang:latest AS backend

# Set the working directory
WORKDIR /WTD/backend

# Copy the Go module files and download dependencies
COPY ./backend/go.mod ./backend/go.sum ./
RUN go mod download

# Copy the rest of the application
COPY ./backend /WTD/backend

# Build the Go application
RUN go build -o wtd ./cmd/wtd/main.go

# Expose port 4000
EXPOSE 4000

# Start the backend application
CMD ["./wtd"]
