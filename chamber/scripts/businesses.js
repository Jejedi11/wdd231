const businessesList = document.querySelector('#businesses');

async function getBusinesses() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    console.log(members);
    return members;
}

async function populateBusinesses() {
    let members = await getBusinesses();
    console.log(members);
    members.members.forEach((element) => {
        console.log(element);
        let business = document.createElement("div");
        business.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.address}</p>
        <p>${element.phone}</p>
        <p>${element.url}</p>
        <img src="${element.img}" alt="${element.name}">
        <p>${element.level}</p>
        `;
        businessesList.appendChild(business);
    });
}

populateBusinesses();