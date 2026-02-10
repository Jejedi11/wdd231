import places from "../data/places.mjs";

const placeCards = document.querySelector('#places');

for (let i = 0; i < places.length; i++) {
  let card = document.createElement('section');
  card.classList.add('place');
  card.classList.add(`place${i + 1}`);
  card.innerHTML = `
      <h2>${places[i].name}</h2>
      <figure><img src="${places[i].image}" alt="${places[i].description}" loading="lazy" width="300" height="200"></figure>
      <address>${places[i].address}</address>
      <p>${places[i].description}</p>
      <button>Learn more</button>
`
  placeCards.appendChild(card);
}
