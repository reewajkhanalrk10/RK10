/**
 * Portfolio Renderer - Dynamically generates portfolio items from portfolioData
 * Single source of truth: Add a project to portfolio-data.js and it auto-renders
 */
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('portfolio-items');
    if (!container || typeof portfolioData === 'undefined') return;

    // Generate portfolio items
    let html = '';

    Object.keys(portfolioData).forEach(key => {
        const project = portfolioData[key];
        const filterClasses = project.filters ? project.filters.join(' ') : '';
        // Truncate description to ~100 characters for preview
        const shortDesc = project.description.length > 100
            ? project.description.substring(0, 100) + '...'
            : project.description;

        html += `
            <div class="col-lg-4 col-md-6 portfolio-item ${filterClasses}">
                <div class="portfolio-wrap portfolio-card" data-project-id="${project.id}">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-content">
                            <span class="portfolio-category">${project.category}</span>
                            <h4>${project.title}</h4>
                            <p class="portfolio-description">${shortDesc}</p>
                            <span class="view-details">
                                <i class="bx bx-right-arrow-alt"></i> View Details
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // SECURITY NOTE: innerHTML is used here with data from a local static JS file (portfolio-data.js).
    // This is safe because the data is trusted and never comes from user input or external APIs.
    // If this data source ever changes to an API or user input, switch to DOM manipulation
    // or sanitize the HTML to prevent XSS attacks.
    container.innerHTML = html;

    // Add click handlers to open modal
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            if (window.portfolioModal) {
                window.portfolioModal.open(projectId);
            }
        });
    });

    // Initialize Isotope after rendering
    setTimeout(() => {
        const portfolioContainer = document.querySelector('.portfolio-container');
        if (portfolioContainer && typeof Isotope !== 'undefined') {
            const iso = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                percentPosition: true
            });

            // Filter items on button click
            const filters = document.querySelectorAll('#portfolio-flters li');
            filters.forEach(filter => {
                filter.addEventListener('click', function () {
                    filters.forEach(f => f.classList.remove('filter-active'));
                    this.classList.add('filter-active');

                    const filterValue = this.getAttribute('data-filter');
                    iso.arrange({
                        filter: filterValue
                    });
                });
            });

            // Progressive layout - don't wait for all images
            // Relayout after each image loads for smooth progressive display
            const images = portfolioContainer.querySelectorAll('img');
            images.forEach(img => {
                if (!img.complete) {
                    img.addEventListener('load', () => {
                        iso.layout();
                    });
                    img.addEventListener('error', () => {
                        iso.layout();
                    });
                }
            });

            // Initial layout
            iso.layout();
        }
    }, 50);
});
