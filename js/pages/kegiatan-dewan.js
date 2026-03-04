// Kegiatan Dewan Page Content
const KegiatanDewanPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary); margin-right: 12px;"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
        <div>
            <h1>Laporan Kegiatan Dewan</h1>
            <p>Semua kegiatan yang dilaporkan oleh anggota dewan</p>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid-4">
    <div class="stat-card" style="border-left: 4px solid #1E3A8A;">
        <div class="stat-icon-wrapper" style="background: rgba(30, 58, 138, 0.1); color: #1E3A8A;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
        </div>
        <div>
            <div class="stat-value">45</div>
            <div class="stat-label">Total Kegiatan</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #3B82F6;">
        <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </div>
        <div>
            <div class="stat-value">12</div>
            <div class="stat-label">Bulan Ini</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
            <div class="stat-value">38</div>
            <div class="stat-label">Published</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #F59E0B;">
        <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div>
            <div class="stat-value">7</div>
            <div class="stat-label">Draft</div>
        </div>
    </div>
</div>

<!-- Filters -->
<div class="card" style="margin-bottom: 24px;">
    <div class="card-body" style="padding: 16px 24px;">
        <form onsubmit="return false;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 16px;">
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Cari Judul</label>
                    <input type="text" class="form-input" placeholder="Cari kegiatan...">
                </div>
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Anggota Dewan</label>
                    <select class="form-input">
                        <option>Semua Anggota</option>
                        <option>H. Ahmad Fauzi</option>
                        <option>Dra. Siti Nurhaliza</option>
                    </select>
                </div>
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Kategori</label>
                    <select class="form-input">
                        <option>Semua</option>
                        <option>Rapat</option>
                        <option>Kunjungan</option>
                        <option>Sosialisasi</option>
                    </select>
                </div>
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Status</label>
                    <select class="form-input">
                        <option>Semua</option>
                        <option>Published</option>
                        <option>Draft</option>
                    </select>
                </div>
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Bulan</label>
                    <select class="form-input">
                        <option>Semua</option>
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                    </select>
                </div>
            </div>
            <div style="display: flex; gap: 12px;">
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

<!-- Activities Table -->
<div class="card">
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th>Kegiatan</th>
                    <th>Anggota</th>
                    <th>Kategori</th>
                    <th>Tanggal</th>
                    <th style="text-align: center;">Media</th>
                    <th style="text-align: center;">Status</th>
                    <th style="text-align: center;">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px;">Rapat Koordinasi Fraksi</div>
                        <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            Gedung DPRD DIY
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div class="avatar-sm">A</div>
                            <div>
                                <div style="font-weight: 600; font-size: 12px;">H. Ahmad Fauzi</div>
                                <div style="font-size: 10px; color: var(--text-muted);">Ketua Fraksi</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-primary">Rapat</span>
                    </td>
                    <td style="white-space: nowrap;">
                        <div>15 Mar 2024</div>
                        <div style="font-size: 10px; color: var(--text-muted);">09:00 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-info">5</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-success">Published</span>
                    </td>
                    <td style="text-align: center;">
                        <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kegiatan')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px;">Kunjungan Kerja ke Desa Wisata</div>
                        <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            Desa Wisata Pentingsari
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div class="avatar-sm">S</div>
                            <div>
                                <div style="font-weight: 600; font-size: 12px;">Dra. Siti Nurhaliza</div>
                                <div style="font-size: 10px; color: var(--text-muted);">Anggota Dewan</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-info">Kunjungan</span>
                    </td>
                    <td style="white-space: nowrap;">
                        <div>18 Mar 2024</div>
                        <div style="font-size: 10px; color: var(--text-muted);">10:30 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-info">8</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-success">Published</span>
                    </td>
                    <td style="text-align: center;">
                        <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kegiatan')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="font-weight: 600; margin-bottom: 4px;">Sosialisasi Perda Baru</div>
                        <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            Balai Kecamatan Sleman
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div class="avatar-sm">A</div>
                            <div>
                                <div style="font-weight: 600; font-size: 12px;">H. Ahmad Fauzi</div>
                                <div style="font-size: 10px; color: var(--text-muted);">Ketua Fraksi</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-warning">Sosialisasi</span>
                    </td>
                    <td style="white-space: nowrap;">
                        <div>20 Mar 2024</div>
                        <div style="font-size: 10px; color: var(--text-muted);">14:00 WIB</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-info">3</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="badge badge-secondary">Draft</span>
                    </td>
                    <td style="text-align: center;">
                        <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kegiatan')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    .stats-grid-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    .table-wrapper {
        width: 100%;
        overflow-x: auto;
    }

    .avatar-sm {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #1E3A8A, #1E40AF);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        font-size: 12px;
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
        border-color: rgba(30, 58, 138, 0.5);
        box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
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
        .stats-grid-4 {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .stats-grid-4 {
            grid-template-columns: 1fr;
        }
    }
</style>
`;
    }
};
