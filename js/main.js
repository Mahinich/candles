window.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.header__menu-list');
  const burgerBtn = document.querySelector('.menu__btn');
  const bBody = document.querySelector('body'); 

  burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('hidden');
  }
})