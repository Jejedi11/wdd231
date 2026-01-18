const businessesList = document.querySelector('#businesses');

async function getBusinesses() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    console.log(members);
    return members;
}

async function populateBusinesses() {
    let members = await getBusinesses();
    members.members.forEach((element) => {
        console.log(element);
        let membership;
        let business = document.createElement("div");
        if (element.level == 1){
            membership = "Bronze";
        }
        else if (element.level == 2){
            membership = "Silver";            
        }
        else if (element.level == 3){
            membership = "Gold";
        }
        business.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.address}</p>
        <p>+ ${element.phone[0]} (${element.phone[1]}${element.phone[2]}${element.phone[3]}) ${element.phone[4]}${element.phone[5]}${element.phone[6]} ${element.phone[7]}${element.phone[8]}${element.phone[9]}</p>
        <a href="${element.url}"><img src="${element.image}" alt="${element.name}"></a>
        <p>Membership: ${membership}</p>
        `;
        businessesList.appendChild(business);
    });
}

populateBusinesses();