package main

import (
	"BackEndFlow/config"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	db := config.NewDatabase()

	err := config.Migrate(db)
	if err != nil {
		panic(err)
	}

	server.Run(":8080")
}
