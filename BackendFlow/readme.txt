Baik, saya rangkum **struktur folder Clean Architecture yang rapi + realistis untuk project Go (Gin + DB)** agar Anda punya gambaran jelas.

---

# 📁 Struktur Folder (Final Recommended)

```plaintext
your_project/
│
├── main.go
├── go.mod
│
├── config/                     # konfigurasi (DB, env, dll)
│   ├── database.go
│   └── migrate.go
│
├── domain/                     # inti aplikasi (pure)
│   ├── models/
│   │   └── event.go
│   │
│   └── repository/
│       └── event_repository.go   # interface
│
├── usecase/                    # business logic
│   └── event_usecase.go
│
├── infrastructure/             # implementasi teknis
│   └── database/
│       └── event_repository_impl.go
│
├── delivery/                   # layer luar (HTTP, API)
│   └── http/
│       ├── handler/
│       │   └── event_handler.go
│       │
│       └── routes/
│           └── routes.go
│
└── utils/                      # optional (helper)
    └── response.go
```

---

# 🧠 Penjelasan Tiap Folder

---

## 🔧 `config/`

Tempat:

* koneksi database
* migration

```go
NewDB()
Migrate()
```

---

## 🧱 `domain/` (PALING PENTING)

### 📁 `models/`

```go
type Event struct {
	ID   int
	Name string
}
```

👉 hanya struct, tidak ada logic DB

---

### 📁 `repository/` (INTERFACE)

```go
type EventRepository interface {
	GetAll() ([]Event, error)
	Save(e *Event) error
	Delete(id int) error
}
```

👉 hanya kontrak (tidak ada SQL)

---

## ⚙️ `usecase/`

```go
type EventUsecase struct {
	Repo repository.EventRepository
}
```

👉 logic bisnis

---

## 🏗️ `infrastructure/`

```go
type eventRepositoryImpl struct {
	DB *sql.DB
}
```

👉 implementasi nyata:

* SQL query
* akses DB

---

## 🌐 `delivery/http/`

### 📁 `handler/`

```go
func (h *EventHandler) GetEvents(c *gin.Context)
```

👉 handle request & response

---

### 📁 `routes/`

```go
r.GET("/events", handler.GetEvents)
```

👉 mapping endpoint

---

## 🚀 `main.go`

👉 tempat semua dirakit (wiring)

```go
db := config.NewDB()

repo := database.NewEventRepository(db)
usecase := usecase.NewEventUsecase(repo)
handler := handler.NewEventHandler(usecase)

routes.SetupRoutes(r, handler)
```

---

# 🔥 Alur Data (WAJIB PAHAM)

```plaintext
Request (HTTP)
   ↓
Handler
   ↓
Usecase
   ↓
Repository (interface)
   ↓
Repository Impl (SQL)
   ↓
Database
```

---

# ⚠️ Aturan Penting

### ❌ Jangan lakukan ini:

* handler langsung ke DB
* usecase import Gin
* model punya query SQL
* routes buat DB

---

### ✅ Harus seperti ini:

* DB hanya di `main.go`
* Query hanya di `infrastructure`
* Interface di `domain`
* Injection lewat constructor

---

# 🎯 Versi Sederhana (Kalau Mau Lebih Ringkas)

Kalau project belum besar, bisa pakai:

```plaintext
your_project/
│
├── main.go
├── config/
├── models/
├── repository/
├── service/
├── handler/
└── routes/
```

👉 ini versi **semi clean architecture**

---

# 🚀 Kesimpulan

Struktur minimal clean architecture:

* `config/` → DB
* `domain/` → model + interface
* `usecase/` → logic
* `infrastructure/` → SQL
* `delivery/` → HTTP
* `main.go` → wiring

---

Kalau Anda mau, saya bisa bantu:

* generate **template project siap jalan**
* tambah **CRUD lengkap (POST, GET, DELETE, UPDATE)**
* atau sesuaikan dengan **dashboard siswa (TA Anda)**

Silakan lanjut 👍
