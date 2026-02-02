let modal = document.querySelector('#info-dialog');
const nonProfit = document.querySelector('#non-profit-info');
const bronze = document.querySelector('#bronze-info');
const silver = document.querySelector('#silver-info');
const gold = document.querySelector('#gold-info');

const nonProfitDetails = ['Non-Profit', 'Free', ["- Basic online business directory listing",
  "- Access to most networking events & mixers",
  "- Opportunity to participate in community events & volunteer opportunities"]]

const bronzeDetails = ['Bronze', '$30 per Month', ["- Basic online business directory listing",
  "- Access to most networking events & mixers",
  "- Opportunity to participate in community events & volunteer opportunities"]]

const silverDetails = ['Silver', '$50 per Month', ["- Basic online business directory listing",
  "- Access to most networking events & mixers",
  "- Opportunity to participate in community events & volunteer opportunities"]]

const goldDetails = ['Gold', '$100 per Month', ["- Basic online business directory listing",
  "- Access to most networking events & mixers",
  "- Opportunity to participate in community events & volunteer opportunities"]]

function displayCourseDetails(details) {
  modal.innerHTML = '';
  modal.innerHTML = `
    <h3>${details[0]}</h3>
    <p>Price: ${details[1]}</p> 
    <p>${details[2][0]}</p> 
    <p>${details[2][1]}</p> 
    <p>${details[2][2]}</p> 
    <button id="closeModal">X</button>
    
`;
  modal.showModal();

  closeModal.addEventListener('click', () => {
    modal.close();
  });
}

nonProfit.addEventListener('click', () => {
  displayCourseDetails(nonProfitDetails);
});

bronze.addEventListener('click', () => {
  displayCourseDetails(bronzeDetails);
});

silver.addEventListener('click', () => {
  displayCourseDetails(silverDetails);
});

gold.addEventListener('click', () => {
  displayCourseDetails(goldDetails);
});
