// ------------------- ACORDEÓN FAQ -------------------

// Selecciona todas las preguntas del acordeón
const preguntas = document.querySelectorAll('.Container-pregunta');

// Añade evento click a cada pregunta
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        // Busca el contenedor de la respuesta asociada
        const respuesta = pregunta.nextElementSibling;

        // Si existe el contenedor de respuesta y tiene la clase correcta
        if (respuesta && respuesta.classList.contains('Container-respuesta')) {
            // Oculta todas las respuestas menos la actual
            document.querySelectorAll('.Container-respuesta').forEach(res => {
                if (res !== respuesta) {
                    res.classList.remove('visible');
                }
            });
            // Alterna la visibilidad de la respuesta actual
            respuesta.classList.toggle('visible');
        }
    });
});


// ------------------- MODO OSCURO -------------------

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica si el modo oscuro estaba activado antes
    const modo = localStorage.getItem('modo');
    if (modo === 'oscuro') {
        body.classList.add('dark-mode');
    }

    // Alterna modo oscuro y lo guarda en localStorage
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('modo', 'oscuro');
        } else {
            localStorage.setItem('modo', 'claro');
        }
    });
});



// ------------------- CAROUSEL SLIDER -------------------

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el carrusel de noticias
    const carousel = document.querySelector("#news-carousel");
    if (!carousel) return;

    let slides = carousel.querySelectorAll(".Main-li");
    let interval;

    // Destaca el slide central y opaca los demás
    function highlightCenterSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active-slide");
            slide.classList.add("inactive-slide");
        });
        slides[2].classList.add("active-slide");
        slides[2].classList.remove("inactive-slide");
    }

    // Mueve el carrusel hacia la izquierda y reordena los slides
    function moveCarousel() {
        carousel.style.transition = "transform 1s ease-in-out";
        carousel.style.transform = "translateX(${-slides[0].offsetWidth}px)";

        setTimeout(() => {
            let firstSlide = carousel.firstElementChild;
            carousel.appendChild(firstSlide);
            carousel.style.transition = "ease-in-out 1s";
            carousel.style.transform = "translateX(0)";
            slides = carousel.querySelectorAll(".Main-li");
            highlightCenterSlide();
        }, 800);
    }

    // Inicia el carrusel automático
    function startCarousel() {
        clearInterval(interval);
        interval = setInterval(moveCarousel, 4000);
    }

    // Detiene el carrusel al pasar el mouse
    carousel.addEventListener("mouseenter", () => clearInterval(interval));
    carousel.addEventListener("mouseleave", startCarousel);

    // Estilos iniciales del carrusel
    carousel.style.display = "flex";
    carousel.style.overflow = "visible";

    highlightCenterSlide();
    startCarousel();
});