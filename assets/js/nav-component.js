document.addEventListener("DOMContentLoaded", function () {
    // Skip navbar injection on game pages (they have their own navigation)
    if (document.body.hasAttribute('data-no-shared-navbar')) {
        return;
    }

    const rootPath = window.rootPath || "../";

    // Create the navbar HTML
    const navHTML = `
      <nav id="shared-navbar" class="shared-navbar">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">
                <h1><a href="${rootPath}">RK10</a></h1>
            </div>
            <div class="nav-links">
                <a href="${rootPath}" class="nav-item">Home</a>
                <a href="${rootPath}#portfolio" class="nav-item">Portfolio</a>
                <a href="${rootPath}#contact" class="nav-item">Contact</a>
                <a href="${rootPath}" class="nav-btn" onclick="if(document.referrer && document.referrer.includes(location.host)){event.preventDefault();history.back();}">Go Back</a>
            </div>
             <i class="bi bi-list mobile-nav-toggle-shared"></i>
        </div>
      </nav>
      <!-- Mobile Nav Overlay -->
      <div id="mobile-nav-overlay" class="mobile-nav-overlay">
         <a href="javascript:void(0)" class="closebtn">&times;</a>
         <div class="overlay-content">
            <a href="${rootPath}">Home</a>
            <a href="${rootPath}#portfolio">Portfolio</a>
            <a href="${rootPath}#contact">Contact</a>
         </div>
      </div>
    `;

    // Inject Navbar at the top of the body
    document.body.insertAdjacentHTML("afterbegin", navHTML);

    // Add padding to body to prevent overlap (unless it's the home page which handles its own header)
    if (!document.querySelector('#header')) { // Simple check to avoid conflict if used on homepage
        document.body.style.paddingTop = "80px";
    }

    // Mobile Nav Logic
    const toggle = document.querySelector('.mobile-nav-toggle-shared');
    const overlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.querySelector('.closebtn');

    if (toggle) {
        toggle.addEventListener('click', () => {
            overlay.style.width = "100%";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.style.width = "0%";
        });
    }
});
