const nonProfit = document.querySelector('#non-profit-info')
const modal = document.querySelector('#non-profit');


nonProfit.addEventListener('click', () => {
  modal.innerHTML = "<h1>Hey</h1>"
  modal.showModal();
})

function displayCourseDetails(course) {
  modal.innerHTML = '';
  modal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
`;
  modal.showModal();

  closeModal.addEventListener('click', () => {
    modal.close();
  });
}


