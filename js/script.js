console.log("Portfolio loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 500);
  }

  // Typewriter effect
  const typeText = document.getElementById("type-text");
  const textToType = "Welcome to my Portfolio 👋";
  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typeText.innerHTML += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }

  if (typeText) {
    typeWriter();
  }

  // Mobile menu toggle
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenuIcon && navLinks) {
    mobileMenuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
});

