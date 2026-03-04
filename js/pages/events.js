// Events Page Content
const EventsPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Daftar Event
        </h1>
        <p>Kelola semua event partai PAN</p>
    </div>
    <div class="page-header-right">
        <a href="#" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Buat Event Baru
        </a>
    </div>
</div>

<!-- Filters -->
<div class="card" style="margin-bottom: 24px;">
    <div class="card-body" style="padding: 16px 24px;">
        <form class="filter-form" onsubmit="return false;">
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                <div style="flex: 1; min-width: 250px;">
                    <input type="text" name="search" class="form-input" placeholder="Cari event..." style="width: 100%;">
                </div>
                
                <div style="min-width: 160px;">
                    <select name="status" class="form-input" style="width: 100%;">
                        <option value="">Semua Status</option>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                
                <div style="min-width: 160px;">
                    <select name="category" class="form-input" style="width: 100%;">
                        <option value="">Semua Kategori</option>
                        <option value="1">Rapat</option>
                        <option value="2">Sosialisasi</option>
                        <option value="3">Kampanye</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-secondary" style="white-space: nowrap;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    Filter
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Events Grid -->
<div class="events-grid">
    <!-- Event Card 1 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">15</span>
                <span class="month">Mar 2024</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-warning">Ongoing</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <div class="event-card-category">
                <span style="color: #3B82F6;">RAPAT</span>
            </div>
            <h3 class="event-card-title">Rapat Koordinasi Wilayah</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Gedung Serbaguna Yogyakarta
                </div>
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    09:00 WIB
                </div>
            </div>
        </div>
        
        <div class="event-card-stats">
            <div class="stat-item">
                <span class="stat-value">45</span>
                <span class="stat-label">Terdaftar</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">32</span>
                <span class="stat-label">Hadir</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">50</span>
                <span class="stat-label">Kuota</span>
            </div>
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Detail
            </a>
            <a href="#" class="btn btn-secondary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Peserta
            </a>
        </div>
    </div>

    <!-- Event Card 2 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">20</span>
                <span class="month">Mar 2024</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-success">Published</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <div class="event-card-category">
                <span style="color: #10B981;">SOSIALISASI</span>
            </div>
            <h3 class="event-card-title">Sosialisasi Program Kerja 2024</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Balai Desa Sleman
                </div>
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    14:00 WIB
                </div>
            </div>
        </div>
        
        <div class="event-card-stats">
            <div class="stat-item">
                <span class="stat-value">78</span>
                <span class="stat-label">Terdaftar</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">0</span>
                <span class="stat-label">Hadir</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">100</span>
                <span class="stat-label">Kuota</span>
            </div>
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Detail
            </a>
            <a href="#" class="btn btn-secondary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Peserta
            </a>
        </div>
    </div>

    <!-- Event Card 3 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">25</span>
                <span class="month">Mar 2024</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-success">Published</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <div class="event-card-category">
                <span style="color: #F59E0B;">KAMPANYE</span>
            </div>
            <h3 class="event-card-title">Kampanye Dialogis Bantul</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Lapangan Bantul
                </div>
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    16:00 WIB
                </div>
            </div>
        </div>
        
        <div class="event-card-stats">
            <div class="stat-item">
                <span class="stat-value">156</span>
                <span class="stat-label">Terdaftar</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">0</span>
                <span class="stat-label">Hadir</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">∞</span>
                <span class="stat-label">Kuota</span>
            </div>
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Detail
            </a>
            <a href="#" class="btn btn-secondary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Peserta
            </a>
        </div>
    </div>

    <!-- Event Card 4 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">10</span>
                <span class="month">Mar 2024</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-secondary">Completed</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <div class="event-card-category">
                <span style="color: #3B82F6;">RAPAT</span>
            </div>
            <h3 class="event-card-title">Rapat Pleno DPW</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Kantor DPW PAN DIY
                </div>
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    10:00 WIB
                </div>
            </div>
        </div>
        
        <div class="event-card-stats">
            <div class="stat-item">
                <span class="stat-value">35</span>
                <span class="stat-label">Terdaftar</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">33</span>
                <span class="stat-label">Hadir</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">40</span>
                <span class="stat-label">Kuota</span>
            </div>
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Detail
            </a>
            <a href="#" class="btn btn-secondary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Peserta
            </a>
        </div>
    </div>
</div>

<style>
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

    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 24px;
    }

    .event-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        transition: all 0.3s ease;
        backdrop-filter: blur(12px);
    }

    .event-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: rgba(220, 38, 38, 0.5);
    }

    .event-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 100%);
    }

    .event-card-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        border-radius: var(--radius);
    }

    .event-card-date .day {
        font-size: 28px;
        font-weight: 800;
        color: var(--text-primary);
        line-height: 1;
    }

    .event-card-date .month {
        font-size: 12px;
        color: var(--text-secondary);
        text-transform: uppercase;
    }

    .event-card-body {
        padding: 0 20px 16px;
    }

    .event-card-category {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .event-card-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 12px;
        line-height: 1.3;
        color: var(--text-primary);
    }

    .event-card-meta {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--text-secondary);
    }

    .meta-item svg {
        color: var(--text-muted);
    }

    .event-card-stats {
        display: flex;
        justify-content: space-around;
        padding: 16px 20px;
        background: rgba(0, 0, 0, 0.2);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .stat-item {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .stat-item .stat-value {
        font-size: 20px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .stat-item .stat-label {
        font-size: 11px;
        color: var(--text-muted);
        text-transform: uppercase;
    }

    .event-card-actions {
        display: flex;
        gap: 8px;
        padding: 16px 20px;
    }

    .event-card-actions .btn {
        flex: 1;
    }

    .badge-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-secondary);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fadeIn {
        animation: fadeIn 0.5s ease forwards;
    }

    @media (max-width: 768px) {
        .events-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
`;
    }
};
