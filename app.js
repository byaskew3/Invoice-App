// --------- CACHING THE DOM ----------------

const midContainer = document.querySelector('.mid-container');
const innerContainer = document.querySelector('.inner-container');


// --------------- GLOBAL VARIABLES --------------

const servicesArr = [{
    service: 'Wash Car',
    cost: 10
}, {
    service: 'Mow Lawn',
    cost: 20
}, {
    service: 'Pull Weeds',
    cost: 30
}
]

let servicesAdded = false;
let serviceItems = [];


// ---------------- EVENT LISTENERS ---------------------



// --------------- FUNCTIONS -------------------------

function services(arr) {
    for (let i = 0; i < arr.length; i++) {
        midContainer.innerHTML += `<button class='services'>${arr[i].service}: $${arr[i].cost}</button>`
    }
    midContainer.innerHTML += `<p><span>TASK</span></p>`
}

services(servicesArr)

//-----------------------------------------------------------
const serviceBtns = document.querySelectorAll('.services')

for (let i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].addEventListener('click', function() {
        serviceItems.push(serviceBtns[i])
        console.log(serviceItems)
        const node = document.createElement('p');
        node.classList.add('added-service');
        const textNode = document.createTextNode(`${serviceBtns[i].textContent}`)
        
        const spanNode = document.createElement('span')
        spanNode.classList.add('remove')
        const spanText = document.createTextNode('Remove')
        
        
        spanNode.append(spanText)
        
        node.append(textNode, spanNode);
        
        midContainer.appendChild(node)
        
        if (serviceItems.length === 1) {
            servicesAdded = true;
            innerContainer.innerHTML += `<p class="total"><span class="payment-method">We accept cash, credit card, or Paypal</span>$0</p>`
        }
    })
}