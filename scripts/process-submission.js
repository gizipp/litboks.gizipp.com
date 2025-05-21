const fs = require('fs');
const path = require('path');

// Baca books.json
const booksJson = JSON.parse(fs.readFileSync('books.json', 'utf8'));

// Fungsi untuk memproses submission
async function processSubmission(submissionId) {
  // Baca file submission
  const submissionPath = path.join('submissions', 'pending', submissionId);
  const submission = JSON.parse(fs.readFileSync(submissionPath, 'utf8'));

  // Validasi data
  if (!validateSubmission(submission)) {
    throw new Error('Invalid submission data');
  }

  // Generate slug dari judul
  const slug = generateSlug(submission.data.title);

  // Buat entry buku baru
  const newBook = {
    id: slug,
    title: submission.data.title,
    author: submission.data.author,
    genres: submission.data.genres,
    description: submission.data.description,
    url: submission.data.url,
    status: 'available',
    addedAt: new Date().toISOString().split('T')[0]
  };

  // Tentukan kategori
  const category = determineCategory(submission.data.genres);
  
  // Update books.json
  const categoryIndex = booksJson.categories.findIndex(c => c.id === category);
  if (categoryIndex === -1) {
    // Buat kategori baru jika belum ada
    booksJson.categories.push({
      id: category,
      name: getCategoryName(category),
      books: [newBook]
    });
  } else {
    // Tambahkan buku ke kategori yang ada
    booksJson.categories[categoryIndex].books.push(newBook);
  }

  // Update lastUpdated
  booksJson.lastUpdated = new Date().toISOString().split('T')[0];

  // Simpan perubahan
  fs.writeFileSync('books.json', JSON.stringify(booksJson, null, 2));

  // Pindahkan file submission ke folder approved
  const approvedPath = path.join('submissions', 'approved', new Date().toISOString().split('T')[0]);
  fs.mkdirSync(approvedPath, { recursive: true });
  fs.renameSync(submissionPath, path.join(approvedPath, `${submissionId}.json`));

  // Kirim notifikasi ke submitter
  await sendNotification(submission.data.submitter.email, 'approved', submission.data.title);

  return newBook;
}

// Fungsi validasi
function validateSubmission(submission) {
  const required = ['title', 'author', 'genres', 'description', 'url'];
  return required.every(field => submission.data[field]);
}

// Fungsi generate slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Fungsi menentukan kategori
function determineCategory(genres) {
  const categoryMap = {
    'Programming': 'tech',
    'Software Development': 'tech',
    'DevOps': 'tech',
    'Business': 'business',
    'Product Management': 'business',
    'Design': 'design',
    'UX': 'design',
    'Writing': 'writing',
    'Content': 'writing',
    'Personal Development': 'personal'
  };

  for (const genre of genres) {
    if (categoryMap[genre]) {
      return categoryMap[genre];
    }
  }

  return 'other';
}

// Fungsi mendapatkan nama kategori
function getCategoryName(categoryId) {
  const category = booksJson.metadata.categories.find(c => c.id === categoryId);
  return category ? category.name : 'Lainnya';
}

// Fungsi kirim notifikasi
async function sendNotification(email, status, bookTitle) {
  // Implementasi pengiriman email
  console.log(`Sending ${status} notification to ${email} for book "${bookTitle}"`);
}

// Export fungsi
module.exports = {
  processSubmission
}; 