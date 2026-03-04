// Simple SPA Router
class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;
        this.init();
    }

    init() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem && navItem.dataset.page) {
                e.preventDefault();
                const page = navItem.dataset.page;
                this.navigate(page);
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            }
        });

        // Load initial page
        const hash = window.location.hash.slice(1) || 'overview';
        this.navigate(hash, true);
    }

    register(name, loader) {
        this.routes[name] = loader;
    }

    navigate(page, replace = false) {
        if (this.routes[page]) {
            this.loadPage(page, !replace);
        } else {
            console.error(`Page "${page}" not found`);
        }
    }

    async loadPage(page, pushState = true) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        // Load page content
        const pageModule = this.routes[page];
        let content;
        
        if (typeof pageModule === 'function') {
            content = await pageModule();
        } else if (pageModule && typeof pageModule.render === 'function') {
            content = pageModule.render();
        }
        
        const mainContent = document.querySelector('.main-content > div');
        if (mainContent) {
            mainContent.innerHTML = content;
        }

        // Call afterRender if exists
        if (pageModule && typeof pageModule.afterRender === 'function') {
            // Wait a bit for DOM to be ready
            setTimeout(() => {
                pageModule.afterRender();
            }, 100);
        }

        // Update URL
        if (pushState) {
            window.history.pushState({ page }, '', `#${page}`);
        }

        // Update current page
        this.currentPage = page;

        // Reinitialize charts if needed
        if (typeof initCharts === 'function') {
            initCharts();
        }
    }
}

// Initialize router
const router = new Router();
