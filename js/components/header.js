document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdowns = document.querySelectorAll('.mobile-menu .dropdown');

    // Toggle menú mobile
    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Manejar dropdowns en modo mobile/tablet
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.submenu');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                // Cerrar otros submenús
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                        other.querySelector('.submenu').classList.remove('active');
                    }
                });
                
                // Toggle el actual
                dropdown.classList.toggle('active');
                submenu.classList.toggle('active');
            }
        });
    });

    // Cerrar menú mobile al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            menuButton.classList.remove('active');
            // Cerrar todos los submenús
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.submenu').classList.remove('active');
            });
        }
    });
});