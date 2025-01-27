document.addEventListener('DOMContentLoaded', function() {
    // Inmediatamente hacer visibles los elementos principales
    document.querySelector('.contacto-info')?.classList.add('visible');
    document.querySelector('.contact-form')?.classList.add('visible');

    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para manejar la animación de los elementos
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Event listeners
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);

    // Activar animaciones iniciales
    setTimeout(handleScrollAnimation, 100);
});