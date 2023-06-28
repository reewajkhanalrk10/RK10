// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    
    var header = document.querySelector("header");
    header.classList.toggle("dark-mode");
    
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.classList.toggle("dark-mode");
    });
    
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        section.classList.toggle("dark-mode");
    });
    
    var footer = document.querySelector("footer");
    footer.classList.toggle("dark-mode");
}
