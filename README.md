# Tugas Vibe Coding: Aplikasi Lapor Fasilitas

Repository ini berisi source code untuk tugas **Vibe Coding**. Aplikasi ini adalah sistem pelaporan fasilitas rusak berbasis web yang dibangun menggunakan **MERN Stack** (MongoDB, Express, React, Node.js).

## Identitas Mahasiswa

| Informasi | Detail |
| :--- | :--- |
| **Nama** | Shinta Alya Ramadani |
| **NIM** | 5027241016 |
| **Kelas** | Kelas B |
| **Prodi** | Teknologi Informasi |

---

## Deskripsi Proyek

**VibeReport** adalah aplikasi sederhana untuk memudahkan mahasiswa atau staf melaporkan kerusakan fasilitas kampus.
Masalah yang diangkat adalah sulitnya melapor kerusakan secara manual. Dengan aplikasi ini, user bisa:
1.  **Register & Login** (Sistem autentikasi aman dengan JWT).
2.  **Dashboard Laporan**: Melihat daftar kerusakan yang sudah dilaporkan orang lain.
3.  **Input Laporan**: Mengupload judul, deskripsi, dan **foto bukti** kerusakan.
4.  **Hapus/Selesaikan**: Menghapus laporan yang sudah ditangani.

---

## Tech Stack

**Frontend:**
* React.js (Vite)
* CSS Modern (Glassmorphism Style)
* Axios (API Request)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Database)
* JWT (Authentication)
* Multer (Image Upload)

**Tools:**
* MongoDB Compass (GUI Database)
* Postman / Browser (Testing)

---

## Struktur Folder

Berikut adalah struktur folder dalam proyek ini:

```text
vibe-coding-project/
│
├── backend/                 # SERVER (API & Database)
│   ├── models/              # Skema Database (User.js, Report.js)
│   ├── routes/              # Jalur API (auth.js, reports.js)
│   ├── uploads/             # Folder penyimpanan gambar otomatis
│   ├── .env                 # Konfigurasi Database & Port
│   └── server.js            # Entry point server
│
├── frontend/                # CLIENT (Tampilan Web)
│   ├── src/
│   │   ├── pages/           # Halaman (Login, Dashboard, AddReport)
│   │   ├── App.jsx          # Routing Utama
│   │   ├── index.css        # Styling Global (Glassmorphism)
│   │   └── main.jsx
│   └── package.json
│
└── README.md                # Dokumentasi Proyek
```

Tentu, ini adalah draft README.md yang sudah saya sesuaikan dengan struktur folder, tech stack, dan langkah-langkah yang kita kerjakan bersama. Formatnya sudah dibuat mirip dengan template tugas kuliah/Vibe Coding pada umumnya.

Kamu tinggal Copy-Paste kode di bawah ini ke dalam file bernama README.md di folder paling luar (root folder) proyekmu.

Jangan lupa isi bagian [ISI NAMA KAMU], [ISI NIM], dan ganti link gambar screenshot sesuai nama file gambar yang kamu simpan nanti.

Markdown

# Tugas Vibe Coding: Aplikasi Lapor Fasilitas

Repository ini berisi source code untuk tugas **Vibe Coding**. Aplikasi ini adalah sistem pelaporan fasilitas rusak berbasis web yang dibangun menggunakan **MERN Stack** (MongoDB, Express, React, Node.js).

## Identitas Mahasiswa

| Informasi | Detail |
| :--- | :--- |
| **Nama** | [ISI NAMA KAMU DISINI] |
| **NIM** | [ISI NIM KAMU DISINI] |
| **Kelas** | [ISI KELAS KAMU] |
| **Prodi** | Teknologi Informasi |

---

## Deskripsi Proyek

**VibeReport** adalah aplikasi sederhana untuk memudahkan mahasiswa atau staf melaporkan kerusakan fasilitas kampus.
Masalah yang diangkat adalah sulitnya melapor kerusakan secara manual. Dengan aplikasi ini, user bisa:
1.  **Register & Login** (Sistem autentikasi aman dengan JWT).
2.  **Dashboard Laporan**: Melihat daftar kerusakan yang sudah dilaporkan orang lain.
3.  **Input Laporan**: Mengupload judul, deskripsi, dan **foto bukti** kerusakan.
4.  **Hapus/Selesaikan**: Menghapus laporan yang sudah ditangani.

---

## Tech Stack

**Frontend:**
* React.js (Vite)
* CSS Modern (Glassmorphism Style)
* Axios (API Request)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Database)
* JWT (Authentication)
* Multer (Image Upload)

**Tools:**
* MongoDB Compass (GUI Database)
* Postman / Browser (Testing)

---

## Struktur Folder

Berikut adalah struktur folder dalam proyek ini:

```text
vibe-coding-project/
│
├── backend/                 # SERVER (API & Database)
│   ├── models/              # Skema Database (User.js, Report.js)
│   ├── routes/              # Jalur API (auth.js, reports.js)
│   ├── uploads/             # Folder penyimpanan gambar otomatis
│   ├── .env                 # Konfigurasi Database & Port
│   └── server.js            # Entry point server
│
├── frontend/                # CLIENT (Tampilan Web)
│   ├── src/
│   │   ├── pages/           # Halaman (Login, Dashboard, AddReport)
│   │   ├── App.jsx          # Routing Utama
│   │   ├── index.css        # Styling Global (Glassmorphism)
│   │   └── main.jsx
│   └── package.json
│
└── README.md                # Dokumentasi Proyek
```

## Screenshots Aplikasi

**1. Halaman Login & Register**

<img width="629" height="689" alt="image" src="https://github.com/user-attachments/assets/a7141bb3-3099-48be-abf4-a3e1a27fca6b" />

**2. Dashboard Utama**

<img width="1467" height="972" alt="image" src="https://github.com/user-attachments/assets/5ba41566-6d4c-42e7-a7fd-994514429ab2" />

**3. Form Input Laporan**

<img width="1517" height="954" alt="image" src="https://github.com/user-attachments/assets/e91f423f-7b7d-4eba-a66a-e3acffcba8e8" />

**4. Bukti Database (MongoDB Compass)**

<img width="1249" height="566" alt="image" src="https://github.com/user-attachments/assets/c4c788dc-5ab1-4887-8db2-10a2f694e014" />


## Cara Menjalankan Project (Installation Guide)

**Prasyarat**
- Node.js sudah terinstall.
- MongoDB Community Server sudah berjalan (Status: Running).

**Langkah 1: Setup Backend (Server)**
Buka terminal, arahkan ke folder backend.
```
cd backend
npm install
```
**Langkah 2: Buat file .env di dalam folder backend**
```
npx nodemon server.js
Pastikan muncul pesan: "✅ MongoDB Connected"
```
**Langkah 3: Setup Frontend (Client)**
Buka terminal baru (jangan matikan terminal backend), arahkan ke folder frontend.
```
cd frontend
npm install
```
Jalankan frontend:
```
npm run dev
```
**Langkah 4: Akses Aplikasi**
**Buka browser dan kunjungi link yang muncul (http://localhost:5173).**


