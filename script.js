const burgerIcon = document.getElementById('burger-icon');
const menuContent = document.getElementById('burger-menu-content');

burgerIcon.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});

document.getElementById('burger-icon').addEventListener('click', function() {
  var icon = this;
  var menu = document.getElementById('burger-menu-content');

  icon.classList.toggle('active');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
