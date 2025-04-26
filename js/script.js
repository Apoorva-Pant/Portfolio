console.log("Portfolio loaded successfully.");
const toggleBtn = document.getElementById("theme-toggle");
let isDark = false;

toggleBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty('--bg-color', isDark ? '#f9f9f9' : '#1e1e1e');
  document.documentElement.style.setProperty('--text-color', isDark ? '#111' : '#f9f9f9');
  document.documentElement.style.setProperty('--card-bg', isDark ? '#fff' : '#2c2c2c');
  document.documentElement.style.setProperty('--accent-color', isDark ? '#6c63ff' : '#0099ff');
  isDark = !isDark;
});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 500);
  });
  const typeText = document.getElementById("type-text");
const textToType = "Hello, I’m Apoorva 👋";
let i = 0;

function typeWriter() {
  if (i < textToType.length) {
    typeText.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener("load", typeWriter);
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const navLinks = document.getElementById("nav-links");

mobileMenuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
