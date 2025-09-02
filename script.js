// Toggle Menu for Mobile View
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
