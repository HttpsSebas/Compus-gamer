const submenuItems = document.querySelectorAll('.has-submenu > a');
submenuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const submenu = item.nextElementSibling;
    submenu.classList.toggle('active');
  });
});