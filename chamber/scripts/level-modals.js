const modal = document.querySelector('#info-dialog');
const nonProfit = document.querySelector('#non-profit-info');
const bronze = document.querySelector('#bronze-info');
const silver = document.querySelector('#silver-info');
const gold = document.querySelector('#gold-info');

function displayCourseDetails() {
  modal.innerHTML = '';
  modal.innerHTML = `
    <button id="closeModal">X</button>
    
`;
  modal.showModal();

  closeModal.addEventListener('click', () => {
    modal.close();
  });
}

nonProfit.addEventListener('click', () => {
  displayCourseDetails();
});

bronze.addEventListener('click', () => {
  displayCourseDetails();
});
silver.addEventListener('click', () => {
  displayCourseDetails();
});
gold.addEventListener('click', () => {
  displayCourseDetails();
});
