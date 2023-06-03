const burgerIcon = document.getElementById('burger-icon');
const menuContent = document.getElementById('burger-menu-content');

burgerIcon.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});

  burgerIcon.addEventListener('click', function() {
  let icon = this;
  let menu = document.getElementById('burger-menu-content');

  icon.classList.toggle('active');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
