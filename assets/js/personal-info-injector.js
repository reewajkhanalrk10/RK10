/**
 * Personal Information Injector
 * Populates PII placeholders with data from siteConfig.
 * This ensures personal info is only visible when JavaScript executes (browser),
 * not when the page is fetched via curl/wget/scrapers.
 */
document.addEventListener('DOMContentLoaded', function () {
    if (typeof siteConfig === 'undefined') return;

    const info = siteConfig.personalInfo;
    const owner = siteConfig.owner;

    // ── About Section: populate data-pii placeholders ──

    populatePII('birthday', info.birthday);
    populatePII('phone', owner.phone);
    populatePII('location', info.location);
    populatePII('degree', info.degree);
    populatePII('freelance', info.freelance);
    populatePII('emails', info.emails.join(', '));

    // Website link (special: needs an <a> tag)
    const websiteEl = document.querySelector('[data-pii="website-link"]');
    if (websiteEl) {
        const a = document.createElement('a');
        a.href = info.websiteUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = info.websiteDisplay;
        websiteEl.appendChild(a);
    }

    // Age (dynamic calculation)
    const ageEl = document.getElementById('age');
    if (ageEl && info.birthDateISO) {
        ageEl.innerText = calculateAge(info.birthDateISO);
    }

    // ── Contact Section: populate contact info boxes ──

    populatePII('contact-address', owner.address);
    populatePII('contact-email', owner.email);
    populatePII('contact-phone', owner.phone);

    // ── Mailto Links: inject email href dynamically ──

    document.querySelectorAll('[data-pii="mailto-link"]').forEach(function (el) {
        el.href = 'mailto:' + owner.email;
    });

    document.querySelectorAll('[data-pii="whatsapp-link"]').forEach(function (el) {
        // Strip everything but numbers and '+' for the wa.me protocol
        const cleanPhone = owner.phone.replace(/[^\d+]/g, '');
        el.href = 'https://wa.me/' + cleanPhone;
    });

    // ── JSON-LD: inject structured data dynamically ──

    if (siteConfig.structuredData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(siteConfig.structuredData);
        document.head.appendChild(script);
    }

    // ── Helper Functions ──

    function populatePII(key, value) {
        const el = document.querySelector('[data-pii="' + key + '"]');
        if (el) el.textContent = value;
    }

    function calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return years + ' years, ' + months + ' months, ' + days + ' days';
    }
});
