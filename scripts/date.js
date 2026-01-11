const currentDate = document.querySelector("#currentyear");
const lastModified = document.querySelector("#datemodified");
const today = new Date();

currentDate.innerHTML = "&copy; " + today.getFullYear() + " | James Michelson | Arizona"
lastModified.textContent = "Last Modified: " + document.lastModified;
