// Checkin Page Content
const CheckinPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
            Sistem Check-in
        </h1>
        <p>Pilih event untuk memulai check-in peserta</p>
    </div>
</div>

<!-- Active Events Grid -->
<div class="events-grid">
    <!-- Event Card 1 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">15</span>
                <span class="month">Mar</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-success">Ongoing</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <h3 class="event-card-title">Rapat Koordinasi Wilayah</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Gedung Serbaguna Yogyakarta
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
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-success" style="flex: 1;" onclick="alert('Mulai Check-in')">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
                Mulai Check-in
            </a>
        </div>
    </div>

    <!-- Event Card 2 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">20</span>
                <span class="month">Mar</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-info">Published</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <h3 class="event-card-title">Sosialisasi Program Kerja 2024</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Balai Desa Sleman
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
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-success" style="flex: 1;" onclick="alert('Mulai Check-in')">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
                Mulai Check-in
            </a>
        </div>
    </div>

    <!-- Event Card 3 -->
    <div class="event-card animate-fadeIn">
        <div class="event-card-header">
            <div class="event-card-date">
                <span class="day">25</span>
                <span class="month">Mar</span>
            </div>
            <div class="event-card-status">
                <span class="badge badge-info">Published</span>
            </div>
        </div>
        
        <div class="event-card-body">
            <h3 class="event-card-title">Kampanye Dialogis Bantul</h3>
            <div class="event-card-meta">
                <div class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Lapangan Bantul
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
        </div>
        
        <div class="event-card-actions">
            <a href="#" class="btn btn-success" style="flex: 1;" onclick="alert('Mulai Check-in')">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
                Mulai Check-in
            </a>
        </div>
    </div>
</div>

<style>
    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
    }

    .event-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: all 0.3s ease;
        backdrop-filter: blur(12px);
    }

    .event-card:hover {
        transform: translateY(-4px);
        border-color: #10B981;
        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
    }

    .event-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%);
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
        font-size: 24px;
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

    .event-card-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 8px;
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
        flex-shrink: 0;
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
        font-size: 24px;
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1;
    }

    .stat-item .stat-label {
        font-size: 11px;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-top: 4px;
    }

    .event-card-actions {
        padding: 16px 20px;
        display: flex;
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
