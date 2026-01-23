/**
 * Portfolio Data - Single source of truth for all projects
 * Adding a new project here will automatically render it in the portfolio
 */
const portfolioData = {
    "cms": {
        id: "cms",
        filters: ["filter-web"],
        image: "assets/img/portfolio/cms3.jpg",
        category: "Web",
        title: "Content Management System (CMS)",
        date: "2024",
        description: "A comprehensive Content Management System designed to streamline digital content creation and management. Features include user authentication, content versioning, media management, and a responsive admin dashboard for efficient content operations."
    },
    "berojgaar": {
        id: "berojgaar",
        filters: ["filter-web"],
        image: "assets/img/portfolio/roj4.jpg",
        category: "Web",
        title: "Be-Rojgaar: A Job Portal",
        date: "2024",
        description: "A dedicated job portal connecting job seekers with potential employers. Features include profile management, job search with advanced filters, application tracking, and employer dashboards for candidate management."
    },
    "respire": {
        id: "respire",
        filters: ["filter-web", "filter-app", "filter-iot-es"],
        image: "assets/img/portfolio/resp.jpg",
        category: "Web, App, IoT & ES",
        title: "Respire: Mental Health Support System",
        date: "2024",
        description: "An integrated system combining web, app, and IoT components to provide holistic mental health support and monitoring. Includes real-time biometric tracking, mood analysis, guided breathing exercises, and professional support connections."
    },
    "mental-compass": {
        id: "mental-compass",
        filters: ["filter-app", "filter-audio", "filter-iot-es"],
        image: "assets/img/portfolio/mc.jpg",
        category: "App, Audio, IoT & ES",
        title: "Mental Compass: AI-powered Mental Health Monitoring App",
        date: "2024",
        description: "An AI-powered mobile application that uses audio analysis and IoT sensors to monitor and support mental well-being. Features voice sentiment analysis, sleep pattern monitoring, and personalized wellness recommendations."
    },
    "gunslinger": {
        id: "gunslinger",
        filters: ["filter-game"],
        image: "assets/img/portfolio/gs4.jpg",
        category: "Game",
        title: "GunSlinger - A FPS Game in Kathmandu University",
        date: "2024",
        description: "A First-Person Shooter game set within the virtual campus of Kathmandu University, featuring custom assets and gameplay mechanics. Built with Unity, includes multiplayer support and custom character models."
    },
    "genai-music": {
        id: "genai-music",
        filters: ["filter-audio"],
        image: "assets/img/portfolio/genai.jpg",
        category: "Audio",
        title: "AI Generative Music",
        date: "2024",
        description: "Exploring the intersection of creativity and AI, this project uses generative algorithms to compose unique musical pieces. Implements LSTM networks and transformer models for melody generation and harmonization."
    },
    "instrument-dw": {
        id: "instrument-dw",
        filters: ["filter-audio"],
        image: "assets/img/portfolio/uniq.jpg",
        category: "Audio",
        title: "Nepalese Musical Instrument DataWarehousing",
        date: "2024",
        description: "A data warehousing project focused on preserving and cataloging Traditional Nepalese Musical Instruments for research and education. Includes audio samples, metadata, and historical documentation."
    },
    "heart-rate": {
        id: "heart-rate",
        filters: ["filter-iot-es"],
        image: "assets/img/portfolio/sudhansir.jpg",
        category: "IoT & ES",
        title: "Heart Rate Monitoring System",
        date: "2024",
        description: "A hardware-based system for real-time heart rate monitoring, designed for portability and accuracy. Uses optical sensors with signal processing algorithms for accurate BPM detection."
    },
    "npr21": {
        id: "npr21",
        filters: ["filter-iot-es"],
        image: "assets/img/portfolio/npr21.jpg",
        category: "IoT & ES",
        title: "21-bit NPR Computer Architecture",
        date: "2024",
        description: "Design and simulation of a custom 21-bit computer architecture, exploring unique instruction sets and processing capabilities. Includes ALU design, memory management, and assembly language specification."
    },
    "smart-watering": {
        id: "smart-watering",
        filters: ["filter-iot-es", "filter-firmware"],
        image: "assets/img/portfolio/mrr.jpg",
        category: "IoT & ES, Firmware",
        title: "Smart Plant Watering System",
        date: "2024",
        description: "An automated plant watering system using soil moisture sensors and microcontroller firmware to optimize water usage. Features scheduling, mobile notifications, and water consumption analytics."
    },
    "nepse-tool": {
        id: "nepse-tool",
        filters: ["filter-fintech"],
        image: "assets/img/portfolio/nepse.jpg",
        category: "Fintech",
        title: "Nepse Market Analysis Tool",
        date: "2024",
        description: "A financial analysis tool tailored for the Nepal Stock Exchange (NEPSE), providing traders with data visualization, technical indicators, portfolio tracking, and market trend analysis."
    },
    "nepsense": {
        id: "nepsense",
        filters: ["filter-rd"],
        image: "assets/img/portfolio/nepsense.jpg",
        category: "R&D",
        title: "NepSense - Profanity and Offensiveness Detection",
        date: "2024",
        description: "Research project using Bi-LSTM models to detect profanity and offensive language in Nepali text. Published at ICON 2024, achieving state-of-the-art performance on Nepali language datasets."
    },
    "covid-analysis": {
        id: "covid-analysis",
        filters: ["filter-rd"],
        image: "assets/img/portfolio/ge2.jpg",
        category: "R&D",
        title: "COVID-19 Data Analysis of Jhapa and Terathum",
        date: "2024",
        description: "Data analysis project studying the impact and spread of COVID-19 in specific districts of Nepal. Includes statistical modeling, visualization dashboards, and epidemiological insights."
    }
};

