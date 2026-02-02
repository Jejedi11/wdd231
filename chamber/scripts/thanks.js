const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const email = params.get('email');
const phone = params.get('phone');
const organization = params.get('organization');

const main = document.querySelector('main');

const userName = document.createElement('p');
userName.innerHTML = `Name: ${fname} ${lname}`;
main.appendChild(userName);

const userEmail = document.createElement('p');
userEmail.innerHTML = `Email: ${email}`;
main.appendChild(userEmail);

const userPhone = document.createElement('p');
userPhone.innerHTML = `Phone: ${phone}`;
main.appendChild(userPhone);

const userOrganization = document.createElement('p');
userOrganization.innerHTML = `Organization: ${organization}`;
main.appendChild(userOrganization);
