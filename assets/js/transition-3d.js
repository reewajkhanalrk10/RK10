/**
 * Page Transition with Polpo's Paradise Logo
 * Premium page transition with logo animation
 */
document.addEventListener("DOMContentLoaded", function () {
    // Skip on game pages
    if (document.body.hasAttribute('data-no-shared-navbar')) {
        return;
    }

    const rootPath = window.rootPath || "./";

    // Inject loader HTML with logo
    const loaderHTML = `
      <div id="page-loader-3d">
        <div class="loader-logo-container">
          <img src="${rootPath}assets/img/webpagekologo.svg" alt="Logo" class="loader-logo">
          <div class="loader-brand">Polpo's Paradise</div>
        </div>
        <div class="loader-spinner"></div>
        <div class="loader-text">Loading...</div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", loaderHTML);

    // Loader styles
    const styles = document.createElement('style');
    styles.textContent = `
        #page-loader-3d {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        #page-loader-3d.hidden {
            opacity: 0;
            pointer-events: none;
        }
        .loader-logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: float 2s ease-in-out infinite;
        }
        .loader-logo {
            width: 120px;
            height: 120px;
            object-fit: contain;
            filter: drop-shadow(0 0 20px rgba(24, 210, 110, 0.5));
        }
        .loader-brand {
            font-family: 'Orbitron', 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #18d26e;
            margin-top: 15px;
            text-shadow: 0 0 20px rgba(24, 210, 110, 0.5);
            letter-spacing: 2px;
        }
        .loader-spinner {
            width: 50px;
            height: 50px;
            margin-top: 30px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #18d26e;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        .loader-text {
            color: rgba(255,255,255,0.6);
            font-family: 'Orbitron', 'Poppins', sans-serif;
            font-size: 12px;
            margin-top: 20px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styles);

    const loader = document.getElementById('page-loader-3d');

    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    });

    // Intercept link clicks
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Skip non-navigable links
        if (!href ||
            href.startsWith('#') ||
            href.startsWith('javascript:') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            link.getAttribute('target') === '_blank' ||
            link.hasAttribute('download')) {
            return;
        }

        e.preventDefault();

        // Show loader
        loader.classList.remove('hidden');

        // Navigate after transition
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});
