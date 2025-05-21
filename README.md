# LITBOKS

Platform katalog dan review ebook indie gratis.

## 🚀 Fitur

- 📚 Katalog buku dengan kategori
- 🔍 Halaman detail buku
- 📥 Link download langsung
- 🎨 UI modern dengan Tailwind CSS
- 📱 Responsive design

## 🛠️ Teknologi

- [Astro](https://astro.build) - Framework web modern
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Netlify](https://www.netlify.com) - Hosting & form handling

## 🏗️ Struktur Proyek

```
litboks/
├── public/
│   └── covers/         # Cover buku
├── src/
│   ├── components/     # Komponen UI
│   ├── layouts/        # Layout halaman
│   ├── pages/          # Halaman website
│   └── styles/         # Style global
├── books.json          # Data buku
└── submissions/        # Form submissions
```

## 🚀 Memulai

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/litboks.git
   cd litboks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000)

## 📝 Menambah Buku

1. Tambahkan data buku di `books.json`:
   ```json
   {
     "title": "Judul Buku",
     "author": "Nama Penulis",
     "genres": ["Genre 1", "Genre 2"],
     "description": "Deskripsi buku...",
     "url": "https://link-download.com",
     "cover": "/covers/nama-file.jpg"
   }
   ```

2. Tambahkan cover buku di `public/covers/`

## 🤝 Kontribusi

1. Fork repository
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'feat: tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

MIT License - lihat [LICENSE](LICENSE) untuk detail.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# litboks.gizipp.com
