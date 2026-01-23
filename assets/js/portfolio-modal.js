/**
 * Portfolio Modal Controller
 * Handles opening/closing modals and displaying project details
 */

class PortfolioModal {
    constructor() {
        this.modal = document.getElementById('portfolio-modal');
        this.backdrop = this.modal?.querySelector('.portfolio-modal-backdrop');
        this.closeBtn = this.modal?.querySelector('.portfolio-modal-close');
        this.backBtn = this.modal?.querySelector('.portfolio-modal-back');

        if (!this.modal) return;

        this.init();
    }

    init() {
        // Close button click
        this.closeBtn?.addEventListener('click', () => this.close());

        // Back button click
        this.backBtn?.addEventListener('click', () => this.close());

        // Backdrop click
        this.backdrop?.addEventListener('click', () => this.close());

        // ESC key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open(projectId) {
        if (typeof portfolioData === 'undefined' || !portfolioData[projectId]) {
            console.error('Project not found:', projectId);
            return;
        }

        const project = portfolioData[projectId];

        // Populate modal content
        document.getElementById('modal-project-image').src = project.image;
        document.getElementById('modal-project-image').alt = project.title;
        document.getElementById('modal-project-category').textContent = project.category;
        document.getElementById('modal-project-title').textContent = project.title;
        document.getElementById('modal-project-description').textContent = project.description;
        document.getElementById('modal-project-date').textContent = project.date;

        // Show modal with animation
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Initialize modal when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioModal = new PortfolioModal();
});
