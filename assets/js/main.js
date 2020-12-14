const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navClose.classList.remove("hide");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navClose.classList.add("hide");
});

function linkAction() {
  navLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  navMenu.classList.remove("show");
  navClose.classList.add("hide");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));
