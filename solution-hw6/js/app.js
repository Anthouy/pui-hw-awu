class Roll { 
    // creates a roll class
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType; 
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}

// creates an empty set to represent cart
const rollSet = new Set();
//so when page loads to another cinnamon roll, add previous local storage to set.
//Look at lab 6 code

console.log("rollsData Load Check");

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let allGlazing = [
    {
      glazing: 'Keep Original',
      price: 0.00,
    },
    {
      glazing: 'Sugar Milk',
      price: 0.00,
    },
    {
      glazing: 'Vanilla Milk',
      price: 0.50,
    },
    {
      glazing: 'Double Chocolate',
      price: 1.50,
    },
  ];

  let allPackSize = [
    {
      packSize: 1,
      priceAdaptation: 1,
    },
    {
      packSize: 3,
      priceAdaptation: 3,
    },
    {
      packSize: 6,
      priceAdaptation: 5,
    },
    {
      packSize: 12,
      priceAdaptation: 10,
    }
  ];

let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

function testing() {
    console.log(queryString)
    console.log(params)
    console.log(rollType)
    let baserollsprice = rolls[rollType].basePrice
    console.log(baserollsprice)
    console.log(packSize)
    console.log(rollGlazing)
    let rollimg = rolls[rollType].imageFile
    console.log(rollimg)
}

function updateDetail() {
    let detailTitle = document.querySelector(".subtext").innerHTML = rollType + " Cinnamon Roll"
    console.log("Detail Title Update")
    let detailImage = document.querySelector(".cinnamondetail").src = "assets/products/" + rollimg;
    console.log("Detail Image Update")
    let detailPrice = document.querySelector("#totalcost").innerHTML = "$" + baserollsprice
    console.log("Detail Price Update")
}

console.log("Load Check");

// Array of cinnamon glazing options and price adjustments.
let allCinnamon = [];
allCinnamon[0] = {priceadd: 0, glazetype: 'Keep original'};
allCinnamon[1] = {priceadd: 0, glazetype: 'Sugar milk'};
allCinnamon[2] = {priceadd: 0.50, glazetype: 'Vanilla milk'};
allCinnamon[3] = {priceadd: 1.50, glazetype: 'Double chocolate'};

// Loop to populate glazing menu.
let selectGlaze = document.getElementById("glazing")
for(index in allCinnamon) {
    selectGlaze.options[selectGlaze.options.length] = new Option(allCinnamon[index].glazetype);
    console.log("Populating Glazing Menu");
}

// Array of pack size options and price adjustments.
let allSize = [];
allSize[0] = {priceMult: 1, cinnCount: '1'};
allSize[1] = {priceMult: 3, cinnCount: '3'};
allSize[2] = {priceMult: 5, cinnCount: '6'};
allSize[3] = {priceMult: 10, cinnCount: '12'};

// Loop to populate pack size menu.
let selectSize = document.getElementById("packsize")
for(index in allSize) {
    selectSize.options[selectSize.options.length] = new Option(allSize[index].cinnCount);
    console.log("Populating Pack Size Menu")
}

// Initial global variables for price calculation.
let rollGlazing = "";
let packSize = "";
let glazing = 0;
let amount = 1;
let baserollsprice = rolls[rollType].basePrice;
let basePrice = rolls[rollType].basePrice;
let rollimg = rolls[rollType].imageFile
document.getElementById("glazing").addEventListener("change", calculatePrice);
document.getElementById("packsize").addEventListener("change", calculatePrice);
console.log("Initialize Final Price on Next Click");

// Function for detecting change.
function glazingChange() {
    let x = document.getElementById("glazing").value;
        if (x == allCinnamon[2].glazetype) {
            glazing = allCinnamon[2].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
            rollGlazing = x
        }
        else if (x == allCinnamon[3].glazetype) {
            glazing = allCinnamon[3].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
            rollGlazing = x
        }
        else if (x == allCinnamon[1].glazetype) {
            glazing = allCinnamon[1].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
            rollGlazing = x
        }
        else {
            glazing = allCinnamon[0].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
            rollGlazing = x
        }
}

// Function for detecting change.
function packChange() {
    let x = document.getElementById("packsize").value;
        if (x == allSize[1].cinnCount) {
            amount = allSize[1].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
            packSize = x
        }
        else if (x == allSize[2].cinnCount) {
            amount = allSize[2].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
            packSize = x
        }
        else if (x == allSize[3].cinnCount) {
            amount = allSize[3].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
            packSize = x
        }
        else {
            amount = allSize[0].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
            packSize = x
        }
}

// Calculation function.
function calculatePrice() {
    x = baserollsprice + glazing;
    y = x * amount;
    document.getElementById("totalcost").innerHTML = "$" + y.toFixed(2);
    console.log(y)
}

function addtoCart() {
    let cinnamonRoll = new Roll(rollType, rollGlazing, packSize, baserollsprice)
    cart.push(cinnamonRoll)
    console.log(cinnamonRoll)
}

//Item App Below...

// creates new roll objects and adds it to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}

// takes cart html and duplicates the template
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cartcontent');
    
    // taken and modified from lab 5
    const btnDelete = roll.element.querySelector('.cartlefttext');
    btnDelete.addEventListener('click', () => {
        deleteElement(roll);
      });

    // add roll clone to the dom
    const rollListElement = document.querySelector('#roll-list');
    rollListElement.append(roll.element);

    // populate roll clone with cart content
    updateElement(roll);
    console.log("createElement");
}

function updateElement(roll) {
    // gets the cart html that needs to be updated
    const rollImageElement = roll.element.querySelector(".cartpic"); 
    const rollTypeElement = roll.element.querySelector(".cinnamon-roll"); 
    const rollGlazingElement = roll.element.querySelector(".glazing-option"); 
    const rollPackElement = roll.element.querySelector(".pack-size"); 
    const rollPriceElement = roll.element.querySelector(".rightmargin");

    const calcPrice = rcalculatePrice(roll);

    // duplicates the cart content to the corresponding html elements
    rollImageElement.src = 'assets/products/' + rolls[roll.type].imageFile; 
    rollTypeElement.innerText = roll.type + ' Cinnamon Roll'; 
    rollGlazingElement.innerText = 'Glazing: ' + roll.glazing; 
    rollPackElement.innerText = 'Pack Size: ' + roll.size; 
    rollPriceElement.innerText = roll.basePrice;
    console.log(rollImageElement.src)
    console.log(roll)
}

// calculates total price of each roll selection with glaze + pack size modifications
function rcalculatePrice(roll) {
    // iterates through allGlazing to find if same glaze as roll's
    // sets the glazingChange to the price difference
    let glazingChange = 0;
    for(const glazing of allGlazing) {
        if(glazing.packSize == roll.glazing) {
            glazingChange = glazing.price;
        }
    }

    let packChange = 0;
    for(const pack of allPackSize) {
        if(pack.packSize == roll.size) {
            packChange = pack.priceAdaptation;
        }
    }

    // calculates price based up glaze + pack size changes
    let calculatedPrice = (parseInt(roll.basePrice.replace('$', '')) + glazingChange) * packChange;

    //parseInt(roll.basePrice.replace('$', ''), 10)

    //roll.basePrice

    return calculatedPrice.toFixed(2);
}

// deletes roll dom object and removes it from set
function deleteElement(roll) {
    roll.element.remove();
    rollSet.delete(roll);
    cartTotalPrice();
    saveToLocalStorage();
    console.log("Roll Deleted");
}

// creates four roll objects and add them to rollSet
// const rollOne = addNewRoll( "Original", "Sugar Milk", 1, 2.49);
// const rollTwo = addNewRoll( "Walnut", "Vanilla Milk", 12, 3.99);
// const rollThree = addNewRoll( "Raisin", "Sugar Milk", 3, 2.99);
// const rollFour = addNewRoll( "Apple", "Original", 3, 3.49);

// adds individual roll to list of rolls
// for (const roll of rollSet) { 
//     createElement(roll);
// }

// calculates the total checkout price
function cartTotalPrice() {
    let totalPrice = document.querySelector('.carttotal:nth-child(2)');
    let price = 0;

    for(const roll of rollSet) {
        price = price + parseFloat(rcalculatePrice(roll));
    }

    totalPrice.innerText = "$ " + price.toFixed(2);
}

// calls to calculate price
cartTotalPrice();

function submitRoll() {
  const cinnamonTitle = document.querySelector('.subtext').innerHTML.replace(' Cinnamon Roll','');
  const cinnamonGlaze = rollGlazing;
  const cinnamonPack = packSize;
  const cinnamonPrice = document.querySelector('#totalcost').innerHTML;

  const roll = addNewRoll(cinnamonTitle, cinnamonGlaze, cinnamonPack, cinnamonPrice);

  saveToLocalStorage();

  console.log(cinnamonTitle)
  console.log(cinnamonGlaze)
  console.log(cinnamonPack)
  console.log(cinnamonPrice)

  console.log("Roll Added To Cart!")
}

function saveToLocalStorage() {
  rollArray = Array.from(rollSet);
  console.log(rollArray);

  const rollArrayString = JSON.stringify(rollArray);
  console.log(rollArrayString);

  localStorage.setItem('storedRolls', rollArrayString);
  console.log("Save To Local Storage");
}

function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem('storedRolls');
  const rollArray = JSON.parse(rollArrayString);
  console.log(rollArray)
  rollArray.forEach(element => {
    console.log(element);
    const roll = addNewRoll(element['type'], element['glazing'], element['size'], element['basePrice']);
    createElement(roll);
  })
  console.log(rollSet)
}

function retrievePreviousLocalStorage() {
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    console.log(rollArray)
    rollArray.forEach(element => {
        console.log(element);
        const roll = addNewRoll(element['type'], element['glazing'], element['size'], element['basePrice']);
      })
    console.log(rollSet)
}

if (localStorage.getItem('storedRolls') != null) {
  retrieveFromLocalStorage();
}