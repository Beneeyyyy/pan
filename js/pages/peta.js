// Peta Page Content
const PetaPage = {
    render() {
        return `
<!-- Header -->
<div class="page-header">
    <div class="page-header-left">
        <div class="page-header-avatar" style="background: linear-gradient(135deg, #10B981, #059669);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
            <h1>Peta Sebaran Massa</h1>
            <p>Visualisasi geografis distribusi massa berdasarkan lokaasi</p>
        </div>
    </div>
    <div class="page-header-right">
        <button class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Cari Lokasi
        </button>
        <button class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Export Data
        </button>
    </div>
</div>

<!-- Stats -->
<div class="stats-grid-4">
    <div class="stat-card" style="border-left: 4px solid #10B981;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
        </div>
        <div class="stat-value">8,542</div>
        <div class="stat-label">Total Massa</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #3B82F6;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
        </div>
        <div class="stat-value">245</div>
        <div class="stat-label">Lokasi Terdata</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #F59E0B;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
        </div>
        <div class="stat-value">5</div>
        <div class="stat-label">Kabupaten/Kota</div>
    </div>
    <div class="stat-card" style="border-left: 4px solid #EF4444;">
        <div class="stat-card-header">
            <div class="stat-icon-wrapper" style="background: rgba(239, 68, 68, 0.1); color: #EF4444;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            </div>
        </div>
        <div class="stat-value">12</div>
        <div class="stat-label">Belum Terverifikasi</div>
    </div>
</div>

<!-- Map Container -->
<div class="card" style="margin-bottom: 24px;">
    <div class="card-body" style="padding: 0;">
        <div id="map" style="height: 600px; border-radius: 12px; overflow: hidden;"></div>
    </div>
</div>

<!-- Legend & Top Locations -->
<div class="grid-2">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                Legenda Peta
            </h3>
        </div>
        <div class="card-body">
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #10B981;"></div>
                    <div>
                        <div style="font-weight: 600; font-size: 13px;">Kepadatan Tinggi</div>
                        <div style="font-size: 11px; color: var(--text-muted);">> 100 massa per lokasi</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #F59E0B;"></div>
                    <div>
                        <div style="font-weight: 600; font-size: 13px;">Kepadatan Sedang</div>
                        <div style="font-size: 11px; color: var(--text-muted);">50 - 100 massa per lokasi</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #3B82F6;"></div>
                    <div>
                        <div style="font-weight: 600; font-size: 13px;">Kepadatan Rendah</div>
                        <div style="font-size: 11px; color: var(--text-muted);">< 50 massa per lokasi</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #EF4444;"></div>
                    <div>
                        <div style="font-weight: 600; font-size: 13px;">Belum Terverifikasi</div>
                        <div style="font-size: 11px; color: var(--text-muted);">Data belum divalidasi</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">
                <div class="card-title-icon" style="background: rgba(59, 130, 246, 0.1); color: #3B82F6;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                Top 5 Lokasi
            </h3>
        </div>
        <div class="card-body">
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #F59E0B, #D97706); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 14px;">1</div>
                        <div>
                            <div style="font-weight: 600; font-size: 13px;">Condongcatur, Sleman</div>
                            <div style="font-size: 11px; color: var(--text-muted);">Kab. Sleman</div>
                        </div>
                    </div>
                    <div style="font-weight: 700; font-size: 16px; color: #10B981;">342</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #94A3B8, #64748B); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 14px;">2</div>
                        <div>
                            <div style="font-weight: 600; font-size: 13px;">Caturtunggal, Sleman</div>
                            <div style="font-size: 11px; color: var(--text-muted);">Kab. Sleman</div>
                        </div>
                    </div>
                    <div style="font-weight: 700; font-size: 16px; color: #10B981;">298</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #CD7F32, #A0522D); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 14px;">3</div>
                        <div>
                            <div style="font-weight: 600; font-size: 13px;">Sinduadi, Sleman</div>
                            <div style="font-size: 11px; color: var(--text-muted);">Kab. Sleman</div>
                        </div>
                    </div>
                    <div style="font-weight: 700; font-size: 16px; color: #10B981;">256</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--text-muted); font-size: 14px;">4</div>
                        <div>
                            <div style="font-weight: 600; font-size: 13px;">Maguwoharjo, Sleman</div>
                            <div style="font-size: 11px; color: var(--text-muted);">Kab. Sleman</div>
                        </div>
                    </div>
                    <div style="font-weight: 700; font-size: 16px; color: #10B981;">189</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--text-muted); font-size: 14px;">5</div>
                        <div>
                            <div style="font-weight: 600; font-size: 13px;">Sariharjo, Sleman</div>
                            <div style="font-size: 11px; color: var(--text-muted);">Kab. Sleman</div>
                        </div>
                    </div>
                    <div style="font-weight: 700; font-size: 16px; color: #10B981;">160</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .stats-grid-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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

    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    @media (max-width: 1200px) {
        .stats-grid-4 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-2 {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .stats-grid-4 {
            grid-template-columns: 1fr;
        }
    }
</style>
`;
    },

    afterRender() {
        console.log('PetaPage afterRender called');

        // Check if Leaflet is loaded
        if (typeof L === 'undefined') {
            console.error('Leaflet is not loaded!');
            return;
        }

        // Check if map container exists
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.error('Map container not found!');
            return;
        }

        console.log('Initializing Leaflet map...');

        // Initialize Leaflet Map
        const map = L.map('map').setView([-7.7956, 110.3695], 11); // Center: Yogyakarta

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);

        console.log('Map initialized successfully');

        // Sample data points (koordinat DIY)
        const heatmapData = [
            // Sleman
            [-7.7548, 110.3772, 342], // Condongcatur
            [-7.7688, 110.3772, 298], // Caturtunggal
            [-7.7456, 110.3772, 256], // Sinduadi
            [-7.7548, 110.4272, 189], // Maguwoharjo
            [-7.7688, 110.4272, 160], // Sariharjo
            [-7.7456, 110.4272, 145], // Sendangadi
            [-7.7548, 110.3272, 132], // Tridadi
            [-7.7688, 110.3272, 118], // Mlati

            // Kota Yogyakarta
            [-7.7956, 110.3695, 225], // Gondokusuman
            [-7.8156, 110.3695, 198], // Jetis
            [-7.7756, 110.3695, 176], // Terban
            [-7.7956, 110.3895, 154], // Kotabaru
            [-7.8156, 110.3895, 142], // Bumijo

            // Bantul
            [-7.8956, 110.3295, 167], // Sewon
            [-7.9156, 110.3295, 143], // Bantul
            [-7.8756, 110.3295, 128], // Kasihan
            [-7.8956, 110.3495, 115], // Banguntapan

            // Kulon Progo
            [-7.8256, 110.1595, 98], // Wates
            [-7.8456, 110.1595, 87], // Pengasih
            [-7.8056, 110.1595, 76], // Sentolo

            // Gunung Kidul
            [-7.9156, 110.5895, 92], // Wonosari
            [-7.9356, 110.5895, 78], // Playen
            [-7.8956, 110.5895, 65]  // Semanu
        ];

        // Add markers with clustering
        const markers = L.markerClusterGroup({
            maxClusterRadius: 50,
            iconCreateFunction: function (cluster) {
                const count = cluster.getChildCount();
                let size = 'small';
                let color = '#3B82F6';

                if (count > 200) {
                    size = 'large';
                    color = '#10B981';
                } else if (count > 100) {
                    size = 'medium';
                    color = '#F59E0B';
                }

                return L.divIcon({
                    html: `<div style="background: ${color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">${count}</div>`,
                    className: 'custom-cluster-icon',
                    iconSize: L.point(40, 40)
                });
            }
        });

        // Add individual markers
        heatmapData.forEach(([lat, lng, count]) => {
            let color = '#3B82F6';
            let label = 'Rendah';

            if (count > 100) {
                color = '#10B981';
                label = 'Tinggi';
            } else if (count > 50) {
                color = '#F59E0B';
                label = 'Sedang';
            }

            const marker = L.circleMarker([lat, lng], {
                radius: Math.sqrt(count) / 2,
                fillColor: color,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7
            });

            marker.bindPopup(`
                <div style="padding: 8px;">
                    <strong style="font-size: 14px;">${count} Massa</strong><br>
                    <span style="font-size: 12px; color: #666;">Kepadatan: ${label}</span><br>
                    <span style="font-size: 11px; color: #999;">Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}</span>
                </div>
            `);

            markers.addLayer(marker);
        });

        map.addLayer(markers);

        // Add heatmap layer (using simple circles as heatmap effect)
        heatmapData.forEach(([lat, lng, count]) => {
            const intensity = count / 350; // Normalize
            L.circle([lat, lng], {
                radius: count * 3,
                fillColor: '#DC2626',
                color: 'transparent',
                fillOpacity: intensity * 0.3
            }).addTo(map);
        });
    }
};
