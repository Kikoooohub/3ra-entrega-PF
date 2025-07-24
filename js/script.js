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
        carousel.style.transition = "transform 2s ease-in-out";
        carousel.style.transform = "translateX(${-slides[0].offsetWidth}px)";

        setTimeout(() => {
            let firstSlide = carousel.firstElementChild;
            carousel.appendChild(firstSlide);
            carousel.style.transition = "ease-in-out 3s";
            carousel.style.transform = "translateX(0)";
            slides = carousel.querySelectorAll(".Main-li");
            highlightCenterSlide();
        }, 800);
    }

    // Inicia el carrusel automático
    function startCarousel() {
        clearInterval(interval);
        interval = setInterval(moveCarousel, 3000);
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



// ------------------- PAGINA POST -------------------

const posts = {
    "redes-sociales": {
        titulo: "¿Por qué son tan adictivas las redes sociales?",
        imagen: "./img/phoneadict.webp",
        contenido: "Las redes sociales están diseñadas para captar nuestra atención, algo que las plataformas saben hacer a la perfección. Cada \"me gusta\", cada comentario, cada notificación activa una liberación de dopamina en nuestro cerebro, el neurotransmisor asociado con el placer y la recompensa. Este ciclo de retroalimentación positiva puede resultar tan gratificante que, a medida que los jóvenes obtienen más \"reconocimiento digital\", sienten la necesidad de estar constantemente conectados y buscando más interacción.El problema radica en que este proceso no solo se limita a un uso moderado. En muchos casos, los jóvenes se ven atrapados en un ciclo interminable de revisar sus dispositivos, esperar interacciones y compararse con una versión idealizada de los demás. Es fácil caer en la trampa de medir nuestro valor en función de la cantidad de seguidores, \"me gusta\" o comentarios que recibimos, lo que puede afectar gravemente la autoestima y la salud mental."
    },
    "vapers": {
        titulo: "¿Los vapers seguros o inseguros?",
        imagen: "./img/girlvape.webp",
        contenido: "En los últimos años, el vaper se ha convertido en una de las opciones más populares entre los jóvenes. Publicidad atractiva, sabores tentadores y una percepción errónea de que es \"menos dañino\" que el cigarro convencional han contribuido a su auge. Sin embargo, a pesar de su creciente popularidad, el vaper no está exento de riesgos y, en muchos casos, puede ser incluso más peligroso de lo que parece. Aunque el vaper parece ser una alternativa \"segura\" al cigarro tradicional, los riesgos son mucho mayores de lo que muchos jóvenes piensan. La nicotina, los daños respiratorios, los problemas cardíacos y los riesgos a largo plazo son razones suficientes para reconsiderar el uso de estos dispositivos. Es fundamental que los jóvenes estén informados sobre los peligros reales y busquen alternativas más saludables para cuidar su bienestar. La presión social y la moda pueden ser fuertes, pero la salud siempre debe ser lo primero."
    },
    "oportunidades": {
        titulo: "La búsqueda de trabajo para los jóvenes. ¿Una peli de horror?",
        imagen: "./img/youth.webp",
        contenido: "En un mundo cada vez más globalizado y competitivo, los jóvenes enfrentan retos importantes al momento de entrar al mercado laboral. Mientras que las oportunidades están al alcance de la mano, el camino hacia el empleo ideal a menudo parece un escenario digno de una película de horror, lleno de obstáculos inesperados. Desde la falta de experiencia hasta la competencia feroz, los jóvenes deben lidiar con numerosos desafíos que ponen a prueba su resiliencia y determinación. Sin embargo, en medio de este panorama complicado, también existen enormes oportunidades en sectores emergentes, el emprendimiento, los programas de pasantías y la educación continua. El truco está en no rendirse ante las dificultades y entender que, aunque el camino puede ser arduo, cada paso que se da es una oportunidad para aprender y crecer."
    },
    "finanzas": {
        titulo: "¿Cómo manejan el dinero la nueva generación? ¿Mejor o peor?",
        imagen: "./img/money.webp",
        contenido: "El manejo del dinero entre los jóvenes es un tema complejo y multifacético. Si bien las oportunidades tecnológicas y las nuevas formas de pago han facilitado el acceso a productos y servicios, también han creado nuevos desafíos relacionados con el gasto impulsivo, la deuda y la falta de educación financiera. A medida que los jóvenes se enfrentan a un panorama económico incierto, es crucial que aprendan a gestionar sus finanzas con responsabilidad, aprovechar las herramientas disponibles y, sobre todo, desarrollar una mentalidad que valore el ahorro y la inversión a largo plazo. En última instancia, el manejo adecuado del dinero es una habilidad que puede marcar la diferencia entre alcanzar la independencia financiera o caer en la trampa del consumo sin control."
    },
    "relaciones": {
        titulo: "Evolución o Revolución de Género. ¿Hasta dónde llegará?",
        imagen: "./img/peoplegroup.webp",
        contenido: "Para muchos, lo que estamos viviendo hoy en día en cuanto a género no es solo un cambio gradual, sino una auténtica revolución. La lucha por los derechos de las personas LGBTQ+, la visibilidad de las mujeres en todos los ámbitos de la vida y el cuestionamiento de los roles tradicionales de género han dado paso a una nueva era de identidad y reconocimiento. La revolución de género se expresa en la desafiante pregunta de si realmente necesitamos etiquetas para definirnos o si podemos existir más allá de las construcciones binarias de \"masculino\" y \"femenino\".El futuro del género probablemente siga siendo un campo en constante cambio, impulsado tanto por revoluciones como por evoluciones. En última instancia, lo importante es que la sociedad continúe avanzando hacia una mayor equidad, donde todas las identidades de género puedan ser reconocidas, respetadas y celebradas."
    }
};

const params = new URLSearchParams(window.location.search);
const noticia = params.get('noticia');
const data = posts[noticia];

if (data) {
    document.getElementById('post-title').textContent = data.titulo;
    document.getElementById('post-image').src = data.imagen;
    document.getElementById('post-image').alt = data.titulo;
    document.getElementById('post-content').textContent = data.contenido;
} else {
    document.getElementById('post-title').textContent = "Publicación no encontrada";
    document.getElementById('post-content').textContent = "Lo sentimos, la publicación solicitada no existe.";
    document.getElementById('post-image').style.display = "none";
}
