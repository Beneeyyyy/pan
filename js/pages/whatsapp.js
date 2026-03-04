// WhatsApp Blast Page Content
const WhatsappPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <div class="page-header-avatar" style="background: linear-gradient(135deg, #10B981, #059669);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div>
            <h1>WhatsApp Blast</h1>
            <p>Kirim pesan massal dan notifikasi event secara otomatis</p>
        </div>
    </div>
    <div class="page-header-right">
        <a href="#" class="btn btn-secondary" style="display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
            Analytics
        </a>
        <div class="connection-pill connected">
            <span class="pill-dot"></span>
            <span class="pill-text">Terhubung</span>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid-2">
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="stat-trend up">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                <span>Terkirim</span>
            </div>
        </div>
        <div class="stat-value">1,234</div>
        <div class="stat-label">Pesan Terkirim</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #F59E0B;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="stat-trend">
                <span>Kuota</span>
            </div>
        </div>
        <div class="stat-value">850</div>
        <div class="stat-label">Sisa Kuota Hari Ini</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #EF4444;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(239, 68, 68, 0.1); color: #EF4444;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            </div>
            <div class="stat-trend down">
                <span>Gagal</span>
            </div>
        </div>
        <div class="stat-value">12</div>
        <div class="stat-label">Gagal Terkirim</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #3B82F6;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"/></svg>
            </div>
            <div class="stat-trend">
                <span>Device</span>
            </div>
        </div>
        <div class="stat-value" style="font-size: 16px; word-break: break-all;">+628123456***</div>
        <div class="stat-label">Nomor Terhubung</div>
    </div>
</div>

<!-- Main Grid -->
<div class="wa-grid">
    <!-- Left: Message Composer -->
    <div class="card composer-card">
        <div class="card-header" style="border-bottom: 1px solid var(--border-color);">
            <div class="tab-options">
                <button class="tab-btn active" onclick="switchTab('single')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Pesan Tunggal
                </button>
                <button class="tab-btn" onclick="switchTab('bulk')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Blast Massa
                </button>
                <button class="tab-btn" onclick="switchTab('event')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    Event
                </button>
            </div>
        </div>
        <div class="card-body">
            <!-- Single Message Tab -->
            <div class="tab-content active" id="tab-single">
                <form onsubmit="return false;">
                    <div class="form-group">
                        <label class="form-label">Nomor WhatsApp <span class="required">*</span></label>
                        <input type="text" class="form-input" placeholder="08xxxxxxxxxx">
                        <div class="form-hint">Gunakan format 08xx atau 628xx</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Isi Pesan <span class="required">*</span></label>
                        <div class="msg-composer-grid">
                            <!-- Left: Variable Panel -->
                            <div class="side-var-panel">
                                <h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    Variabel
                                </h4>
                                <div class="side-var-list">
                                    <div class="var-group-label">Penerima</div>
                                    <button type="button" class="var-chip" title="Nama Lengkap">{nama}</button>
                                    <button type="button" class="var-chip" title="Nama Depan">{nama_depan}</button>
                                    <button type="button" class="var-chip" title="Alamat">{alamat}</button>
                                    <button type="button" class="var-chip" title="No HP">{no_hp}</button>
                                    <div class="var-group-label">Waktu</div>
                                    <button type="button" class="var-chip" title="Tanggal Hari Ini">{tanggal}</button>
                                    <button type="button" class="var-chip" title="Waktu Sekarang">{waktu}</button>
                                    <button type="button" class="var-chip" title="Hari">{hari}</button>
                                </div>
                                <div class="condition-hint">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                                    <small>Klik untuk insert</small>
                                </div>
                            </div>
                            <!-- Right: Textarea -->
                            <div class="msg-editor-side">
                                <textarea class="form-input" rows="8" placeholder="Ketik pesan Anda disini. Gunakan {nama} untuk nama penerima..."></textarea>
                                <div class="char-counter"><span>0</span>/4096</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-action right">
                        <button type="submit" class="btn btn-primary" onclick="alert('Kirim Pesan')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>

            <!-- Bulk Message Tab -->
            <div class="tab-content" id="tab-bulk" style="display: none;">
                <div class="alert alert-info mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                    <div>
                        <strong>Broadcast Cerdas</strong>
                        <p>Pesan dikirim dengan jeda waktu acak (3-8 detik) untuk menghindari blokir WhatsApp.</p>
                    </div>
                </div>
                <form onsubmit="return false;">
                    <div class="grid-2">
                        <div class="form-group">
                            <label class="form-label">Target Penerima</label>
                            <select class="form-input">
                                <option>Semua Data Massa</option>
                                <option>Hanya Anggota Aktif</option>
                                <option>Filter Wilayah</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Limit Pengiriman</label>
                            <input type="number" class="form-input" placeholder="1000" value="1000">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Pesan Broadcast <span class="required">*</span></label>
                        <div class="msg-composer-grid">
                            <!-- Left: Variable Panel -->
                            <div class="side-var-panel">
                                <h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    Variabel
                                </h4>
                                <div class="side-var-list">
                                    <div class="var-group-label">Penerima</div>
                                    <button type="button" class="var-chip" title="Nama Lengkap">{nama}</button>
                                    <button type="button" class="var-chip" title="Nama Depan">{nama_depan}</button>
                                    <button type="button" class="var-chip" title="Alamat">{alamat}</button>
                                    <button type="button" class="var-chip" title="Kategori">{kategori}</button>
                                    <div class="var-group-label">Waktu</div>
                                    <button type="button" class="var-chip" title="Tanggal Hari Ini">{tanggal}</button>
                                    <button type="button" class="var-chip" title="Waktu Sekarang">{waktu}</button>
                                    <button type="button" class="var-chip" title="Hari">{hari}</button>
                                </div>
                                <div class="condition-hint">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                                    <small>Klik untuk insert</small>
                                </div>
                            </div>
                            <!-- Right: Textarea -->
                            <div class="msg-editor-side">
                                <textarea class="form-input" rows="8" placeholder="Gunakan {nama} untuk menyebut nama penerima..."></textarea>
                                <div class="char-counter"><span>0</span>/4096</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-action right">
                        <button type="submit" class="btn btn-primary" onclick="alert('Mulai Broadcast')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                            Mulai Broadcast
                        </button>
                    </div>
                </form>
            </div>

            <!-- Event Tab -->
            <div class="tab-content" id="tab-event" style="display: none;">
                <form onsubmit="return false;">
                    <div class="grid-2">
                        <div class="form-group">
                            <label class="form-label">Pilih Event <span class="required">*</span></label>
                            <select class="form-input">
                                <option value="">-- Pilih Event --</option>
                                <option>Rapat Koordinasi Wilayah</option>
                                <option>Sosialisasi Program Kerja 2024</option>
                                <option>Kampanye Dialogis Bantul</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Status Peserta</label>
                            <select class="form-input">
                                <option>Semua Pendaftar</option>
                                <option>Sudah Konfirmasi</option>
                                <option>Belum Konfirmasi</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Pesan Notifikasi <span class="required">*</span></label>
                        <div class="msg-composer-grid">
                            <!-- Left: Variable Panel -->
                            <div class="side-var-panel">
                                <h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                    Variabel
                                </h4>
                                <div class="side-var-list">
                                    <div class="var-group-label">Penerima</div>
                                    <button type="button" class="var-chip" title="Nama Lengkap">{nama}</button>
                                    <button type="button" class="var-chip" title="Nama Depan">{nama_depan}</button>
                                    <div class="var-group-label">Event</div>
                                    <button type="button" class="var-chip" title="Nama Event">{nama_event}</button>
                                    <button type="button" class="var-chip" title="Tanggal Event">{tanggal_event}</button>
                                    <button type="button" class="var-chip" title="Lokasi Event">{lokasi_event}</button>
                                    <button type="button" class="var-chip" title="Nomor Tiket">{no_tiket}</button>
                                </div>
                                <div class="condition-hint">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
                                    <small>Klik untuk insert</small>
                                </div>
                            </div>
                            <!-- Right: Textarea -->
                            <div class="msg-editor-side">
                                <textarea class="form-input" rows="8" placeholder="Informasi seputar event. Gunakan {nama_event} untuk nama event..."></textarea>
                                <div class="char-counter"><span>0</span>/4096</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-action right">
                        <button type="submit" class="btn btn-primary" onclick="alert('Kirim Notifikasi')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                            Kirim Notifikasi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Right: Connection & Info -->
    <div class="side-col">
        <!-- Connection Card -->
        <div class="card connection-card">
            <div class="card-header">
                <h3 class="card-title">
                    <div class="card-title-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </div>
                    Koneksi
                </h3>
            </div>
            <div class="card-body" style="text-align: center; padding: 32px 24px;">
                <div class="qr-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                </div>
                <div style="margin-top: 16px;">
                    <div class="connection-status connected">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Terhubung
                    </div>
                    <p style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">+6281234567890</p>
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <div class="card-title-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    Aktivitas Terbaru
                </h3>
            </div>
            <div class="card-body" style="padding: 12px;">
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">Broadcast ke 150 kontak</div>
                            <div class="activity-time">5 menit lalu</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">Notifikasi event terkirim</div>
                            <div class="activity-time">1 jam lalu</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">3 pesan gagal terkirim</div>
                            <div class="activity-time">2 jam lalu</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .wa-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
        width: 100%;
        max-width: 100%;
    }

    .composer-card {
        min-height: 500px;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
    }

    .side-col {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        max-width: 100%;
    }

    .connection-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid;
    }

    .connection-pill.connected {
        background: rgba(16, 185, 129, 0.1);
        border-color: rgba(16, 185, 129, 0.3);
        color: #10B981;
    }

    .pill-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .stats-grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    .stat-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }

    .stat-trend {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 600;
        color: var(--text-muted);
    }

    .stat-trend.up {
        color: #10B981;
    }

    .stat-trend.down {
        color: #EF4444;
    }

    .tab-options {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .tab-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: transparent;
        border: none;
        border-radius: var(--radius);
        color: var(--text-secondary);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    }

    .tab-btn:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-primary);
    }

    .tab-btn.active {
        background: rgba(16, 185, 129, 0.15);
        color: #10B981;
        font-weight: 600;
    }

    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }

    .alert {
        display: flex;
        gap: 12px;
        padding: 16px;
        border-radius: var(--radius);
        margin-bottom: 20px;
    }

    .alert-info {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        color: #3B82F6;
    }

    .alert svg {
        flex-shrink: 0;
    }

    .alert strong {
        display: block;
        margin-bottom: 4px;
    }

    .alert p {
        font-size: 13px;
        opacity: 0.9;
        margin: 0;
    }

    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .form-hint {
        font-size: 12px;
        color: var(--text-muted);
        margin-top: 4px;
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
        box-sizing: border-box;
    }

    .form-input:focus {
        border-color: rgba(16, 185, 129, 0.5);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
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

    .char-counter {
        text-align: right;
        font-size: 12px;
        color: var(--text-muted);
        margin-top: 4px;
    }

    .form-action {
        margin-top: 20px;
    }

    .form-action.right {
        text-align: right;
    }

    .required {
        color: #EF4444;
    }

    .mb-4 {
        margin-bottom: 16px;
    }

    .msg-composer-grid {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 16px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 16px;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
    }

    .side-var-panel {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .side-var-panel h4 {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border-color);
    }

    .side-var-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 4px;
    }

    .side-var-list::-webkit-scrollbar {
        width: 4px;
    }

    .side-var-list::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
    }

    .side-var-list::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }

    .var-group-label {
        font-size: 10px;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 8px;
        margin-bottom: 4px;
    }

    .var-chip {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 6px;
        color: #10B981;
        font-size: 12px;
        font-weight: 600;
        font-family: monospace;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
    }

    .var-chip:hover {
        background: rgba(16, 185, 129, 0.2);
        border-color: rgba(16, 185, 129, 0.5);
        transform: translateX(2px);
    }

    .condition-hint {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 6px;
        margin-top: 8px;
    }

    .condition-hint svg {
        color: #3B82F6;
        flex-shrink: 0;
    }

    .condition-hint small {
        font-size: 11px;
        color: #3B82F6;
    }

    .msg-editor-side {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
        width: 100%;
    }

    .msg-editor-side .form-input {
        flex: 1;
        resize: vertical;
        width: 100%;
        box-sizing: border-box;
    }

    .qr-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background: rgba(16, 185, 129, 0.05);
        border-radius: var(--radius);
        border: 2px dashed rgba(16, 185, 129, 0.2);
    }

    .connection-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 600;
    }

    .connection-status.connected {
        background: rgba(16, 185, 129, 0.1);
        color: #10B981;
    }

    .activity-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .activity-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.02);
        border-radius: var(--radius);
    }

    .activity-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .activity-icon.success {
        background: rgba(16, 185, 129, 0.1);
        color: #10B981;
    }

    .activity-icon.danger {
        background: rgba(239, 68, 68, 0.1);
        color: #EF4444;
    }

    .activity-content {
        flex: 1;
    }

    .activity-text {
        font-size: 13px;
        font-weight: 500;
        color: var(--text-primary);
    }

    .activity-time {
        font-size: 11px;
        color: var(--text-muted);
        margin-top: 2px;
    }

    @media (max-width: 1200px) {
        .wa-grid {
            grid-template-columns: 1fr;
        }

        .msg-composer-grid {
            grid-template-columns: 1fr;
        }

        .side-var-panel {
            order: 2;
        }

        .msg-editor-side {
            order: 1;
        }
    }

    @media (max-width: 640px) {
        .stats-grid-2 {
            grid-template-columns: 1fr;
        }
        
        .grid-2 {
            grid-template-columns: 1fr;
        }
    }
</style>

<script>
    function switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.getElementById('tab-' + tabName).style.display = 'block';
        event.target.closest('.tab-btn').classList.add('active');
    }
</script>
`;
    }
};
