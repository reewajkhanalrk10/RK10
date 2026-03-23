/**
 * Site Configuration
 * Centralized configuration for the entire site.
 * Edit this file to customize your portfolio.
 * 
 * NOTE: This file is loaded as a JS file, so its contents are NOT visible
 * to curl/wget or any tool that only fetches raw HTML. Personal information
 * stored here is only accessible when JavaScript is executed (i.e., in a browser).
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

    // Personal Information (rendered via JS to prevent curl/scraper exposure)
    personalInfo: {
        birthday: "2059.10.27 BS | 2003.02.10 AD",
        birthDateISO: "2003-02-10",
        location: "Tansen Municipality - 06, Palpa, Nepal",
        degree: "Undergraduate",
        freelance: "Available",
        emails: ["reewajkhanal.rk10@gmail.com", "rk26071320@student.ku.edu.np"],
        websiteUrl: "https://www.reewajkhanal.com.np",
        websiteDisplay: "reewajkhanal.com.np"
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
    },

    // JSON-LD Structured Data (injected dynamically to prevent curl exposure)
    structuredData: {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://www.reewajkhanal.com.np/#website",
                "url": "https://www.reewajkhanal.com.np/",
                "name": "Reewaj Khanal Portfolio",
                "description": "Portfolio of Reewaj Khanal - Licensed Computer Engineer from Nepal",
                "inLanguage": "en-US",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.reewajkhanal.com.np/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Person",
                "@id": "https://www.reewajkhanal.com.np/#person",
                "name": "Reewaj Khanal",
                "alternateName": ["RK10", "Reewaj Khanal RK10"],
                "url": "https://www.reewajkhanal.com.np/",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://www.reewajkhanal.com.np/assets/img/me.jpg",
                    "width": 800,
                    "height": 800
                },
                "description": "Licensed Computer Engineer from Nepal specializing in Full-Stack Development, FinTech, NLP Research, and IoT. Backend Engineer at CityPAY with expertise in Go, Python, React, and PostgreSQL.",
                "jobTitle": ["Backend Engineer", "Full-Stack Developer", "NLP Researcher"],
                "worksFor": {
                    "@type": "Organization",
                    "name": "City Wallet Pvt. Ltd. (CityPAY)",
                    "url": "https://citywalletnp.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Kathmandu",
                        "addressCountry": "NP"
                    }
                },
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Kathmandu University",
                    "url": "https://ku.edu.np",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Dhulikhel",
                        "addressRegion": "Bagmati",
                        "addressCountry": "NP"
                    }
                },
                "knowsAbout": [
                    "Full-Stack Development", "Backend Engineering", "FinTech",
                    "Natural Language Processing", "Machine Learning", "Computer Engineering",
                    "IoT", "Embedded Systems", "Python", "Go", "React", "PostgreSQL",
                    "Digital Payment Systems", "API Development"
                ],
                "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Bachelor of Engineering in Computer Engineering",
                    "credentialCategory": "degree"
                },
                "nationality": { "@type": "Country", "name": "Nepal" },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Palpa",
                    "addressRegion": "Lumbini",
                    "addressCountry": "NP"
                },
                "email": "reewajkhanal.rk10@gmail.com",
                "telephone": "+977-9869922510",
                "sameAs": [
                    "https://github.com/reewajkhanalrk10",
                    "https://www.linkedin.com/in/reewajkhanal",
                    "https://x.com/reewajrk10",
                    "https://www.facebook.com/reewajkhanal.rk10",
                    "https://www.instagram.com/reewajkhanal.rk10",
                    "https://www.youtube.com/@reewajkhanalrk10",
                    "https://soundcloud.com/reewajkhanalrk10",
                    "https://www.tiktok.com/@reewajkhanal.rk10"
                ]
            },
            {
                "@type": "ProfilePage",
                "@id": "https://www.reewajkhanal.com.np/#profilepage",
                "url": "https://www.reewajkhanal.com.np/",
                "name": "Reewaj Khanal - Developer Portfolio",
                "mainEntity": {"@id": "https://www.reewajkhanal.com.np/#person"},
                "dateCreated": "2021-01-01",
                "dateModified": "2026-02-05",
                "inLanguage": "en-US"
            },
            {
                "@type": "ItemList",
                "@id": "https://www.reewajkhanal.com.np/#services",
                "name": "Professional Services",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Full-Stack Development", "description": "Web and software applications with scalable architecture" },
                    { "@type": "ListItem", "position": 2, "name": "FinTech Solutions", "description": "Digital banking, payment systems, and financial technology" },
                    { "@type": "ListItem", "position": 3, "name": "NLP & AI Research", "description": "Natural Language Processing and Machine Learning solutions" },
                    { "@type": "ListItem", "position": 4, "name": "IoT & Embedded Systems", "description": "Smart automation and connected device solutions" },
                    { "@type": "ListItem", "position": 5, "name": "UI/UX Design", "description": "User-centric interface design for web and mobile" }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.reewajkhanal.com.np/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.reewajkhanal.com.np/" }
                ]
            }
        ]
    }
};

// Export for modules (optional, for future use)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
