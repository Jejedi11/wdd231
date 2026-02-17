

export function displayGuideDetails(guide) {
  const modal = document.querySelector('#guide-details');
  modal.innerHTML = '';
  modal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${guide.name}</h2>
    <p>${guide.description}</p>
    <a href="${guide.link}">Get started</a>
`;
  modal.showModal();

  closeModal.addEventListener('click', () => {
    modal.close();
  });
}

