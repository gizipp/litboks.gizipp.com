# Katalog Buku LITBOKS

Daftar buku yang tersedia di LITBOKS. Buku-buku ini bisa diakses secara gratis dan legal.

> **Catatan**: Data lengkap tersedia di [`books.json`](./books.json)

## Teknologi & Programming

### Software Engineer's Notes
- **Penulis**: Kotaro
- **Genre**: Teknologi, Programming, Software Development
- **Deskripsi**: Catatan-catatan seorang software engineer tentang pengembangan perangkat lunak, best practices, dan pengalaman dalam industri teknologi.
- **URL**: https://kotarois.me/product/e3f98971-467e-47e8-952e-c808d5864bb8
- **Status**: ✅ Tersedia

### Self-hosting dengan Dokku
- **Penulis**: Adi P
- **Genre**: DevOps, Server, Deployment
- **Deskripsi**: Panduan lengkap tentang cara melakukan self-hosting menggunakan Dokku, platform open source yang memudahkan deployment aplikasi.
- **URL**: https://me.bikinajadulu.web.id/products/self-hosting-dengan-dokku-21d5150c631b2c97
- **Status**: ✅ Tersedia

## Business & Product Management

### Getting Real
- **Penulis**: Jason Fried, David Heinemeier Hansson, Matt Linderman
- **Genre**: Business, Software Development, Product Management
- **Deskripsi**: Buku yang membahas tentang pendekatan berbeda dalam pengembangan perangkat lunak, fokus pada kesederhanaan dan efisiensi.
- **URL**: https://books.37signals.com/8/getting-real
- **Status**: ✅ Tersedia

## Panduan Kontribusi

### Menambahkan Buku Baru
1. Pastikan buku tersedia secara gratis dan legal
2. Update kedua file:
   - `books.json`: Tambahkan data buku dalam format JSON
   - `BOOKS.md`: Tambahkan buku dalam format markdown
3. Format untuk `books.json`:
   ```json
   {
     "id": "slug-buku",
     "title": "Judul Buku",
     "author": "Nama Penulis",
     "genres": ["Genre 1", "Genre 2"],
     "description": "Deskripsi singkat",
     "url": "URL buku",
     "status": "available",
     "addedAt": "YYYY-MM-DD"
   }
   ```
4. Format untuk `BOOKS.md`:
   ```markdown
   ### [Judul Buku]
   - **Penulis**: [Nama Penulis]
   - **Genre**: [Genre 1], [Genre 2], ...
   - **Deskripsi**: [Deskripsi singkat]
   - **URL**: [URL buku]
   - **Status**: [✅ Tersedia / 🔄 Dalam Proses / ❌ Tidak Tersedia]
   ```

### Kategori Buku
Lihat `books.json` untuk daftar kategori lengkap.

### Status Buku
Lihat `books.json` untuk daftar status lengkap.
