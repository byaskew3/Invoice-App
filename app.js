// --------- CACHING THE DOM ----------------

const midContainer = document.querySelector('.mid-container');


// --------------- GLOBAL VARIABLES --------------

const servicesArr = ['Wash Car: $10', 'Mow Lawn: $20', 'Pull Weeds: $30']
let serviceItems = [];

// ---------------- EVENT LISTENERS ---------------------



// --------------- FUNCTIONS -------------------------

function services(arr) {
    for (let i = 0; i < arr.length; i++) {
        midContainer.innerHTML += `<button class='services'>${arr[i]}</button>`
    }
    midContainer.innerHTML += `<p><span>TASK</span> <span>TOTAL</span></p>`
}

services(servicesArr)

//-----------------------------------------------------------
const serviceBtns = document.querySelectorAll('.services')

for (let i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].addEventListener('click', function() {
        midContainer.innerHTML += serviceBtns[i].textContent;
    })
}


