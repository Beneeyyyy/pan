// Pengurus Page Content
const PengurusPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <div class="page-header-avatar" style="background: linear-gradient(135deg, #DC2626, #B91C1C);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div>
            <h1>Data Pengurus</h1>
            <p>Kelola data pimpinan DPD dan DPC Kabupaten/Kota</p>
        </div>
    </div>
</div>

<!-- Region Tabs -->
<div class="card" style="margin-bottom: 24px;">
    <div style="padding: 14px 20px; display: flex; gap: 10px; flex-wrap: wrap; overflow-x: auto;">
        <button class="tab-pill active" onclick="switchRegion('dpd')" data-region="dpd">DPD DIY</button>
        <button class="tab-pill" onclick="switchRegion('kota')" data-region="kota">Kota Yogyakarta</button>
        <button class="tab-pill" onclick="switchRegion('sleman')" data-region="sleman">Kab. Sleman</button>
        <button class="tab-pill" onclick="switchRegion('bantul')" data-region="bantul">Kab. Bantul</button>
        <button class="tab-pill" onclick="switchRegion('kulonprogo')" data-region="kulonprogo">Kab. Kulon Progo</button>
        <button class="tab-pill" onclick="switchRegion('gunungkidul')" data-region="gunungkidul">Kab. Gunungkidul</button>
    </div>
</div>

<!-- Info Card -->
<div class="card" style="margin-bottom: 24px;">
    <div style="padding: 20px 24px; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
        <div>
            <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;" id="location-name">DPD DIY</h2>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-secondary);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span id="location-address">Jl. Tegal Gendu No. 278, Prenggan, Kotagede, Kota Yogyakarta</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-secondary);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span id="location-contact">(0274) 378139x</span>
                </div>
            </div>
        </div>
        <button class="btn btn-primary" onclick="alert('Tambah Pengurus')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            Tambah Pengurus
        </button>
    </div>
</div>

<!-- Table Card -->
<div class="card">
    <div class="card-body" style="padding: 0; overflow-x: auto;">
        <table class="table">
            <thead>
                <tr>
                    <th style="width: 60px; text-align: center;">No</th>
                    <th style="width: 70px;" id="foto-column">Foto</th>
                    <th>Jabatan</th>
                    <th style="color: #EF4444;">Nama Lengkap</th>
                    <th style="width: 120px;">Gender</th>
                    <th style="width: 180px; text-align: right;">Aksi</th>
                </tr>
            </thead>
            <tbody id="pengurus-tbody">
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">1</td>
                    <td>
                        <div style="width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                            <img src="https://via.placeholder.com/44" alt="Foto" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </td>
                    <td><span style="font-weight: 600;">Ketua DPD</span></td>
                    <td><strong>H. Ahmad Fauzi, S.H., M.H.</strong></td>
                    <td><span class="badge badge-info">Laki-laki</span></td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-secondary btn-sm" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(16, 185, 129, 0.15); color: #10B981; border: 1px solid rgba(16, 185, 129, 0.2); cursor: pointer;" title="Detail Profil" onclick="alert('Detail Profil')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239, 68, 68, 0.15); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">2</td>
                    <td>
                        <div style="width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                    </td>
                    <td><span style="font-weight: 600;">Sekretaris DPD</span></td>
                    <td><strong>Dra. Siti Nurhaliza, M.Si.</strong></td>
                    <td><span class="badge badge-primary">Perempuan</span></td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-secondary btn-sm" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(16, 185, 129, 0.15); color: #10B981; border: 1px solid rgba(16, 185, 129, 0.2); cursor: pointer;" title="Detail Profil" onclick="alert('Detail Profil')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239, 68, 68, 0.15); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; font-weight: 600; color: var(--text-muted);">3</td>
                    <td>
                        <div style="width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                            <img src="https://via.placeholder.com/44" alt="Foto" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </td>
                    <td><span style="font-weight: 600;">Bendahara DPD</span></td>
                    <td><strong>Ir. Budi Santoso, M.M.</strong></td>
                    <td><span class="badge badge-info">Laki-laki</span></td>
                    <td style="text-align: right;">
                        <div style="display: flex; gap: 6px; justify-content: flex-end;">
                            <button class="btn btn-secondary btn-sm" title="Edit" onclick="alert('Edit')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(16, 185, 129, 0.15); color: #10B981; border: 1px solid rgba(16, 185, 129, 0.2); cursor: pointer;" title="Detail Profil" onclick="alert('Detail Profil')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
                            </button>
                            <button class="btn btn-sm" style="background: rgba(239, 68, 68, 0.15); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); cursor: pointer;" title="Hapus" onclick="if(confirm('Yakin ingin menghapus?')) alert('Hapus')">
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
    .tab-pill {
        padding: 10px 22px;
        border-radius: 9999px;
        font-size: 13px;
        font-weight: 600;
        border: 1.5px solid;
        cursor: pointer;
        transition: all 0.25s ease;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        letter-spacing: 0.01em;
        background: rgba(255,255,255,0.08);
        color: var(--text-secondary);
        border-color: rgba(255,255,255,0.12);
    }

    .tab-pill:hover {
        background: rgba(255,255,255,0.15);
        color: var(--text-primary);
    }

    .tab-pill.active {
        background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
        color: white;
        border-color: transparent;
        box-shadow: 0 4px 16px rgba(220,38,38,0.45);
        transform: translateY(-1px);
    }
</style>

<script>
    const regions = {
        dpd: {
            name: 'DPD DIY',
            address: 'Jl. Tegal Gendu No. 278, Prenggan, Kotagede, Kota Yogyakarta',
            contact: '(0274) 378139x'
        },
        kota: {
            name: 'Kota Yogyakarta',
            address: 'Jl. Kusumanegara, Yogyakarta',
            contact: '(0274) 374xxx'
        },
        sleman: {
            name: 'Kab. Sleman',
            address: 'Jl. Magelang Km. 10, Sleman, Yogyakarta',
            contact: '(0274) 868xxx'
        },
        bantul: {
            name: 'Kab. Bantul',
            address: 'Jl. Bantul Km. 8, Bantul, Yogyakarta',
            contact: '(0274) 367xxx'
        },
        kulonprogo: {
            name: 'Kab. Kulon Progo',
            address: 'Wates, Kulon Progo',
            contact: '(0274) 773xxx'
        },
        gunungkidul: {
            name: 'Kab. Gunungkidul',
            address: 'Wonosari, Gunungkidul',
            contact: '(0274) 391xxx'
        }
    };

    function switchRegion(regionId) {
        document.querySelectorAll('.tab-pill').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector('[data-region="' + regionId + '"]');
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        const region = regions[regionId];
        if (region) {
            document.getElementById('location-name').textContent = region.name;
            document.getElementById('location-address').textContent = region.address;
            document.getElementById('location-contact').textContent = region.contact;
        }

        const fotoColumn = document.getElementById('foto-column');
        if (regionId === 'dpd') {
            fotoColumn.style.display = '';
        } else {
            fotoColumn.style.display = 'none';
        }
    }
</script>
`;
    }
};
