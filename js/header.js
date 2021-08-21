const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu-container");
const closeButton = menu.querySelector(".header__close-button");

menu.querySelectorAll(".header__menu-link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.toggle("header__menu-container_active");
    document.body.style.overflow = "auto";
  })
);

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("header__menu-container_active");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  menu.classList.toggle("header__menu-container_active");
  document.body.style.overflow = "auto";
});
