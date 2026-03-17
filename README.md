# Portfolio Next.js

Aplikasi web portfolio sederhana dan rapi menggunakan Next.js (App Router) dengan halaman:

- Home
- About
- Projects
- Contact

## Fitur Utama

- Routing framework Next.js
- Komponen reusable (`Navbar`, `Footer`, `ThemeToggle`, `ProjectsGrid`)
- Struktur HTML semantik (`header`, `main`, `section`, `article`, `footer`)
- Styling manual CSS pada halaman About
- Bootstrap untuk layout/styling halaman Projects dan Contact
- Validasi form kontak dengan JavaScript dasar (required field + format email)
- Dark mode (fitur tambahan)
- Lazy loading/code splitting pada komponen daftar project (`next/dynamic`)
- Image optimization Next.js dengan `next/image`
- Testing dengan Jest + Testing Library

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka: `http://localhost:3000`

## Testing dan Build

```bash
npm run test
npm run build
```

## Deployment (Vercel)

1. Push project ke GitHub.
2. Login ke Vercel.
3. Import repository GitHub.
4. Deploy tanpa konfigurasi tambahan (default Next.js).

Alternatif hosting: Netlify atau GitHub Pages (dengan konfigurasi tambahan untuk Next.js).
