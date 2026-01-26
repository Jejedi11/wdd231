const furl = "https://api.openweathermap.org/data/2.5/forecast?lat=35.19&lon=-114.05&appid=b77feb71b4ae0a933ecd1cc4d62209d8&units=imperial";
const forecast = document.querySelector('#week');

async function apiFetch() {
  try {
    const response = await fetch(furl);
    if (response.ok) {
      const data = await response.json();
      populateForcast(data);
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}

function populateForcast(data) {
  for (var i = 5; i < 22; i += 8) {
    let day = document.createElement('div');
    let dayTitle = document.createElement('p');
    let dayimage = document.createElement('img');
    let dayTemperature = document.createElement('p');
    day.classList.add('day');
    const dateString = data.list[i].dt_txt;
    const dateObject = new Date(dateString);
    dayTitle.textContent = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
    const iconUrl = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
    const desc = data.list[i].weather[0].description;
    dayimage.setAttribute('src', iconUrl)
    dayimage.setAttribute('alt', desc)
    dayTemperature.innerHTML = `${data.list[i].main.temp}&deg;F`
    forecast.appendChild(day);
    day.appendChild(dayTitle);
    day.appendChild(dayimage);
    day.appendChild(dayTemperature);

  }

}

apiFetch();
