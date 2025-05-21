# 📬 RFC: LITBOKS – Platform Katalog & Review Ebook Indie

**Request For Comments**  
**ID:** RFC-001  
**Judul:** LITBOKS – Platform Kurasi & Review Ebook Indie Gratis  
**Penulis:** GIZ  
**Tanggal:** 2025-05-21  
**Status:** Draft  
**Versi Target:** MVP v1.0

---

## 🧭 Ringkasan

**LITBOKS** adalah proyek katalog digital dan ruang baca terbuka untuk ebook indie gratis & legal. Platform ini akan memungkinkan pengguna untuk:

- Menemukan buku indie digital berkualitas  
- Membaca & mengunduh secara legal  
- Memberikan review dan rating  
- Terlibat dalam kurasi komunitas

---

## 🎯 Tujuan RFC

1. Mendefinisikan arsitektur awal LITBOKS
2. Mengklarifikasi fitur MVP dan batasannya
3. Membuka ruang diskusi teknis dan desain
4. Mengundang kontribusi dari developer, kurator, dan komunitas

---

## 🔍 Latar Belakang

Ebook indie digital di Indonesia terus bertumbuh, namun kurang dukungan dari sisi review, kurasi, dan eksposur. Banyak platform besar tidak memberikan sorotan cukup untuk karya non-komersial. **LITBOKS** akan menjadi ruang alternatif yang etis, legal, dan terbuka untuk semua.

---

## 🧱 Arsitektur Usulan

| Komponen         | Teknologi         | Alasan                                      |
|------------------|-------------------|---------------------------------------------|
| Framework        | Astro             | Ringan, statis, SEO-friendly                |
| UI Interaktif    | React/Svelte      | Untuk komponen dinamis (rating, form)       |
| Database Review  | Supabase/Firebase | Realtime, cocok untuk MVP ringan            |
| CMS Buku         | Markdown          | Sederhana dan mudah dikurasi                |
| Auth (opsional)  | Supabase Auth     | Untuk kontrol review dan profil pengguna    |
| Hosting          | Vercel / Netlify  | Gratis dan mudah untuk Astro                |

---

## 🔧 Fitur MVP

- Halaman Beranda: Sorotan buku dan review terbaru  
- Halaman Katalog: Daftar buku, filter genre & pencarian  
- Halaman Detail Buku: Info, link download, review  
- Sistem Review: Rating bintang, komentar, kutipan favorit  
- Profil Reviewer: Basic (nama, review, daftar bacaan)  
- Admin/Kurator: Tambah/edit buku, sorotan mingguan

---

## 🧪 Pertanyaan untuk Diskusi

1. **Struktur Buku:** Markdown lokal atau sumber eksternal (Airtable, Notion API)?  
2. **Review System:** Cukup rating + komentar atau perlu fitur lanjutan (kutipan, tag)?  
3. **Moderasi:** Apakah butuh login semua reviewer? Atau semi-anonim dengan kurasi?  
4. **Distribusi File:** File PDF/EPUB di-host di public folder atau link ke sumber asli?  
5. **Kurasi Komunitas:** Perlu voting/rekomendasi buku dari pengguna?

---

## 📍 Roadmap

| Tahap    | Target                                    | Waktu        |
|----------|-------------------------------------------|--------------|
| RFC      | Diskusi terbuka & revisi arsitektur       | Mei 2025     |
| MVP Dev  | Setup Astro, 10 buku, sistem review dasar | Juni 2025    |
| Alpha    | Uji coba komunitas kecil                  | Juli 2025    |
| Beta     | Launch versi publik                       | Agustus 2025 |

---

## 🔓 Keterbukaan Kontribusi

Proyek ini akan dibuka di GitHub dan menerima kontribusi dari:

- Developer frontend (Astro, React/Svelte)
- Penulis & pembaca indie
- Kurator literasi digital
- Desainer UI/UX
- Kontributor konten (review awal, editorial)

---

## 📬 Ajukan Masukan

- DM GIZ via sosial media  
- Komentar melalui GitHub Issues *(soon)*  
- Kirim email ke: giz[at]gizipp[dot]com *(dummy email)*

---

## 📎 Referensi

- [Astro Docs](https://docs.astro.build/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✅ Status RFC

RFC ini sedang dalam tahap review awal dan siap ditindaklanjuti untuk pengembangan MVP **LITBOKS v1.0**
