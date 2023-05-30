const burgerIcon = document.getElementById('burger-icon');
const menuContent = document.getElementById('burger-menu-content');

burgerIcon.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});
