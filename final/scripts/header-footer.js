const hamburgerButton = document.querySelector('#hambtn');
let navigation = document.querySelector('#nav');
const currentDate = document.querySelector("#currentyear");
const lastModified = document.querySelector("#datemodified");
const today = new Date();


hamburgerButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
});

currentDate.innerHTML = "&copy; " + today.getFullYear() + " | James Michelson | Arizona"
lastModified.textContent = "Last Modified: " + document.lastModified;
