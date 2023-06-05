const burgerIcon = document.getElementById('burger-icon');
const menuContent = document.getElementById('burger-menu-content');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  menuContent.classList.toggle('active');
  menuContent.classList.toggle('show');
  burgerIcon.querySelector('.close-icon').classList.toggle('active');

});
