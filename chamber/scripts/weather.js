const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=35.19&lon=-114.05&appid=b77feb71b4ae0a933ecd1cc4d62209d8&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', desc);
  caption.textContent = `${desc}`;
}

apiFetch();
