export function hasVisited() {
  let visits = localStorage.getItem('lastVisit');
  let welcome = document.querySelector('#welcome');
  if (visits == null) {
    welcome.textContent = 'Welcome!'
    localStorage.setItem('lastVisit', 1)
  }
  else {
    welcome.textContent = 'Welcome Back!'
  }
}
