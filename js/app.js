//---------------------//
//<---general---->//
//-------------------//

// scroll vertical
let currentSection = 0;
let lastScrollTime = 0;
const sections = document.querySelectorAll(".section");

const moveSections = (direction) => {
  if (direction === "down" && currentSection < sections.length - 1) {
    currentSection++;
  } else if (direction === "up" && currentSection > 0) {
    currentSection--;
  }

  sections.forEach((section, index) => {
    section.style.transform = `translateY(-${currentSection * 100}vh)`;
  });
};

let touchStartY = 0;
let touchStartX = 0;

window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
  touchStartX = event.touches[0].clientX;
});

window.addEventListener("touchmove", (event) => {
  event.preventDefault();

  const touchEndY = event.changedTouches[0].clientY;
  const touchEndX = event.changedTouches[0].clientX;

  const deltaY = touchStartY - touchEndY;
  const deltaX = touchStartX - touchEndX;

  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    // Movimiento vertical
    if (deltaY > 0) {
      moveSections("down");
    } else if (deltaY < 0) {
      moveSections("up");
    }
  } else {
    // Movimiento horizontal
    const currentSectionElement = sections[currentSection];
    const slideContainer = currentSectionElement.querySelector(".slide-container");

    if (deltaX > 0 && slideContainer) {
      moveSlides("right");
    } else if (deltaX < 0 && slideContainer) {
      moveSlides("left");
    }
  }
}, { passive: false });

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    const currentTime = new Date().getTime();

    if (currentTime - lastScrollTime > 500) {
      lastScrollTime = currentTime;

      if (event.deltaY > 0) {
        moveSections("down");
      } else if (event.deltaY < 0) {
        moveSections("up");
      }
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveSections("down");
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    moveSections("up");
  }
});

// slide horizontal
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

const moveSlides = (direction) => {
  if (direction === "right") {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Agrega esta línea
    }
  } else if (direction === "left" && currentSlide > 0) {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
};
window.addEventListener("keydown", (event) => {
  const currentSectionElement = sections[currentSection];
  const slideContainer = currentSectionElement.querySelector(".slide-container");

  if (event.key === "ArrowRight" && slideContainer) {
    event.preventDefault();
    moveSlides("right");
  } else if (event.key === "ArrowLeft" && slideContainer) {
    event.preventDefault();
    moveSlides("left");
  }
});

//---------------------//
//<---section-one---->//
//-------------------//


//texto multiple loop
var typingEffect = new Typed(".multiText", {
  strings: ["Coder", "Creative", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
});

//---------------------//
//<---section-two---->//
//-------------------//

// Selecciona todos los enlaces de categoría
const categoryLinks = document.querySelectorAll(".categorias a");

// Agrega un evento de clic a cada enlace de categoría
categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Evita que el enlace realice su acción predeterminada
    event.preventDefault();

    // Selecciona la categoría del enlace en el que se hizo clic
    const category = event.target.textContent;

    // Selecciona todos los contenedores skills
    const skillsContainers = document.querySelectorAll(".skills");

    // Oculta todos los contenedores skills
    skillsContainers.forEach((container) => {
      container.style.display = "none";
    });

    // Muestra solo los contenedores skills que tienen la clase correspondiente a la categoría seleccionada
    if (category === "Todos") {
      skillsContainers.forEach((container) => {
        container.style.display = "block";
      });
    } else {
      const selectedContainers = document.querySelectorAll(
        `.skills.${category.toLowerCase()}`
      );
      selectedContainers.forEach((container) => {
        container.style.display = "block";
      });
    }



//---------------------//
//<---section-four---->//
//-------------------//


    // bottom back contact.html --> index.html //

    // Elimina la clase activo de todos los enlaces de categoría
    categoryLinks.forEach((link) => {
      link.classList.remove("activo");
    });

    // Agrega la clase activo al enlace de categoría seleccionado
    event.target.classList.add("activo");
  });
});


// Almacenar la sección actual en el almacenamiento local del navegador
document.querySelector('#contact-button').addEventListener('click', function() {
  localStorage.setItem('currentSection', 'section-four');
});

// Navegar a la sección correcta cuando la página se carga
window.addEventListener('load', function() {
  var storedSection = localStorage.getItem('currentSection');
  if (storedSection) {
      sections.forEach((section, index) => {
          if (section.classList.contains(storedSection)) {
              currentSection = index;
              moveSections();
          }
      });
  }
});

// Navegar de regreso a la página index.html cuando haces clic en el botón de regreso
document.querySelector('#back-button').addEventListener('click', function(event) {
  event.preventDefault();
  var currentSection = localStorage.getItem('currentSection');
  window.location.href = 'index.html#' + currentSection;
});