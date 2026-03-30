package config

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func NewDatabase() *sql.DB {
	db, err := sql.Open("sqlite3", "DineFlow.db")

	if err != nil {
		panic(err)
	}

	db.SetMaxOpenConns(25)
	db.SetMaxIdleConns(5)

	return db
}
