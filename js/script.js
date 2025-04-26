console.log("Portfolio loaded successfully.");


document.addEventListener("DOMContentLoaded", () => {


  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 500);
  }

 
  const toggleBtn = document.getElementById("theme-toggle");
  let isDark = false;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.documentElement.style.setProperty('--bg-color', isDark ? '#f9f9f9' : '#1e1e1e');
      document.documentElement.style.setProperty('--text-color', isDark ? '#111' : '#f9f9f9');
      document.documentElement.style.setProperty('--card-bg', isDark ? '#fff' : '#2c2c2c');
      document.documentElement.style.setProperty('--accent-color', isDark ? '#6c63ff' : '#0099ff');
      isDark = !isDark;
    });
  }

  
  const typeText = document.getElementById("type-text");
  const textToType = "Welcome to my Portfolio👋";
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

});
const menuIcon = document.getElementById('mobile-menu-icon');
  const navLinks = document.getElementById('nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

