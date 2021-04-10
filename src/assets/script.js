function toggleMenu() {
  tham = document.getElementById('nav-tham');
  nav = document.getElementById('mobile-nav')

  if (tham.classList.contains('tham-active')) {
    tham.classList.remove('tham-active');
    nav.classList.add('h-0')
    nav.classList.add('invisible')
    return
  }

  tham.classList.add('tham-active');
  nav.classList.remove('h-0')
  nav.classList.remove('invisible')
}

window.onload = function() {
  document.getElementById('nav-tham').addEventListener('click', toggleMenu);
}
