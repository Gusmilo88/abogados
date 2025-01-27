document.addEventListener('DOMContentLoaded', function() {
    // Elementos del carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentSlideIndex = 0;

    // Función para mostrar un slide específico
    function showSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Mostrar el slide actual
        slides[index].classList.add('active');
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    // Función para ir al slide anterior
    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide); // Detener el automático temporalmente
        prevSlide();
        autoSlide = setInterval(nextSlide, 3000); // Reiniciar el automático
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide); // Detener el automático temporalmente
        nextSlide();
        autoSlide = setInterval(nextSlide, 3000); // Reiniciar el automático
    });

    // Mostrar el primer slide
    showSlide(currentSlideIndex);

    // Iniciar el carrusel automático
    let autoSlide = setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
});