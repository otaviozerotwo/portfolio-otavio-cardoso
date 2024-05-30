const botaoHamburger = document.querySelector("#botaoHamburger");
const botaoFecharMenu = document.querySelector("#botaoFecharMenu");

const mobileMenu = document.querySelector("#mobileMenu");

botaoHamburger.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

botaoFecharMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});