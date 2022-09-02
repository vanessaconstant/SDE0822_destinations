// Getting all the input elements

const destinationInput = document.getElementById('destination_name');
const locationInput = document.getElementById('location');
const photoUrlInput = document.getElementById('photo_url');
const descriptionInput = document.getElementById('description');

// Getting the submit button for the click event
const submit = document.getElementById('submit-btn');

// Function that will created each destination card
function addNewDestinationCard(){

    // getting the values inside of all the input elements.
    // Need to grab them in here because there is no values until the user hits submit
    const destination_name = destinationInput.value;
    const location = locationInput.value;
    const photoUrl = photoUrlInput.value;
    const description = descriptionInput.value;
    
    //grabbing the area where all the destination will be displayed 
    const destination_results = document.getElementById("wishlist_result");

    // creating the div for each destination card
    const destinationCard = document.createElement('div');
    destinationCard.setAttribute('class', 'destination_card');

    // creating the outline of the card
    const card = `
    <h3>${destination_name}</h3>
    <img src='${photoUrl}'>
    <p>${location}</p>
    <p>${description}</p>`;


    destinationCard.innerHTML = card;
    destination_results.append(destinationCard);
    
}

// The event listener

submit.addEventListener('click',(event) =>{
    event.preventDefault();
    addNewDestinationCard();
});