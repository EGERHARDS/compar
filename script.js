// JavaScript for Smooth Scrolling and Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Hover effects for text elements
  const textElements = document.querySelectorAll(".text");
  textElements.forEach((el) => {
    el.addEventListener("mouseover", function () {
      this.style.color = "#555"; // Change text color on hover
    });
    el.addEventListener("mouseout", function () {
      this.style.color = ""; // Revert text color on mouse out
    });
  });
});

// Function to toggle the burger menu
function toggleMenu() {
    var burger = document.querySelector('.burger-menu');
    var links = document.querySelector('.nav-links');
    var navbarHeight = document.querySelector('nav').offsetHeight;

    // Set the top position of the menu based on the navbar's height
    links.style.top = navbarHeight + 'px';

    burger.classList.toggle('open');
    links.classList.toggle('open');

    // Toggle body scrolling
    if (links.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Gallery slider functionality
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let timer = null;

function initGallery() {
  showSlide(slideIndex); // Show the first slide
  timer = setTimeout(nextSlide, 5000); // Set timer for the next slide
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function showSlide(n) {
  clearTimeout(timer); // Clear existing timer

  // Normalize the slide index
  let nextIndex = (n + slides.length) % slides.length;

  // Fade out the current slide and fade in the next slide
  if (slides[slideIndex]) {
    slides[slideIndex].style.opacity = 0;
  }
  slides[nextIndex].style.display = "block";
  setTimeout(() => {
    slides[nextIndex].style.opacity = 1;
  }, 50);

  // Update the slide index
  slideIndex = nextIndex;

  // Set a new timer
  timer = setTimeout(nextSlide, 5000);
}

function moveSlide(n) {
  showSlide(slideIndex + n);
}

let lastScrollTop = 0; // Variable to keep track of last scroll position

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      document.querySelector("nav").style.top = "-100px"; // Adjust '-60px' based on the height of your navbar
    } else {
      // Scrolling up
      document.querySelector("nav").style.top = "0px";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);

document.addEventListener('DOMContentLoaded', (event) => {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }
});


