const businessList = document.querySelector('#businesses');
const gridButton = document.querySelector('#grid-btn');

gridButton.addEventListener('click', () => {
    businessList.classList.toggle('grid');
    gridButton.classList.toggle('grid');
});