# variables
appname = wtd

# run go app
Default:
	go run ./cmd/$(appname)/main.go
# build go app
build:
	go build -o $(appname) ./cmd/$(appname)/main.go

# start binary app
start:
	./$(appname)