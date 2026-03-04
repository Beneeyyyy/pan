const UsersPage = {
    render: function() {
        const users = [
            {
                id: 1,
                name: 'Admin Utama',
                email: 'admin@example.com',
                roles: ['Super Admin'],
                is_active: true,
                created_at: '15 Jan 2024',
                is_current: true
            },
            {
                id: 2,
                name: 'Koordinator DPD',
                email: 'koordinator@example.com',
                roles: ['Koordinator', 'Editor'],
                is_active: true,
                created_at: '20 Jan 2024',
                is_current: false
            },
            {
                id: 3,
                name: 'Staff Admin',
                email: 'staff@example.com',
                roles: ['Staff'],
                is_active: true,
                created_at: '25 Jan 2024',
                is_current: false
            },
            {
                id: 4,
                name: 'User Non-Aktif',
                email: 'nonaktif@example.com',
                roles: ['User'],
                is_active: false,
                created_at: '10 Feb 2024',
                is_current: false
            }
        ];

        return `
            <div class="page-header">
                <div class="page-header-left">
                    <div class="page-header-avatar">
                        <i data-lucide="users"></i>
                    </div>
                    <div>
                        <h1>Manajemen User</h1>
                        <p>Kelola pengguna dan hak akses sistem.</p>
                    </div>
                </div>
                <div class="page-header-right">
                    <a href="#" class="btn btn-primary">
                        <i data-lucide="plus-circle"></i>
                        Tambah User
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">
                        <div class="card-title-icon">
                            <i data-lucide="list"></i>
                        </div>
                        Daftar Pengguna
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Dibuat</th>
                                    <th class="text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.map(user => `
                                    <tr>
                                        <td>
                                            <div style="font-weight: 600; color: white;">${user.name}</div>
                                        </td>
                                        <td>
                                            <div style="color: rgba(255,255,255,0.7);">${user.email}</div>
                                        </td>
                                        <td>
                                            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                                                ${user.roles.map(role => `
                                                    <span class="badge badge-info">${role}</span>
                                                `).join('')}
                                            </div>
                                        </td>
                                        <td>
                                            ${user.is_active 
                                                ? '<span class="badge badge-success">Aktif</span>'
                                                : '<span class="badge badge-secondary">Non-Aktif</span>'
                                            }
                                        </td>
                                        <td>
                                            <span style="color: rgba(255,255,255,0.6); font-size: 13px;">
                                                ${user.created_at}
                                            </span>
                                        </td>
                                        <td style="text-align: right;">
                                            <div style="display: flex; justify-content: flex-end; gap: 8px;">
                                                ${!user.is_current ? `
                                                    <button class="btn btn-sm ${user.is_active ? 'btn-secondary' : 'btn-success'}" 
                                                            title="${user.is_active ? 'Non-aktifkan' : 'Aktifkan'}">
                                                        <i data-lucide="${user.is_active ? 'lock' : 'unlock'}"></i>
                                                    </button>
                                                ` : ''}
                                                
                                                <a href="#" class="btn btn-sm btn-secondary" title="Edit">
                                                    <i data-lucide="edit-2"></i>
                                                </a>
                                                
                                                ${!user.is_current ? `
                                                    <button class="btn btn-sm btn-secondary" style="color: #EF4444;" title="Hapus"
                                                            onclick="if(confirm('Apakah Anda yakin ingin menghapus user ini?')) { alert('User dihapus'); }">
                                                        <i data-lucide="trash-2"></i>
                                                    </button>
                                                ` : ''}
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style>
                .table-responsive {
                    overflow-x: auto;
                }
                .p-0 {
                    padding: 0 !important;
                }
                .text-right {
                    text-align: right !important;
                }
            </style>
        `;
    }
};
