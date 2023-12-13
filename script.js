// JavaScript for Smooth Scrolling, Hover Effects, Gallery, Burger Menu, and External Link Confirmation
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

  // Function to toggle the burger menu
  const burger = document.querySelector('.burger-menu');
  const links = document.querySelector('.nav-links');
  burger.addEventListener('click', toggleMenu);

  function toggleMenu() {
      var navbarHeight = document.querySelector('nav').offsetHeight;
      links.style.top = navbarHeight + 'px';
      burger.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
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

  document.querySelectorAll('.prev, .next').forEach(button => {
      button.addEventListener('click', function() {
          moveSlide(this.classList.contains('prev') ? -1 : 1);
      });
  });

  initGallery();

  // Dark mode toggle functionality
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }

  // External link confirmation
  const externalLink = document.querySelector('.external-link');

  if (externalLink) {
      externalLink.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default link behavior
          const url = this.href; // Store the URL

          // Show confirmation dialog
          const userResponse = confirm("You are being redirected to an external website. Do you want to continue?");

          // Redirect based on user response
          if (userResponse) {
              window.open(url, '_blank');
          }
      });
  }
});
