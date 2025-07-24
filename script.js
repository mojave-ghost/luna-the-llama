// Generate random stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random delay for animation
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Mobile hamburger menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent to the cosmos! Luna will beam back a response soon. 🚀');
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initMobileMenu();
});

// Add parallax effect to stars
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        star.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
