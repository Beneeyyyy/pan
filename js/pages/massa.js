// Massa Page Content
const MassaPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Data Massa
        </h1>
        <p>Database peserta dan pendukung partai</p>
    </div>
    <div class="page-header-right">
        <a href="#" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
            Tambah Massa
        </a>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid">
    <div class="stat-card" style="border-left: 4px solid #DC2626;">
        <div class="stat-icon-wrapper" style="background: rgba(220, 38, 38, 0.1); color: #DC2626;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div>
            <div class="stat-value">1,234</div>
            <div class="stat-label">Total Massa</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
            <div class="stat-value">987</div>
            <div class="stat-label">Sudah Geocoded</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #3B82F6;">
        <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </div>
        <div>
            <div class="stat-value">45</div>
            <div class="stat-label">Bulan Ini</div>
        </div>
    </div>
</div>

<!-- Filters -->
<div class="card" style="margin-bottom: 24px;">
    <div class="card-body" style="padding: 16px 24px;">
        <form onsubmit="return false;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 16px;">
                <!-- Province -->
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Provinsi</label>
                    <select name="province" class="form-input">
                        <option value="">Semua Provinsi</option>
                        <option value="1">DI Yogyakarta</option>
                        <option value="2">Jawa Tengah</option>
                    </select>
                </div>

                <!-- Regency -->
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Kabupaten/Kota</label>
                    <select name="regency" class="form-input">
                        <option value="">Semua Kab/Kota</option>
                        <option value="1">Kota Yogyakarta</option>
                        <option value="2">Sleman</option>
                        <option value="3">Bantul</option>
                    </select>
                </div>

                <!-- District -->
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Kecamatan</label>
                    <select name="district" class="form-input">
                        <option value="">Semua Kecamatan</option>
                        <option value="1">Gondokusuman</option>
                        <option value="2">Jetis</option>
                    </select>
                </div>

                <!-- Village -->
                <div class="form-group" style="margin: 0;">
                    <label style="font-size: 12px; color: var(--text-muted); display: block; margin-bottom: 4px;">Kelurahan</label>
                    <select name="village" class="form-input">
                        <option value="">Semua Kelurahan</option>
                        <option value="1">Terban</option>
                        <option value="2">Demangan</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-end;">
                <div style="flex: 1; min-width: 250px;">
                    <input type="text" name="search" class="form-input" placeholder="Cari nama, NIK, atau no HP...">
                </div>

                <div style="min-width: 160px;">
                    <select name="kategori_massa" class="form-input">
                        <option value="">Semua Kategori</option>
                        <option value="Pengurus">Pengurus</option>
                        <option value="Simpatisan">Simpatisan</option>
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

                <div style="flex: 1;"></div>

                <a href="#" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Export Excel
                </a>
                
                <a href="#" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    Import Excel
                </a>
            </div>
        </form>
    </div>
</div>

<!-- Massa Table -->
<div class="card">
    <div style="padding: 12px 16px; border-bottom: 1px solid var(--border-color); background: rgba(0, 0, 0, 0.2); display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-secondary);">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/><line x1="3" x2="21" y1="12" y2="12"/></svg>
        <span>Geser tabel ke kanan untuk melihat informasi selengkapnya</span>
    </div>
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>NIK</th>
                    <th>Kategori</th>
                    <th>Sub Kategori</th>
                    <th>No HP</th>
                    <th>Lokasi</th>
                    <th>Event</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar">B</div>
                            <div>
                                <strong>Budi Santoso</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Laki-laki • 35 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404012345678901</span></td>
                    <td><span class="badge badge-primary">Pengurus</span></td>
                    <td><span class="badge badge-info">Ketua RT</span></td>
                    <td>081234567890</td>
                    <td>
                        Kota Yogyakarta
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td><span class="badge badge-info">3</span></td>
                    <td><span class="badge badge-success">Geocoded</span></td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" style="color: #EF4444;" title="Hapus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar">S</div>
                            <div>
                                <strong>Siti Aminah</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Perempuan • 28 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404015678901234</span></td>
                    <td><span class="badge badge-secondary">Simpatisan</span></td>
                    <td><span style="color: var(--text-muted);">-</span></td>
                    <td>082345678901</td>
                    <td>
                        Sleman
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td><span class="badge badge-info">1</span></td>
                    <td><span class="badge badge-success">Geocoded</span></td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" style="color: #EF4444;" title="Hapus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar">A</div>
                            <div>
                                <strong>Ahmad Fauzi</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Laki-laki • 42 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404019012345678</span></td>
                    <td><span class="badge badge-primary">Pengurus</span></td>
                    <td><span class="badge badge-warning">(Data Kosong)</span></td>
                    <td>083456789012</td>
                    <td>
                        Bantul
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td><span class="badge badge-info">5</span></td>
                    <td><span class="badge badge-secondary">-</span></td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm btn-secondary" style="color: #EF4444;" title="Hapus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    .table-wrapper {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .table-wrapper::-webkit-scrollbar {
        height: 8px;
    }

    .table-wrapper::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    .table-wrapper::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }

    .table-wrapper::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .table {
        min-width: 1200px;
    }

    .form-input {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 10px 16px;
        color: var(--text-primary);
        font-size: 14px;
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

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 30px;
        width: 100%;
        max-width: 100%;
    }

    .stat-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 20px;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        transition: transform 0.2s;
        backdrop-filter: blur(12px);
        min-width: 0;
    }

    .stat-card:hover {
        transform: translateY(-2px);
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

    .stat-value {
        font-size: 24px;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 4px;
        color: var(--text-primary);
    }

    .stat-label {
        font-size: 13px;
        color: var(--text-secondary);
        font-weight: 500;
    }

    .avatar {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        font-size: 16px;
        flex-shrink: 0;
    }

    @media (max-width: 1024px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .table {
            min-width: 1000px;
        }
    }

    @media (max-width: 640px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
        
        .table {
            min-width: 900px;
        }
        
        .page-header {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
`;
    }
};
