const container = document.querySelector('#events');

for (let i = 0; i < 4; i++) {
  let upcomingEvent = document.createElement('p');
  upcomingEvent.textContent = "Event Coming Soon";

  container.appendChild(upcomingEvent);
}

