# Reewaj Khanal - Personal Portfolio

A modern, responsive portfolio website showcasing professional experience, technical projects, and research contributions in computer engineering, full-stack development, and fintech.

**Live Site:** [www.reewajkhanal.com.np](https://www.reewajkhanal.com.np)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [SEO Configuration](#seo-configuration)
- [Browser Support](#browser-support)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository contains the source code for my personal portfolio website. The site serves as a comprehensive digital presence, presenting my professional background, technical competencies, project portfolio, and contact information. It is designed with a focus on performance, accessibility, and search engine optimisation.

The portfolio includes an interactive games section featuring browser-based implementations of classic arcade games, demonstrating proficiency in JavaScript, canvas manipulation, and responsive design.

---

## Features

### Core Functionality
- Single-page application architecture with smooth section transitions
- Responsive design optimised for desktop, tablet, and mobile devices
- Interactive portfolio gallery with modal project details
- Contact form with email integration
- Resume section with downloadable curriculum vitae

### Technical Highlights
- Progressive Web Application (PWA) support with offline capabilities
- Three.js-powered 3D page transition animations
- Lazy loading for optimised performance
- Comprehensive SEO implementation including structured data (JSON-LD)

### Games Section
- Browser-based arcade games with both keyboard and touch controls
- Mobile-responsive game interfaces
- Games include: 2048, Snake, Memory Match, Flappy Block, Pong, and Reaction Test

---

## Technology Stack

| Category | Technologies |
|----------|-------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Styling | Custom CSS, Bootstrap 5 |
| Animations | Three.js, CSS Transitions |
| Icons | Bootstrap Icons, Boxicons, Remix Icons, Font Awesome |
| Fonts | Google Fonts (Poppins) |
| Build Tools | npm, http-server |
| Hosting | GitHub Pages |

---

## Project Structure

```
RK10/
├── assets/
│   ├── css/
│   │   ├── style.css          # Main stylesheet
│   │   └── games.css          # Games section styles
│   ├── img/
│   │   ├── portfolio/         # Project images
│   │   └── testimonials/      # Testimonial photos
│   ├── js/
│   │   ├── main.js            # Core functionality
│   │   ├── portfolio-data.js  # Portfolio content data
│   │   ├── portfolio-modal.js # Modal functionality
│   │   └── transition-3d.js   # Three.js transitions
│   └── vendor/                # Third-party libraries
├── games/
│   ├── 2048/
│   ├── snake/
│   ├── memory/
│   ├── flappy/
│   ├── pong/
│   └── reaction/
├── index.html                 # Main entry point
├── manifest.json              # PWA manifest
├── robots.txt                 # Search engine directives
├── sitemap.xml                # XML sitemap for SEO
└── package.json               # Project dependencies
```

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/reewajkhanalrk10/ree-portfolio.git
   cd ree-portfolio/RK10
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

---

## Deployment

The site is configured for deployment on GitHub Pages. To deploy:

1. Ensure the CNAME file contains your custom domain
2. Push changes to the main branch
3. Configure GitHub Pages in repository settings to serve from the root directory

For custom domain setup, add the following DNS records:
- A record pointing to GitHub Pages IP addresses
- CNAME record for the www subdomain

---

## SEO Configuration

The portfolio implements comprehensive search engine optimisation:

### Implemented Features
- Meta tags with targeted keywords for Nepal tech industry
- Open Graph and Twitter Card meta tags for social sharing
- JSON-LD structured data (Person, WebSite, ProfilePage schemas)
- XML sitemap with all indexed pages
- Canonical URLs to prevent duplicate content
- Geo-targeting meta tags for Nepal

### Post-Deployment Checklist
1. Register the site with Google Search Console
2. Submit the sitemap at `/sitemap.xml`
3. Add verification codes to the meta tags in `index.html`
4. Register with Bing Webmaster Tools

---

## Browser Support

The portfolio is tested and optimised for the following browsers:

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |
| Opera | 67+ |

Mobile browsers on iOS and Android are fully supported.

---

## License

Copyright 2023 Reewaj Khanal. All rights reserved.

This project and its contents are proprietary. Unauthorised reproduction, distribution, or modification is prohibited without prior written consent.

---

## Contact

**Reewaj Khanal**

- Website: [www.reewajkhanal.com.np](https://www.reewajkhanal.com.np)
- Email: reewajkhanal.rk10@gmail.com
- LinkedIn: [linkedin.com/in/reewajkhanal](https://www.linkedin.com/in/reewajkhanal)
- GitHub: [github.com/reewajkhanalrk10](https://github.com/reewajkhanalrk10)

---

*Last updated: February 2026*
