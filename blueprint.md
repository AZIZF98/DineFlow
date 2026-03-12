# Blueprint: Halaman Login Karyawan

## Ikhtisar

Membuat halaman login yang modern dan responsif untuk karyawan warung atau restoran. Halaman ini akan menggunakan skema warna yang ditentukan (Warm Yellow, Burnt Orange) dan akan dibangun menggunakan React dan Material-UI (MUI) untuk memastikan desain yang bersih dan pengalaman pengguna yang baik.

## Rencana Implementasi

1.  **Instalasi Dependensi:**
    *   Instal `@mui/material`, `@emotion/react`, dan `@emotion/styled` untuk menggunakan komponen MUI.

2.  **Struktur Proyek:**
    *   Buat direktori baru `src/pages` untuk menampung komponen halaman tingkat atas.
    *   Buat file `src/pages/LoginPage.jsx` sebagai komponen utama untuk halaman login.
    *   Ubah `src/components/Input.jsx` dan `src/components/Button.jsx` untuk konsistensi (meskipun tidak akan langsung digunakan di halaman login baru, ini adalah praktik yang baik).
    *   Buat `src/components/Header.jsx` untuk judul halaman.

3.  **Theming:**
    *   Konfigurasikan tema MUI di `App.jsx` untuk menggunakan palet warna yang diminta:
        *   Primary: `Burnt Orange (#D2691E)`
        *   Secondary: `Warm Yellow (#FFC15E)`

4.  **Komponen Halaman Login (`LoginPage.jsx`):**
    *   Gunakan komponen `Box` dari MUI untuk layout utama dengan latar belakang `Warm Yellow`.
    *   Gunakan komponen `Paper` dari MUI untuk membuat container form login dengan latar belakang putih dan sudut yang membulat.
    *   Tambahkan judul "Login Karyawan" menggunakan komponen `Typography`.
    *   Gunakan komponen `TextField` dari MUI untuk input email dan password.
    *   Gunakan komponen `Button` dari MUI untuk tombol login dengan warna `Burnt Orange`.

5.  **Pembaruan `App.jsx`:**
    *   Hapus kode placeholder yang ada.
    *   Impor dan render komponen `LoginPage` di dalam `ThemeProvider` MUI.

6.  **Pembersihan:**
    *   Hapus konten dari `App.css` dan `index.css` karena styling akan ditangani oleh MUI dan JSS (CSS-in-JS).
