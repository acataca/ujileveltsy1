const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// Fungsi Klik Hamburger
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('slide');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
                e.preventDefault();
                window.location.href = 'index.html' + targetId;
            }
        }

        if (navMenu && navMenu.classList.contains('slide')) {
            navMenu.classList.remove('slide');
            menuToggle.classList.remove('active');
        }
    });
});