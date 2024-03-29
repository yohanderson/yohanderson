//---------------------//
//<---general---->//
//-------------------//

//---icon---//
var link = document.querySelector('link[rel="shortcut icon"]');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // El navegador está en modo oscuro
  link.href = "./source/img/resources/logo_señor_e_blanco.png";
} else {
  // El navegador está en modo claro
  link.href = "./source/img/resources/logo_señor_e.png";
}


// nav //
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtnIcon.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


// scroll vertical
let currentSection = 0;
let currentSlide = 0;
const sections = document.querySelectorAll(".section");

const moveSlides = (direction) => {
  const slides = sections[currentSection].querySelectorAll(".slide");
  if (direction === "right") {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
  } else if (direction === "left" && currentSlide > 0) {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
};

const moveSections = (direction) => {
  if (currentSlide === 0) {
    if (direction === "down" && currentSection < sections.length - 1) {
      currentSection++;
    } else if (direction === "up" && currentSection > 0) {
      currentSection--;
    }

    sections.forEach((section, index) => {
      section.style.transform = `translateY(-${currentSection * 100}vh)`;
    });
  }
};

window.addEventListener("keydown", (event) => {
  const currentSectionElement = sections[currentSection];
  const slideContainer =
    currentSectionElement.querySelector(".slide-container");

  if (event.key === "ArrowRight" && slideContainer) {
    event.preventDefault();
    moveSlides("right");
  } else if (event.key === "ArrowLeft" && slideContainer) {
    event.preventDefault();
    moveSlides("left");
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    moveSections("down");
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    moveSections("up");
  }
});

let totalDeltaY = 0;
const threshold = 100;

window.addEventListener("wheel", (event) => {
  if (currentSlide === 0) {
    const delta = event.deltaY;
    totalDeltaY += delta;

    if (Math.abs(totalDeltaY) > threshold) {
      if (delta > 0) {
        // El usuario está desplazándose hacia abajo
        moveSections("down");
      } else if (delta < 0) {
        // El usuario está desplazándose hacia arriba
        moveSections("up");
      }
      totalDeltaY = 0;
    }
  }
});

//desplazamiento en mobile 

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
};

const handleTouchMove = (event) => {
  touchEndX = event.touches[0].clientX;
  touchEndY = event.touches[0].clientY;
};

const handleTouchEnd = () => {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const threshold = 50;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // El usuario está desplazándose horizontalmente
    if (deltaX > 0) {
      moveSlides("left");
    } else {
      moveSlides("right");
    }
  } else {
    // El usuario está desplazándose verticalmente
    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        moveSections("up");
      } else {
        moveSections("down");
      }
    }
  }
};

window.addEventListener("touchstart", handleTouchStart);
window.addEventListener("touchmove", handleTouchMove);
window.addEventListener("touchend", handleTouchEnd);

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

function descargarImagen() {
  var link = document.createElement("a");
  link.href = "./source/img/resources/cv.png";
  link.download = "cv-se.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



//----------------------//
//<---section-two----->//
//--------------------//

//----------------------//
//<---section-three---->//
//----------------------//

const categoryLinks = document.querySelectorAll(".categorias a");

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const category = event.target.textContent;

    const skillsContainers = document.querySelectorAll(".skills");

    skillsContainers.forEach((container) => {
      container.style.display = "none";
    });

    const selectedContainers = document.querySelectorAll(
      `.skills.${category.toLowerCase()}`
    );
    selectedContainers.forEach((container) => {
      container.style.display = "block";
    });

    categoryLinks.forEach((link) => {
      link.classList.remove("activo");
    });

    event.target.classList.add("activo");
  });
});

window.addEventListener("load", () => {
  const skillsContainers = document.querySelectorAll(".skills");

  skillsContainers.forEach((container) => {
    container.style.display = "none";
  });

  const selectedContainers = document.querySelectorAll(
    `.skills.frontend`
  );
  selectedContainers.forEach((container) => {
    container.style.display = "block";
  });
});

//---------------------//
//<---section-four---->//
//--------------------//
