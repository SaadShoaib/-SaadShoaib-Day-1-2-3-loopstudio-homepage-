const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  overlay.classList.toggle("active");
  navLinks.classList.toggle("active");
});
