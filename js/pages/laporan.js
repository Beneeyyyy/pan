// Laporan Page Content
const LaporanPage = {
    init() {
        setTimeout(() => {
            this.initCharts();
        }, 100);
    },

    initCharts() {
        const monthlyCanvas = document.getElementById('monthlyChart');
        const weeklyCanvas = document.getElementById('weeklyChart');
        
        if (!monthlyCanvas || !weeklyCanvas) return;

        const monthlyCtx = monthlyCanvas.getContext('2d');
        new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Registrasi',
                        data: [120, 190, 300, 250, 200, 300, 400, 350, 450, 380, 420, 500],
                        borderColor: '#f87171',
                        backgroundColor: 'rgba(248, 113, 113, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#f87171',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                    },
                    {
                        label: 'Check-in',
                        data: [110, 180, 280, 230, 190, 280, 370, 330, 420, 360, 390, 470],
                        borderColor: '#34d399',
                        backgroundColor: 'rgba(52, 211, 153, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#34d399',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            usePointStyle: true, 
                            padding: 20,
                            color: '#ffffff',
                            font: { size: 12, weight: '500' }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#1f2937',
                        bodyColor: '#1f2937',
                        titleFont: { size: 14, weight: 'bold' },
                        displayColors: true,
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: { 
                        grid: { display: false },
                        ticks: { color: '#ffffff', font: { size: 11 } }
                    },
                    y: { 
                        grid: { color: 'rgba(255, 255, 255, 0.15)' }, 
                        beginAtZero: true,
                        ticks: { color: '#ffffff', font: { size: 11 } },
                        border: { display: false }
                    }
                }
            }
        });

        const weeklyCtx = weeklyCanvas.getContext('2d');
        new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
                datasets: [{
                    label: 'Check-in',
                    data: [45, 52, 38, 65, 48, 72, 58],
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 8,
                    barThickness: 40,
                    hoverBackgroundColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#1f2937',
                        bodyColor: '#1f2937',
                        titleFont: { size: 14, weight: 'bold' }
                    }
                },
                scales: {
                    x: { 
                        grid: { display: false },
                        ticks: { color: '#ffffff', font: { size: 11 } }
                    },
                    y: { 
                        grid: { color: 'rgba(255, 255, 255, 0.15)' }, 
                        beginAtZero: true,
                        ticks: { color: '#ffffff', font: { size: 11 } },
                        border: { display: false }
                    }
                }
            }
        });
    },

    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <div class="page-header-avatar" style="background: linear-gradient(135deg, #8B5CF6, #6D28D9);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <div>
            <h1>Statistik & Laporan</h1>
            <p>Analisis data event dan massa secara komprehensif</p>
        </div>
    </div>
    <div class="page-header-right">
        <select class="form-input" style="width: auto;">
            <option value="">Semua Event</option>
            <option>Rapat Koordinasi Wilayah</option>
            <option>Sosialisasi Program Kerja 2024</option>
        </select>
        <button class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Export CSV
        </button>
    </div>
</div>

<!-- Summary Stats -->
<div class="stats-grid-3">
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
        </div>
        <div class="stat-value">24</div>
        <div class="stat-label">Total Event</div>
    </div>
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
        </div>
        <div class="stat-value">8,542</div>
        <div class="stat-label">Total Massa</div>
    </div>
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            </div>
        </div>
        <div class="stat-value">5,234</div>
        <div class="stat-label">Registrasi</div>
    </div>
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
        </div>
        <div class="stat-value">4,892</div>
        <div class="stat-label">Check-in</div>
    </div>
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(139, 92, 246, 0.1); color: #8B5CF6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
        </div>
        <div class="stat-value">93%</div>
        <div class="stat-label">Rata-rata Kehadiran</div>
    </div>
    <div class="stat-card">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(219, 39, 119, 0.1); color: #DB2777;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
            </div>
        </div>
        <div class="stat-value">61%</div>
        <div class="stat-label">Konversi Massa</div>
    </div>
</div>

<!-- Charts Row -->
<div class="grid-2" style="margin-bottom: 24px;">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><polyline points="7 17 12 12 16 16 21 11"/></svg>
                </div>
                Tren Bulanan 2024
            </h3>
        </div>
        <div class="card-body">
            <div class="chart-container">
                <canvas id="monthlyChart"></canvas>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                </div>
                Check-in Minggu Ini
            </h3>
        </div>
        <div class="card-body">
            <div class="chart-container">
                <canvas id="weeklyChart"></canvas>
            </div>
        </div>
    </div>
</div>

<div class="grid-3-1">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                Performa Event
            </h3>
        </div>
        <div class="card-body" style="padding: 0;">
            <div style="overflow-x: auto; width: 100%;">
                <table class="table" style="min-width: 800px;">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Status</th>
                            <th>Registrasi</th>
                            <th>Konfirmasi</th>
                            <th>Kehadiran</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div style="font-weight: 600;">Rapat Koordinasi Wilayah</div>
                                <div style="font-size: 12px; color: var(--text-muted);">15 Mar 2024</div>
                            </td>
                            <td><span class="badge badge-success">Selesai</span></td>
                            <td><span class="badge badge-secondary">245</span></td>
                            <td><span class="badge badge-secondary">230</span></td>
                            <td><span class="badge badge-primary">218</span></td>
                            <td>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="progress" style="width: 60px;">
                                        <div class="progress-bar success" style="width: 95%"></div>
                                    </div>
                                    <span style="font-weight: 600; font-size: 12px;">95%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="font-weight: 600;">Sosialisasi Program Kerja 2024</div>
                                <div style="font-size: 12px; color: var(--text-muted);">18 Mar 2024</div>
                            </td>
                            <td><span class="badge badge-primary">Berjalan</span></td>
                            <td><span class="badge badge-secondary">180</span></td>
                            <td><span class="badge badge-secondary">165</span></td>
                            <td><span class="badge badge-primary">142</span></td>
                            <td>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="progress" style="width: 60px;">
                                        <div class="progress-bar success" style="width: 86%"></div>
                                    </div>
                                    <span style="font-weight: 600; font-size: 12px;">86%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="font-weight: 600;">Kampanye Dialogis Bantul</div>
                                <div style="font-size: 12px; color: var(--text-muted);">20 Mar 2024</div>
                            </td>
                            <td><span class="badge badge-info">Akan Datang</span></td>
                            <td><span class="badge badge-secondary">320</span></td>
                            <td><span class="badge badge-secondary">298</span></td>
                            <td><span class="badge badge-primary">0</span></td>
                            <td>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="progress" style="width: 60px;">
                                        <div class="progress-bar primary" style="width: 0%"></div>
                                    </div>
                                    <span style="font-weight: 600; font-size: 12px;">0%</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
                </div>
                Sebaran Wilayah
            </h3>
            <div class="tabs" style="display: flex; gap: 8px;">
                <button onclick="switchTab('district')" id="tab-district" class="btn btn-sm btn-primary" style="padding: 4px 10px; font-size: 11px;">Kecamatan</button>
                <button onclick="switchTab('village')" id="tab-village" class="btn btn-sm btn-secondary" style="padding: 4px 10px; font-size: 11px;">Kelurahan</button>
            </div>
        </div>
        
        <div class="card-body" style="padding: 12px 20px;">
            <div id="content-district">
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Sleman</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--primary);">1,245</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar primary" style="width: 100%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Bantul</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--primary);">982</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar primary" style="width: 79%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Yogyakarta</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--primary);">756</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar primary" style="width: 61%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Kulon Progo</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--primary);">543</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar primary" style="width: 44%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Gunung Kidul</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--primary);">421</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar primary" style="width: 34%;"></div>
                    </div>
                </div>
            </div>

            <div id="content-village" style="display: none;">
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Condongcatur</span>
                        <span style="font-size: 12px; font-weight: 700; color: #F59E0B;">342</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar warning" style="width: 100%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Caturtunggal</span>
                        <span style="font-size: 12px; font-weight: 700; color: #F59E0B;">298</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar warning" style="width: 87%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Sinduadi</span>
                        <span style="font-size: 12px; font-weight: 700; color: #F59E0B;">256</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar warning" style="width: 75%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Maguwoharjo</span>
                        <span style="font-size: 12px; font-weight: 700; color: #F59E0B;">189</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar warning" style="width: 55%;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">Sariharjo</span>
                        <span style="font-size: 12px; font-weight: 700; color: #F59E0B;">160</span>
                    </div>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar warning" style="width: 47%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .stats-grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .grid-3-1 {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
    }

    .chart-container {
        position: relative;
        height: 300px;
        width: 100%;
    }

    .progress {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        height: 8px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        border-radius: 50px;
        transition: width 0.3s ease;
    }

    .progress-bar.primary {
        background: linear-gradient(90deg, #3B82F6, #2563EB);
    }

    .progress-bar.success {
        background: linear-gradient(90deg, #10B981, #059669);
    }

    .progress-bar.warning {
        background: linear-gradient(90deg, #F59E0B, #D97706);
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
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        background: rgba(0, 0, 0, 0.3);
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

        .grid-2 {
            grid-template-columns: 1fr;
        }

        .grid-3-1 {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .stats-grid-3 {
            grid-template-columns: 1fr;
        }
    }
</style>

<script>
    function switchTab(type) {
        if (type === 'district') {
            document.getElementById('content-district').style.display = 'block';
            document.getElementById('content-village').style.display = 'none';
            document.getElementById('tab-district').className = 'btn btn-sm btn-primary';
            document.getElementById('tab-village').className = 'btn btn-sm btn-secondary';
        } else {
            document.getElementById('content-district').style.display = 'none';
            document.getElementById('content-village').style.display = 'block';
            document.getElementById('tab-district').className = 'btn btn-sm btn-secondary';
            document.getElementById('tab-village').className = 'btn btn-sm btn-primary';
        }
    }
</script>
`;
    }
};
