let distroList = document.querySelector('#distro-list');

async function getDistributions() {
  const response = await fetch('data/distros.json');
  const distributions = await response.json();
  return distributions;
}

async function populateDistributions() {
    let distributions = await getDistributions();
    distributions.distros.forEach(element => {
        let card = document.createElement('section');
        card.classList.add('distro');
        card.innerHTML = `
            <h2 style="border-bottom: solid 5px ${element["primary-color"]};">${element['name']}</h2>
            <p>${element['description']}</p>
            <a href="${element['url']}">Learn more</a>
            <a href="${element['torrent-download-page-url']}">Download</a>
        `
        distroList.appendChild(card);
    });
}

try {
    populateDistributions();
} catch (error){
    console.error(error);
}