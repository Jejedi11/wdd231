const furl = "https://api.openweathermap.org/data/2.5/forecast?lat=35.19&lon=-114.05&appid=b77feb71b4ae0a933ecd1cc4d62209d8&units=imperial";
const day1Title = document.querySelector('#day1ab');
const day1image = document.querySelector('#day1img');
const day1temperature = document.querySelector('#day1temp');

async function apiFetch() {
  try {
    const response = await fetch(furl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //displayResults(data);
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}

function populateForcast() {

}
