// Verifikasi Kader Page Content
const VerifikasiPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
            Verifikasi Kader
        </h1>
        <p>Verifikasi dan aktivasi data kader baru</p>
    </div>
    <div class="page-header-right">
        <button class="btn btn-success" onclick="alert('Fitur Verifikasi Massal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Verifikasi Massal
        </button>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid">
    <div class="stat-card" style="border-left: 4px solid #F59E0B;">
        <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
            <div class="stat-value">23</div>
            <div class="stat-label">Menunggu Verifikasi</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
            <div class="stat-value">156</div>
            <div class="stat-label">Terverifikasi Bulan Ini</div>
        </div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #EF4444;">
        <div class="stat-icon-wrapper" style="background: rgba(239, 68, 68, 0.1); color: #EF4444;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
        </div>
        <div>
            <div class="stat-value">8</div>
            <div class="stat-label">Ditolak Bulan Ini</div>
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
            </div>
        </form>
    </div>
</div>

<!-- Verifikasi Table -->
<div class="card">
    <div style="padding: 12px 16px; border-bottom: 1px solid var(--border-color); background: rgba(0, 0, 0, 0.2); display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-secondary);">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/><line x1="3" x2="21" y1="12" y2="12"/></svg>
        <span>Geser tabel ke kanan untuk melihat informasi selengkapnya</span>
    </div>
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="selectAll" style="cursor: pointer;">
                    </th>
                    <th>Nama</th>
                    <th>NIK</th>
                    <th>Kategori</th>
                    <th>Sub Kategori</th>
                    <th>No HP</th>
                    <th>Lokasi</th>
                    <th>Tanggal Daftar</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" class="row-checkbox" style="cursor: pointer;">
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar" style="background: linear-gradient(135deg, #F59E0B, #D97706);">D</div>
                            <div>
                                <strong>Dewi Sartika</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Perempuan • 29 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404012345678902</span></td>
                    <td><span class="badge badge-primary">Pengurus</span></td>
                    <td><span class="badge badge-info">Ketua RW</span></td>
                    <td>081234567891</td>
                    <td>
                        Kota Yogyakarta
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td>
                        <div style="font-size: 13px;">15 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">2 hari lalu</div>
                    </td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #10B981; color: white;" title="Verifikasi" onclick="alert('Verifikasi Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #EF4444; color: white;" title="Tolak" onclick="alert('Tolak Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" class="row-checkbox" style="cursor: pointer;">
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar" style="background: linear-gradient(135deg, #F59E0B, #D97706);">R</div>
                            <div>
                                <strong>Rudi Hartono</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Laki-laki • 38 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404015678901235</span></td>
                    <td><span class="badge badge-secondary">Simpatisan</span></td>
                    <td><span style="color: var(--text-muted);">-</span></td>
                    <td>082345678902</td>
                    <td>
                        Sleman
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td>
                        <div style="font-size: 13px;">14 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">3 hari lalu</div>
                    </td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #10B981; color: white;" title="Verifikasi" onclick="alert('Verifikasi Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #EF4444; color: white;" title="Tolak" onclick="alert('Tolak Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" class="row-checkbox" style="cursor: pointer;">
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar" style="background: linear-gradient(135deg, #F59E0B, #D97706);">L</div>
                            <div>
                                <strong>Linda Wijaya</strong>
                                <div style="font-size: 12px; color: var(--text-muted);">Perempuan • 31 tahun</div>
                            </div>
                        </div>
                    </td>
                    <td><span style="font-family: monospace; font-size: 13px;">3404019012345679</span></td>
                    <td><span class="badge badge-primary">Pengurus</span></td>
                    <td><span class="badge badge-info">Sekretaris</span></td>
                    <td>083456789013</td>
                    <td>
                        Bantul
                        <br><span style="font-size: 12px; color: var(--text-muted);">DI Yogyakarta</span>
                    </td>
                    <td>
                        <div style="font-size: 13px;">13 Mar 2024</div>
                        <div style="font-size: 11px; color: var(--text-muted);">4 hari lalu</div>
                    </td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn btn-sm btn-secondary" title="Detail" onclick="alert('Detail Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #10B981; color: white;" title="Verifikasi" onclick="alert('Verifikasi Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: #EF4444; color: white;" title="Tolak" onclick="alert('Tolak Kader')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
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
        min-width: 1300px;
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
        border-color: rgba(245, 158, 11, 0.5);
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
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
            min-width: 1100px;
        }
    }

    @media (max-width: 640px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
        
        .table {
            min-width: 1000px;
        }
        
        .page-header {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>

<script>
    // Select All Checkbox
    document.getElementById('selectAll').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach(cb => cb.checked = this.checked);
    });
</script>
`;
    }
};
