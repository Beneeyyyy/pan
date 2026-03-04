// Berita Page Content
const BeritaPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <div class="page-header-avatar" style="background: linear-gradient(135deg, #DC2626, #B91C1C);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
        </div>
        <div>
            <h1>Berita & Artikel</h1>
            <p>Kelola konten berita yang ditampilkan di landing page</p>
        </div>
    </div>
    <div class="page-header-right">
        <button class="btn btn-primary" onclick="alert('Tambah Berita')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            Tambah Berita
        </button>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid-3">
    <div class="stat-card" style="border-left: 4px solid #DC2626;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(220, 38, 38, 0.1); color: #DC2626;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
            </div>
        </div>
        <div class="stat-value">24</div>
        <div class="stat-label">Total Berita</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
        </div>
        <div class="stat-value">18</div>
        <div class="stat-label">Berita Aktif</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #3B82F6;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
        </div>
        <div class="stat-value">5</div>
        <div class="stat-label">Bulan Ini</div>
    </div>
</div>

<!-- Filter -->
<div class="card" style="margin-bottom: 24px;">
    <div class="card-body" style="padding: 16px;">
        <form onsubmit="return false;">
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                <div style="flex: 1; min-width: 200px;">
                    <input type="text" class="form-input" placeholder="Cari judul berita...">
                </div>
                <div style="min-width: 160px;">
                    <select class="form-input">
                        <option value="">Semua Status</option>
                        <option value="1">Aktif</option>
                        <option value="0">Nonaktif</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    Filter
                </button>
                <button type="reset" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                    Reset
                </button>
            </div>
        </form>
    </div>
</div>

<!-- News Table -->
<div class="card">
    <div class="card-body" style="padding: 0; overflow-x: auto;">
        <table class="table">
            <thead>
                <tr>
                    <th style="width: 50px; text-align: center;">#</th>
                    <th style="width: 80px;">Gambar</th>
                    <th>Judul & Kutipan</th>
                    <th style="width: 120px;">Penulis</th>
                    <th style="width: 130px;">Tanggal</th>
                    <th style="width: 90px; text-align: center;">Status</th>
                    <th style="width: 160px; text-align: right;">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">1</td>
                    <td>
                        <div style="width: 56px; height: 56px; border-radius: 10px; overflow: hidden; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1);">
                            <img src="https://via.placeholder.com/56" alt="Thumbnail" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </td>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px; line-height: 1.4;">Rapat Koordinasi Wilayah DIY Sukses Digelar</div>
                        <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">Rapat koordinasi wilayah DIY telah sukses digelar dengan dihadiri oleh seluruh pengurus dan kader dari 5 kabupaten/kota...</div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #DC2626, #B91C1C); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white;">A</div>
                            <span style="font-size: 13px;">Admin</span>
                        </div>
                    </td>
                    <td>
                        <div style="font-size: 13px;">15 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">14:30 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-success" style="font-size: 11px;">● Aktif</span>
                    </td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-sm btn-secondary" title="Preview" onclick="alert('Preview')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239,68,68,0.15); color: #EF4444; border: 1px solid rgba(239,68,68,0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">2</td>
                    <td>
                        <div style="width: 56px; height: 56px; border-radius: 10px; background: var(--bg-card); display: flex; align-items: center; justify-content: center; color: var(--text-muted); border: 1px dashed rgba(255,255,255,0.15);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>
                        </div>
                    </td>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px; line-height: 1.4;">Sosialisasi Program Kerja 2024 di Bantul</div>
                        <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">Program kerja tahun 2024 telah disosialisasikan kepada seluruh kader di wilayah Bantul dengan antusias yang tinggi...</div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #DC2626, #B91C1C); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white;">B</div>
                            <span style="font-size: 13px;">Budi S</span>
                        </div>
                    </td>
                    <td>
                        <div style="font-size: 13px;">18 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">10:15 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-success" style="font-size: 11px;">● Aktif</span>
                    </td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-sm btn-secondary" title="Preview" onclick="alert('Preview')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239,68,68,0.15); color: #EF4444; border: 1px solid rgba(239,68,68,0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">3</td>
                    <td>
                        <div style="width: 56px; height: 56px; border-radius: 10px; overflow: hidden; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1);">
                            <img src="https://via.placeholder.com/56" alt="Thumbnail" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </td>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px; line-height: 1.4;">Kunjungan Kerja ke Desa Wisata Pentingsari</div>
                        <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">Tim melakukan kunjungan kerja ke Desa Wisata Pentingsari untuk melihat potensi pengembangan pariwisata berbasis masyarakat...</div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #DC2626, #B91C1C); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white;">S</div>
                            <span style="font-size: 13px;">Siti N</span>
                        </div>
                    </td>
                    <td>
                        <div style="font-size: 13px;">20 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">09:00 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-secondary" style="font-size: 11px;">○ Nonaktif</span>
                    </td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-sm btn-secondary" title="Preview" onclick="alert('Preview')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239,68,68,0.15); color: #EF4444; border: 1px solid rgba(239,68,68,0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    .stats-grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    .stat-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }

    .stat-icon-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .form-input {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 10px 16px;
        color: var(--text-primary);
        font-size: 14px;
        width: 100%;
        outline: none;
        transition: all 0.2s ease;
    }

    .form-input:focus {
        border-color: rgba(220, 38, 38, 0.5);
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        background: rgba(0, 0, 0, 0.3);
    }

    .form-input::placeholder {
        color: var(--text-muted);
    }

    .form-input option {
        background: #1a1a2e;
        color: var(--text-primary);
    }

    select.form-input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 16px;
        padding-right: 40px;
    }

    @media (max-width: 1200px) {
        .stats-grid-3 {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .stats-grid-3 {
            grid-template-columns: 1fr;
        }
    }
</style>
`;
    }
};
