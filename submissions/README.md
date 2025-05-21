# Submissions

Folder ini berisi submission buku baru dari Netlify form.

## Struktur

```
submissions/
├── pending/           # Submission yang belum direview
│   └── YYYY-MM-DD/    # Dikelompokkan berdasarkan tanggal
├── approved/          # Submission yang sudah disetujui
│   └── YYYY-MM-DD/    # Dikelompokkan berdasarkan tanggal
└── rejected/          # Submission yang ditolak
    └── YYYY-MM-DD/    # Dikelompokkan berdasarkan tanggal
```

## Format File

Setiap submission disimpan dalam format JSON:

```json
{
  "id": "unique-submission-id",
  "submittedAt": "2024-05-21T14:30:00Z",
  "status": "pending",
  "data": {
    "title": "Judul Buku",
    "author": "Nama Penulis",
    "genres": ["Genre 1", "Genre 2"],
    "description": "Deskripsi singkat",
    "url": "URL buku",
    "submitter": {
      "name": "Nama Pengirim",
      "email": "email@example.com",
      "reason": "Alasan menambahkan buku ini"
    }
  }
}
```

## Proses Review

1. Netlify form submission masuk ke folder `pending/YYYY-MM-DD/`
2. Setelah direview:
   - Jika disetujui: Pindahkan ke `approved/YYYY-MM-DD/` dan update `books.json`
   - Jika ditolak: Pindahkan ke `rejected/YYYY-MM-DD/` dengan alasan penolakan
3. Kirim notifikasi ke submitter

## Contoh

```json
// submissions/pending/2024-05-21/submission-123.json
{
  "id": "submission-123",
  "submittedAt": "2024-05-21T14:30:00Z",
  "status": "pending",
  "data": {
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genres": ["Programming", "Software Development"],
    "description": "Buku tentang best practices dalam menulis kode yang bersih dan mudah dipelihara.",
    "url": "https://example.com/clean-code",
    "submitter": {
      "name": "John Doe",
      "email": "john@example.com",
      "reason": "Buku ini sangat membantu untuk belajar best practices programming"
    }
  }
}
``` 