/**
 * Page Transition Loader - DISABLED
 * This functionality has been moved to transition-3d.js with the new sci-fi design
 */
document.addEventListener("DOMContentLoaded", function () {
    // DISABLED: Using transition-3d.js instead
    return;

    // 1. Inject Loader HTML
    const loaderHTML = `
      <div id="page-loader">
        <div class="loader-content">
             <img src="${rootPath}assets/img/webpagekologo.svg" alt="App Logo" class="loader-logo">
             <div class="loader-spinner"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", loaderHTML);

    const loader = document.getElementById('page-loader');

    // 2. Fade Out on Load - Faster with optimized images
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 300);

    // 3. Intercept Links for "Fade In" Transition
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');

            // Ignore hash links, external links (if target=_blank), or javascript calls
            if (!href || href.startsWith('#') || href.startsWith('javascript:') || target === '_blank') return;

            e.preventDefault();

            // Show Loader
            loader.classList.remove('hidden');

            // Wait for animation then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 600); // Wait for fade in
        });
    });
});
