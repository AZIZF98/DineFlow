package config

import "database/sql"

func Migrate(db *sql.DB) error {
	query := `
	CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	password TEXT NOT NULL,
	role TEXT CHECK(role IN ('admin', 'karyawan')) DEFAULT 'kayawan',
	birth_day DATETIME, 
	created_at DATETIME,
	deleted_at DATETIME
	)
	`
	_, err := db.Exec(query)
	if err != nil {
		return err
	}
	return nil
}
