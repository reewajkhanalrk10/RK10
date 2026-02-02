/**
 * Sci-Fi Page Transition Loader
 * Cyberpunk-inspired loading screen with futuristic animations
 */
document.addEventListener("DOMContentLoaded", function () {
    // Skip on game pages
    if (document.body.hasAttribute('data-no-shared-navbar')) {
        return;
    }

    const rootPath = window.rootPath || "./";

    // Inject sci-fi loader HTML
    const loaderHTML = `
      <div id="page-loader-3d">
        <div class="sci-fi-bg"></div>
        <div class="grid-overlay"></div>
        <div class="scan-line"></div>
        
        <!-- Floating particles -->
        <div class="particles">
          ${Array(20).fill().map(() => '<div class="particle"></div>').join('')}
        </div>
        
        <!-- Hexagon loader -->
        <div class="hex-loader">
          <div class="hex hex-1"></div>
          <div class="hex hex-2"></div>
          <div class="hex hex-3"></div>
        </div>
        
        <!-- Center content -->
        <div class="loader-center">
          <div class="logo-container">
            <div class="logo-ring"></div>
            <div class="logo-ring ring-2"></div>
            <div class="logo-ring ring-3"></div>
            <img src="${rootPath}assets/img/webpagekologo.svg" alt="Logo" class="loader-logo">
          </div>
          
          <div class="loader-brand">
            <span class="glitch" data-text="RK10">RK10</span>
          </div>
          
          <div class="loading-bar-container">
            <div class="loading-bar"></div>
            <div class="loading-percentage">0%</div>
          </div>
          
          <div class="status-text">
            <span class="status-prefix">&gt;&gt;</span>
            <span class="status-message">INITIALIZING</span>
            <span class="cursor-blink">_</span>
          </div>
        </div>
        
        <!-- Corner decorations -->
        <div class="corner corner-tl"></div>
        <div class="corner corner-tr"></div>
        <div class="corner corner-bl"></div>
        <div class="corner corner-br"></div>
        
        <!-- Data streams -->
        <div class="data-stream left"></div>
        <div class="data-stream right"></div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", loaderHTML);

    // Sci-Fi Loader Styles
    const styles = document.createElement('style');
    styles.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        
        #page-loader-3d {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: opacity 0.6s ease, transform 0.6s ease;
            overflow: hidden;
        }
        
        #page-loader-3d.hidden {
            opacity: 0;
            pointer-events: none;
            transform: scale(1.1);
        }
        
        /* Animated gradient background */
        .sci-fi-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse at 20% 80%, rgba(24, 210, 110, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(24, 210, 110, 0.05) 0%, transparent 70%),
                linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #040404 100%);
            animation: bgPulse 4s ease-in-out infinite;
        }
        
        @keyframes bgPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        
        /* Grid overlay */
        .grid-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(24, 210, 110, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(24, 210, 110, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
            perspective: 500px;
        }
        
        @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
        
        /* Scan line effect */
        .scan-line {
            position: absolute;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(24, 210, 110, 0.5) 20%,
                rgba(24, 210, 110, 0.8) 50%,
                rgba(24, 210, 110, 0.5) 80%,
                transparent 100%
            );
            box-shadow: 0 0 20px rgba(24, 210, 110, 0.5), 0 0 40px rgba(24, 210, 110, 0.3);
            animation: scanLine 2s ease-in-out infinite;
        }
        
        @keyframes scanLine {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; opacity: 0; }
        }
        
        /* Floating particles */
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #18d26e;
            border-radius: 50%;
            box-shadow: 0 0 10px #18d26e, 0 0 20px rgba(24, 210, 110, 0.5);
            animation: particleFloat 8s ease-in-out infinite;
        }
        
        .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 6s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 0.5s; animation-duration: 8s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 1s; animation-duration: 7s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 1.5s; animation-duration: 9s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 2s; animation-duration: 6s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 0.3s; animation-duration: 8s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 0.8s; animation-duration: 7s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 1.3s; animation-duration: 9s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 1.8s; animation-duration: 6s; }
        .particle:nth-child(10) { left: 15%; animation-delay: 2.3s; animation-duration: 7s; }
        .particle:nth-child(11) { left: 25%; animation-delay: 0.2s; animation-duration: 8s; }
        .particle:nth-child(12) { left: 35%; animation-delay: 0.7s; animation-duration: 6s; }
        .particle:nth-child(13) { left: 45%; animation-delay: 1.2s; animation-duration: 9s; }
        .particle:nth-child(14) { left: 55%; animation-delay: 1.7s; animation-duration: 7s; }
        .particle:nth-child(15) { left: 65%; animation-delay: 2.2s; animation-duration: 8s; }
        .particle:nth-child(16) { left: 75%; animation-delay: 0.4s; animation-duration: 6s; }
        .particle:nth-child(17) { left: 85%; animation-delay: 0.9s; animation-duration: 9s; }
        .particle:nth-child(18) { left: 5%; animation-delay: 1.4s; animation-duration: 7s; }
        .particle:nth-child(19) { left: 95%; animation-delay: 1.9s; animation-duration: 8s; }
        .particle:nth-child(20) { left: 50%; animation-delay: 2.4s; animation-duration: 6s; }
        
        @keyframes particleFloat {
            0%, 100% { 
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            10% { 
                opacity: 1;
                transform: translateY(90vh) scale(1);
            }
            90% { 
                opacity: 1;
                transform: translateY(10vh) scale(1);
            }
            100% { 
                transform: translateY(0vh) scale(0);
                opacity: 0;
            }
        }
        
        /* Hexagon loader */
        .hex-loader {
            position: absolute;
            width: 300px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .hex {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 2px solid rgba(24, 210, 110, 0.3);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            animation: hexRotate 8s linear infinite;
        }
        
        .hex-1 { 
            animation-direction: normal;
            border-color: rgba(24, 210, 110, 0.4);
        }
        .hex-2 { 
            width: 170px;
            height: 170px;
            animation-direction: reverse;
            animation-duration: 6s;
            border-color: rgba(0, 255, 255, 0.3);
        }
        .hex-3 { 
            width: 140px;
            height: 140px;
            animation-duration: 4s;
            border-color: rgba(24, 210, 110, 0.5);
        }
        
        @keyframes hexRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Center content */
        .loader-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
        }
        
        /* Logo with rings */
        .logo-container {
            position: relative;
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-top-color: #18d26e;
            border-radius: 50%;
            animation: ringRotate 1.5s linear infinite;
        }
        
        .ring-2 {
            width: 90%;
            height: 90%;
            border-top-color: transparent;
            border-right-color: #00ffff;
            animation-duration: 2s;
            animation-direction: reverse;
        }
        
        .ring-3 {
            width: 80%;
            height: 80%;
            border-top-color: #18d26e;
            border-left-color: rgba(24, 210, 110, 0.5);
            animation-duration: 2.5s;
        }
        
        @keyframes ringRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loader-logo {
            width: 60px;
            height: 60px;
            object-fit: contain;
            filter: drop-shadow(0 0 15px rgba(24, 210, 110, 0.8));
            animation: logoPulse 2s ease-in-out infinite;
            z-index: 5;
        }
        
        @keyframes logoPulse {
            0%, 100% { 
                transform: scale(1);
                filter: drop-shadow(0 0 15px rgba(24, 210, 110, 0.8));
            }
            50% { 
                transform: scale(1.05);
                filter: drop-shadow(0 0 25px rgba(24, 210, 110, 1));
            }
        }
        
        /* Glitch brand text */
        .loader-brand {
            margin-top: 25px;
            font-family: 'Orbitron', sans-serif;
            font-size: 36px;
            font-weight: 900;
            letter-spacing: 8px;
        }
        
        .glitch {
            position: relative;
            color: #18d26e;
            text-shadow: 
                0 0 10px rgba(24, 210, 110, 0.8),
                0 0 20px rgba(24, 210, 110, 0.6),
                0 0 40px rgba(24, 210, 110, 0.4);
            animation: glitchText 3s infinite;
        }
        
        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        
        .glitch::before {
            color: #00ffff;
            animation: glitchBefore 3s infinite;
            clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
            transform: translateX(-2px);
        }
        
        .glitch::after {
            color: #ff00ff;
            animation: glitchAfter 3s infinite;
            clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
            transform: translateX(2px);
        }
        
        @keyframes glitchText {
            0%, 90%, 100% { opacity: 1; }
            92% { opacity: 0.8; }
            94% { opacity: 1; }
            96% { opacity: 0.9; }
        }
        
        @keyframes glitchBefore {
            0%, 90%, 100% { transform: translateX(0); }
            92% { transform: translateX(-5px); }
            94% { transform: translateX(3px); }
            96% { transform: translateX(-2px); }
        }
        
        @keyframes glitchAfter {
            0%, 90%, 100% { transform: translateX(0); }
            92% { transform: translateX(5px); }
            94% { transform: translateX(-3px); }
            96% { transform: translateX(2px); }
        }
        
        /* Loading bar */
        .loading-bar-container {
            width: 280px;
            height: 4px;
            background: rgba(24, 210, 110, 0.1);
            border: 1px solid rgba(24, 210, 110, 0.3);
            margin-top: 30px;
            position: relative;
            overflow: hidden;
        }
        
        .loading-bar-container::before,
        .loading-bar-container::after {
            content: '';
            position: absolute;
            top: -6px;
            width: 8px;
            height: 16px;
            border: 1px solid rgba(24, 210, 110, 0.5);
            background: #0a0a0a;
        }
        
        .loading-bar-container::before { left: -4px; }
        .loading-bar-container::after { right: -4px; }
        
        .loading-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, 
                #18d26e 0%, 
                #00ffff 50%, 
                #18d26e 100%
            );
            box-shadow: 0 0 10px #18d26e, 0 0 20px rgba(24, 210, 110, 0.5);
            transition: width 0.1s ease-out;
            animation: barGlow 1s ease-in-out infinite;
        }
        
        @keyframes barGlow {
            0%, 100% { box-shadow: 0 0 10px #18d26e, 0 0 20px rgba(24, 210, 110, 0.5); }
            50% { box-shadow: 0 0 15px #18d26e, 0 0 30px rgba(24, 210, 110, 0.7); }
        }
        
        .loading-percentage {
            position: absolute;
            right: -50px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'Share Tech Mono', monospace;
            font-size: 12px;
            color: #18d26e;
            text-shadow: 0 0 10px rgba(24, 210, 110, 0.8);
        }
        
        /* Status text */
        .status-text {
            margin-top: 25px;
            font-family: 'Share Tech Mono', monospace;
            font-size: 12px;
            color: rgba(24, 210, 110, 0.8);
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .status-prefix {
            color: #00ffff;
            margin-right: 8px;
        }
        
        .cursor-blink {
            animation: cursorBlink 0.8s step-end infinite;
        }
        
        @keyframes cursorBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        /* Corner decorations */
        .corner {
            position: absolute;
            width: 80px;
            height: 80px;
            border: 2px solid rgba(24, 210, 110, 0.3);
        }
        
        .corner-tl {
            top: 30px;
            left: 30px;
            border-right: none;
            border-bottom: none;
            animation: cornerPulse 2s ease-in-out infinite;
        }
        
        .corner-tr {
            top: 30px;
            right: 30px;
            border-left: none;
            border-bottom: none;
            animation: cornerPulse 2s ease-in-out infinite 0.5s;
        }
        
        .corner-bl {
            bottom: 30px;
            left: 30px;
            border-right: none;
            border-top: none;
            animation: cornerPulse 2s ease-in-out infinite 1s;
        }
        
        .corner-br {
            bottom: 30px;
            right: 30px;
            border-left: none;
            border-top: none;
            animation: cornerPulse 2s ease-in-out infinite 1.5s;
        }
        
        @keyframes cornerPulse {
            0%, 100% { 
                border-color: rgba(24, 210, 110, 0.3);
                box-shadow: none;
            }
            50% { 
                border-color: rgba(24, 210, 110, 0.8);
                box-shadow: 0 0 15px rgba(24, 210, 110, 0.4);
            }
        }
        
        /* Data streams */
        .data-stream {
            position: absolute;
            top: 0;
            width: 1px;
            height: 100%;
            background: linear-gradient(
                180deg,
                transparent 0%,
                rgba(24, 210, 110, 0.4) 20%,
                transparent 40%,
                rgba(0, 255, 255, 0.3) 60%,
                transparent 80%,
                rgba(24, 210, 110, 0.5) 100%
            );
            animation: dataFlow 3s linear infinite;
        }
        
        .data-stream.left { left: 20%; animation-delay: 0s; }
        .data-stream.right { right: 20%; animation-delay: 1.5s; }
        
        @keyframes dataFlow {
            0% { 
                transform: translateY(-100%);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { 
                transform: translateY(100%);
                opacity: 0;
            }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .loader-brand { font-size: 28px; letter-spacing: 5px; }
            .loading-bar-container { width: 200px; }
            .hex { width: 150px; height: 150px; }
            .hex-2 { width: 130px; height: 130px; }
            .hex-3 { width: 110px; height: 110px; }
            .corner { width: 50px; height: 50px; }
        }
    `;
    document.head.appendChild(styles);

    const loader = document.getElementById('page-loader-3d');
    const loadingBar = loader.querySelector('.loading-bar');
    const loadingPercentage = loader.querySelector('.loading-percentage');
    const statusMessage = loader.querySelector('.status-message');

    // Status messages for the loading sequence
    const statusMessages = [
        'INITIALIZING',
        'LOADING ASSETS',
        'RENDERING UI',
        'ESTABLISHING CONNECTION',
        'SYSTEM READY'
    ];

    let progress = 0;
    let messageIndex = 0;

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;

        loadingBar.style.width = progress + '%';
        loadingPercentage.textContent = Math.floor(progress) + '%';

        // Update status message based on progress
        const newIndex = Math.min(Math.floor(progress / 25), statusMessages.length - 1);
        if (newIndex !== messageIndex) {
            messageIndex = newIndex;
            statusMessage.textContent = statusMessages[messageIndex];
        }

        if (progress >= 100) {
            clearInterval(loadingInterval);
        }
    }, 150);

    // Hide loader after page loads
    window.addEventListener('load', () => {
        // Ensure bar completes
        setTimeout(() => {
            progress = 100;
            loadingBar.style.width = '100%';
            loadingPercentage.textContent = '100%';
            statusMessage.textContent = 'SYSTEM READY';

            setTimeout(() => {
                loader.classList.add('hidden');
            }, 400);
        }, 300);
    });

    // Intercept link clicks for page transitions
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

        // Reset and show loader
        progress = 0;
        messageIndex = 0;
        loadingBar.style.width = '0%';
        loadingPercentage.textContent = '0%';
        statusMessage.textContent = 'NAVIGATING';
        loader.classList.remove('hidden');

        // Start loading animation
        const transitionInterval = setInterval(() => {
            progress += Math.random() * 20 + 10;
            if (progress > 90) progress = 90;
            loadingBar.style.width = progress + '%';
            loadingPercentage.textContent = Math.floor(progress) + '%';
        }, 100);

        // Navigate after transition
        setTimeout(() => {
            clearInterval(transitionInterval);
            loadingBar.style.width = '100%';
            loadingPercentage.textContent = '100%';
            window.location.href = href;
        }, 500);
    });
});
