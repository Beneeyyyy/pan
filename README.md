# Dashboard Partai Demokrat - SPA System

Dashboard HTML murni dengan sistem Single Page Application (SPA) menggunakan vanilla JavaScript.

## Struktur Folder

```
Beni/
├── index.html              # File utama dengan sidebar dan router
├── js/
│   ├── router.js          # Router system (opsional, sudah inline di index.html)
│   └── pages/             # File JS untuk setiap halaman
│       ├── events.js      # Halaman Events (lengkap dengan tampilan)
│       ├── massa.js       # Halaman Data Massa
│       ├── checkin.js     # Halaman Check-in
│       └── ...            # Halaman lainnya
├── pages/                 # File HTML template (tidak digunakan untuk file:// protocol)
├── components/            # Komponen reusable
│   └── sidebar.html       # Sidebar component (referensi)
└── img/                   # Assets gambar
    └── bg.jpg            # Background image
```

## Cara Kerja

1. **Sidebar Konsisten**: Sidebar tetap sama di semua halaman
2. **Dynamic Content**: Konten berubah tanpa reload halaman
3. **File JS Per Menu**: Setiap menu punya file JS sendiri di `js/pages/`
4. **No Server Required**: Bisa dibuka langsung dengan file:// protocol

## Cara Menambah Halaman Baru

### 1. Buat File JS Baru

Buat file di `js/pages/nama-halaman.js`:

```javascript
// Nama Halaman Page Content
const NamaHalamanPage = {
    render() {
        return `
            <div class="page-header">
                <div class="page-header-left">
                    <h1>Judul Halaman</h1>
                    <p>Deskripsi halaman</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <!-- Konten halaman di sini -->
                </div>
            </div>
            
            <style>
                /* CSS khusus halaman ini */
            </style>
        `;
    }
};
```

### 2. Load File JS di index.html

Tambahkan di bagian `<head>`:

```html
<script src="js/pages/nama-halaman.js"></script>
```

### 3. Update Router

Tambahkan method di object `APP` di index.html:

```javascript
getNamaHalamanContent() {
    return typeof NamaHalamanPage !== 'undefined' ? 
           NamaHalamanPage.render() : 
           '<div>Loading...</div>';
},
```

Dan tambahkan di `getPageContent()`:

```javascript
const pages = {
    // ... pages lainnya
    'nama-halaman': this.getNamaHalamanContent(),
};
```

### 4. Tambahkan Menu di Sidebar

Tambahkan link di sidebar:

```html
<a href="#nama-halaman" class="nav-item" data-page="nama-halaman">
    <svg><!-- icon --></svg>
    <span>Nama Halaman</span>
</a>
```

## Halaman yang Sudah Ada

1. **Overview** - Dashboard utama dengan charts
2. **Events** - Daftar event (tampilan lengkap dari Laravel)
3. **Data Massa** - Placeholder dengan angka 3
4. **Verifikasi Kader** - Placeholder dengan angka 4
5. **Check-in** - Placeholder dengan angka 5
6. **Tiket** - Placeholder dengan angka 6
7. **WhatsApp Blast** - Placeholder dengan angka 7
8. **Kegiatan Dewan** - Placeholder dengan angka 8
9. **Laporan Kegiatan** - Placeholder dengan angka 9
10. **Berita & Artikel** - Placeholder dengan angka 10
11. **Data Pengurus** - Placeholder dengan angka 11
12. **Statistik** - Placeholder dengan angka 12
13. **Peta Sebaran** - Placeholder dengan angka 13
14. **Manajemen User** - Placeholder dengan angka 14
15. **Pengaturan** - Placeholder dengan angka 15

## Fitur

- ✅ Sidebar konsisten di semua halaman
- ✅ Navigasi tanpa reload (SPA)
- ✅ URL hash navigation (#events, #massa, dll)
- ✅ Browser back/forward support
- ✅ Active menu highlighting
- ✅ Smooth transitions
- ✅ Responsive design
- ✅ Glass morphism effect
- ✅ Background image support

## Cara Menggunakan

1. Buka `index.html` di browser
2. Klik menu di sidebar
3. Konten akan berubah tanpa reload
4. Sidebar tetap konsisten

## Tips Development

- Gunakan console.log untuk debugging (buka Developer Tools F12)
- Setiap halaman bisa punya CSS sendiri di dalam method `render()`
- Variabel CSS global tersedia: `--primary`, `--success`, `--warning`, dll
- Gunakan class yang sudah ada: `.card`, `.btn`, `.badge`, dll

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Tidak perlu server HTTP, bisa langsung buka file!
