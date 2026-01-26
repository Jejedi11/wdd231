const spotlightList = document.querySelector('#businesses');

async function getBusinesses() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  return members;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function makeBusiness(index, businessList) {
  let membership;
  let element = businessList[index];
  let business = document.createElement("div");
  business.classList.add('spotlighted-business');
  if (element.level == 1) {
    membership = "Bronze";
  }
  else if (element.level == 2) {
    membership = "Silver";
  }
  else if (element.level == 3) {
    membership = "Gold";
  }
  business.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.address}</p>
        <p>+ ${element.phone[0]} (${element.phone[1]}${element.phone[2]}${element.phone[3]}) ${element.phone[4]}${element.phone[5]}${element.phone[6]} ${element.phone[7]}${element.phone[8]}${element.phone[9]}</p>
        <a href="${element.url}"><img src="${element.image}" alt="${element.name}" loading="lazy"></a>
        <p>Membership: ${membership}</p>
        `;
  spotlightList.appendChild(business);


}

async function populateSpotlightBusinesses() {
  let members = await getBusinesses();
  let spotlightMembers = [];

  members.members.forEach((element) => {
    if (element.level > 1) {
      spotlightMembers.push(element);
    }
  });
  for (i = 0; i < 1; i++) {
    let randint1 = getRandomInt(0, spotlightMembers.length);
    let randint2 = getRandomInt(0, spotlightMembers.length);
    if (randint1 == randint2) {
      randint2 = getRandomInt(0, spotlightMembers.length);
    }
    makeBusiness(randint1, spotlightMembers);
    makeBusiness(randint2, spotlightMembers);
  }
}

populateSpotlightBusinesses();


