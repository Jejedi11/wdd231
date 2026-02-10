let message = document.querySelector('#message');
let lastVisit = localStorage.getItem('lastVisit');

if (lastVisit == null) {
  localStorage.setItem('lastVisit', Date.now());
  message.textContent = 'Welcome! Let us know if you have any questions.'
}
else if (Date.now() - lastVisit < Date.now() - (24 * 60 * 60 * 1000)) {
  localStorage.setItem('lastVisit', Date.now())
  message.textContent = 'Back so soon! Awesome!';
}
else {
  const difference = Math.abs(Date.now() - lastVisit);
  const n = Math.round(difference / (1000 * 60 * 60 * 24));
  message.textContent = `You last visited ${n} days ago.`
}
