const navbutton = document.querySelector('#hambtn');
const navBar = document.querySelector('nav');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
})
