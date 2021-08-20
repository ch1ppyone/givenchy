const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const closeButton = menu.querySelector('.header__close-button');


burgerButton .addEventListener("click", () => {
   menu.classList.toggle('header__menu_active');
});

closeButton .addEventListener("click", () => {
  menu.classList.toggle('header__menu_active');
});


