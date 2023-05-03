//---------------------//
//<---general---->//
//-------------------//


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

window.addEventListener(
  "touchmove",
  (event) => {
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
      const slideContainer =
        currentSectionElement.querySelector(".slide-container");

      if (deltaX > 0 && slideContainer) {
        moveSlides("right");
      } else if (deltaX < 0 && slideContainer) {
        moveSlides("left");
      }
    }
  },
  { passive: false }
);

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
  const slideContainer =
    currentSectionElement.querySelector(".slide-container");

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

function descargarImagen() {
  var link = document.createElement("a");
  link.href = "../source/img/cv.png";
  link.download = "img.png";
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
