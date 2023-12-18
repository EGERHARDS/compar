document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth",
          });
      });
  });

  const textElements = document.querySelectorAll(".text");
  textElements.forEach((el) => {
      el.addEventListener("mouseover", function () {
          this.style.color = "#555";
      });
      el.addEventListener("mouseout", function () {
          this.style.color = "";
      });
  });

  const burger = document.querySelector('.burger-menu');
  const links = document.querySelector('.nav-links');
  burger.addEventListener('click', function() {
      var navbarHeight = document.querySelector('nav').offsetHeight;
      links.style.top = navbarHeight + 'px';
      this.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");
  let timer = null;

  function initGallery() {
      showSlide(slideIndex);
      timer = setTimeout(nextSlide, 5000);
  }

  function nextSlide() {
      showSlide(slideIndex + 1);
  }

  function showSlide(n) {
      clearTimeout(timer);

      let nextIndex = (n + slides.length) % slides.length;

      if (slides[slideIndex]) {
          slides[slideIndex].style.opacity = 0;
      }
      slides[nextIndex].style.display = "block";
      setTimeout(() => {
          slides[nextIndex].style.opacity = 1;
      }, 50);

      slideIndex = nextIndex;

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

  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const sunIcon = document.querySelector('#sun-icon');
  const moonIcon = document.querySelector('#moon-icon');

  const updateIcons = () => {
      if (darkModeToggle.checked) {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline';
      } else {
          sunIcon.style.display = 'inline';
          moonIcon.style.display = 'none';
      }
  };

  darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      updateIcons();
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }
  updateIcons();

  const externalLink = document.querySelector('.external-link');
  if (externalLink) {
      externalLink.addEventListener('click', function (e) {
          e.preventDefault();
          const url = this.href;

          const userResponse = confirm("You are being redirected to an external website. Do you want to continue?");

          if (userResponse) {
              window.open(url, '_blank');
          }
      });
  }

  let lastScrollTop = 0;
  window.addEventListener("scroll", function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
          document.querySelector("nav").style.top = "-105px";
      } else {
          document.querySelector("nav").style.top = "0";
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);
});
