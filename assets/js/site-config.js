/**
 * Site Configuration
 * Centralized configuration for the entire site.
 * Edit this file to customize your portfolio.
 */
const siteConfig = {
    // Owner Information
    owner: {
        name: "Reewaj Khanal",
        tagline: "I'm a <span>student</span> from Palpa, driven by passion and purpose",
        email: "rk26071320@student.ku.edu.np",
        phone: "+977 986 9922 510",
        address: "KUBH, Dulikhel - 04, Kavrepalanchowk, Bagmati, Nepal"
    },

    // Social Links (set to null or "" to hide)
    socialLinks: {
        facebook: "https://www.facebook.com/reewajkhanal.rk10",
        github: "https://github.com/reewajkhanalrk10",
        instagram: "https://www.instagram.com/reewajkhanal.rk10",
        linkedin: "https://www.linkedin.com/in/reewajkhanal",
        snapchat: "https://www.snapchat.com/add/reewajrk10",
        soundcloud: "https://soundcloud.com/reewajkhanalrk10",
        telegram: "https://t.me/reewajrk10",
        tiktok: "https://www.tiktok.com/@reewajkhanal.rk10",
        twitter: "https://x.com/reewajrk10",
        website: "https://reewajkhanal.com.np",
        whatsapp: "https://wa.me/+9779869922510",
        youtube: "https://www.youtube.com/@reewajkhanalrk10"
    },

    // EmailJS Configuration (Get from emailjs.com)
    // Replace with your actual credentials after signing up
    emailjs: {
        publicKey: "nFTzL8R9z-Ko5c4Wp",      // Replace!
        serviceId: "ree-mail",      // Replace!
        templateId: "ree-template01"     // Replace!
    },

    // Site Metadata
    meta: {
        title: "RK10",
        logoPath: "assets/img/webpagekologo.svg",
        faviconPath: "assets/img/webpagekologo.svg"
    }
};

// Export for modules (optional, for future use)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
