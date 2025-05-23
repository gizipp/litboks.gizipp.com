# 📄 Product Requirements Document (PRD)

**Project Name:** LITBOKS  
**Domain:** https://litboks.gizipp.com *(planned)*  
**Owner:** GIZ  
**Version:** 1.0 (MVP)  
**Last Updated:** 2025-05-21

---

## 🔍 1. Latar Belakang & Visi

Banyak ebook digital berkualitas yang tidak dikenal luas karena kurangnya kurasi, review, dan eksposur. **LITBOKS** hadir untuk mengisi celah tersebut: platform katalog ebook gratis dan legal, dengan fitur review serta sorotan komunitas.

### 🎯 Visi
> “LITBOKS: Baca, Ulas, Sebar Karya Digital”

---

## 🚩 2. Tujuan Produk

- Menyediakan katalog ebook gratis berkualitas.
- Menyediakan fitur review dan diskusi oleh pembaca.
- Meningkatkan visibilitas penulis independen.
- Membangun komunitas literasi yang terbuka dan suportif.

---

## 🧩 3. Fitur Utama (MVP)

### ✅ 1. Beranda
- Buku sorotan mingguan
- Review terbaru dari pengguna
- Navigasi genre dan katalog

### ✅ 2. Katalog Buku
- Daftar ebook berdasarkan genre
- Filter & pencarian (judul, penulis, rating)
- Tombol "Baca Sekarang" (link ke file PDF/EPUB legal)

### ✅ 3. Halaman Detail Buku
- Judul, penulis, cover, genre
- Deskripsi lengkap
- Tombol akses/download
- Review pengguna

### ✅ 4. Sistem Review
- Rating bintang (1–5)
- Komentar (min. 100 karakter)
- Highlight kutipan favorit (opsional)
- Upvote review pengguna lain

### ✅ 5. Profil Pengguna (basic)
- Nama pengguna
- Review yang ditulis
- Daftar bacaan (opsional)

### ✅ 6. Panel Admin/Kurator
- Tambah/edit buku
- Kurasi & tag rekomendasi

---

## 🛠️ 4. Teknologi & Stack

| Komponen         | Teknologi         | Catatan                                      |
|------------------|-------------------|-----------------------------------------------|
| Framework        | Astro             | Statis, cepat, SEO-friendly                  |
| UI Interaktif    | React/Svelte      | Untuk rating, review form, dsb               |
| Backend Review   | Supabase/Firebase | Sederhana & real-time                        |
| CMS Buku         | Markdown          | Mudah dikelola dan versionable               |
| Auth (opsional)  | Supabase / Clerk  | Untuk review terautentikasi                  |
| Hosting          | Vercel / Netlify  | Deploy cepat & gratis                        |
| Styling          | TailwindCSS       | Lightweight, responsif, modern               |

---

## 🧱 5. Struktur Proyek (Proposed)
src/
├── components/           # Komponen yang dapat digunakan kembali
│   ├── BookCard.astro    # Komponen untuk menampilkan kartu buku
│   ├── ReviewForm.jsx    # Form untuk menulis review
│   └── RatingStars.jsx   # Komponen rating bintang
├── content/             # Konten statis
│   └── books/           # File markdown untuk setiap buku
├── pages/               # Halaman-halaman Astro
│   ├── index.astro      # Halaman beranda
│   ├── buku/            # Halaman detail buku
│   │   └── [slug].astro # Template halaman detail buku
│   └── kategori/        # Halaman kategori/genre
│       └── [genre].astro # Template halaman kategori
└── public/              # Aset statis
    └── ebooks/          # File PDF/EPUB (jika legal di-host)

---

## ⏳ 6. Roadmap & Timeline

### 🚀 Tahap 1: MVP Launch (Mei–Juni)
- Layout awal dan katalog 10 buku
- Sistem review dasar (bintang + komentar)
- Deploy ke `litboks.gizipp.com`

### 🌱 Tahap 2: Komunitas & Interaksi (Juli)
- Login pengguna
- Profil reviewer & daftar bacaan
- Follow reviewer & bookmark buku

### 💰 Tahap 3: Ekspansi & Monetisasi (Agustus+)
- Donasi ke penulis indie
- Kolaborasi platform (Prodig, Cabaca, dll)
- Event komunitas & tantangan review

---

## 📊 7. Key Metrics

- Buku dibaca per minggu
- Jumlah review aktif
- Engagement komunitas (upvote, komentar)
- Jumlah user terdaftar
- CTR “Baca Sekarang”

---

## 💬 8. Kolaborasi

- Penulis → kurasi & izin distribusi
- Komunitas pembaca → review & feedback
- Platform distribusi → kemitraan konten

---

## 📎 9. Konten Awal

- 10 Ebook gratis berkualitas (legal, PDF/EPUB)
- 5 Review dummy
- Panduan “Cara Menulis Review yang Bermanfaat”
- Editorial: “Kenapa Ebook Gratis Bukan Murahan”

---

## ✅ Status: SIAP EKSEKUSI

Tahap selanjutnya:
- Setup Astro project dasar
- Buat struktur katalog `/books/*.md`
- Integrasi Supabase untuk review MVP
