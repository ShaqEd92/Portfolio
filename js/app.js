const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const about = document.querySelector(".to-about");
const resume = document.querySelector(".to-resume");
const portfolio = document.querySelector(".to-portfolio");
const contact = document.querySelector(".to-contact");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

about.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})
resume.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})
portfolio.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})
contact.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})
