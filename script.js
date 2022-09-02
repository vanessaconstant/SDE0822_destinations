
const form = document.getElementById("destination_form");
console.log(form);

const destinationInput = form.elements['destination_name'];

const locationInput = form.elements['location'];
const img_urlInput = form.elements['photo_url'];
const descriptionInput = form.elements['description'];

let destination = destinationInput.value;
console.log(destination);
