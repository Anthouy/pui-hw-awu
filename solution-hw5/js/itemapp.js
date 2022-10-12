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

class Roll { 
    // creates a roll class
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType; 
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice.toFixed(2);

        this.element = null;
    }
}

// creates an empty set to represent cart
const rollSet = new Set();

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
}

function updateElement(roll) {
    // gets the cart html that needs to be updated
    const rollImageElement = roll.element.querySelector(".cartpic"); 
    const rollTypeElement = roll.element.querySelector(".cinnamon-roll"); 
    const rollGlazingElement = roll.element.querySelector(".glazing-option"); 
    const rollPackElement = roll.element.querySelector(".pack-size"); 
    const rollPriceElement = roll.element.querySelector(".rightmargin");

    const calcPrice = calculatePrice(roll);

    // duplicates the cart content to the corresponding html elements
    rollImageElement.src = 'assets/products/' + rolls[roll.type].imageFile; 
    rollTypeElement.innerText = roll.type + ' Cinnamon Roll'; 
    rollGlazingElement.innerText = 'Glazing: ' + roll.glazing; 
    rollPackElement.innerText = 'Pack Size: ' + roll.size; 
    rollPriceElement.innerText = '$ ' + calcPrice;
    console.log(rollImageElement.src)
}

// calculates total price of each roll selection with glaze + pack size modifications
function calculatePrice(roll) {
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
    let calculatedPrice = (roll.basePrice + glazingChange) * packChange;

    return calculatedPrice.toFixed(2);
}

// deletes roll dom object and removes it from set
function deleteElement(roll) {
    roll.element.remove();
    rollSet.delete(roll);
    cartTotalPrice();
}

// creates four roll objects and add them to rollSet
const rollOne = addNewRoll( "Original", "Sugar Milk", 1, 2.49);
const rollTwo = addNewRoll( "Walnut", "Vanilla Milk", 12, 3.99);
const rollThree = addNewRoll( "Raisin", "Sugar Milk", 3, 2.99);
const rollFour = addNewRoll( "Apple", "Original", 3, 3.49);

// adds individual roll to list of rolls
for (const roll of rollSet) { 
    createElement(roll);
}

// calculates the total checkout price
function cartTotalPrice() {
    let totalPrice = document.querySelector('.carttotal:nth-child(2)');
    let price = 0;

    for(const roll of rollSet) {
        price = price + parseFloat(calculatePrice(roll));
    }

    totalPrice.innerText = "$ " + price.toFixed(2);
}

// calls to calculate price
cartTotalPrice();

// const itemSet = new Set();

// function addNewItem(rollType, rollGlazing, packSize, basePrice) {
//     const item = new Roll(rollType, rollGlazing, packSize, basePrice);
//     itemSet.add(item);
// }

// function createItem(item) {
//     const template = document.querySelector('#item-template')
//     const clone = template.content.cloneNode(true);

//     item.element = clone.querySelector('.topsection')

//     const btnDelete = roll.element.querySelector('.remove');
//     btnDelete.addEventListener('click', () => {
//         deleteElement(item);
//       });

//     const itemListElement = document.querySelector('#item-list');
//     itemListElement.append(item.element);

//     updateElement(item);
// }

// updateItem(item) {
//     const itemImageElement = this.element.querySelector('.cinnamoncart');
//     const itemTypeElement = this.element.querySelector('.cartdescriptionsmall');
//     const itemPrice = this.element.querySelector('.cartdescription');

//     itemImageElement.src = this.itemImageURL;
//     itemDescription.innerText = this.itemDescription;
//     itemPrice.innerText = this.basePrice;
// }
// deleteItem() {
//     this.element.remove();
//     this.deleteFunction(this);
// }



// function deleteExistingItem(item) {
//     itemSet.delete(item);
//     saveToLocalStorage();
// }

// const itemOne = addNewItem(
//     "Original",
//     "Sugar milk",
//     "1",
//     "2.49"
// );


// const itemTwo = addNewItem(
//     "Walnut",
//     "Vanilla milk",
//     "12",
//     "39.90"
// );

// const itemThree = addNewItem(
//     "Raisin",
//     "Sugar milk",
//     "3",
//     "8.97"
// );

// const itemFour = addNewItem(
//     "Apple",
//     "Original",
//     "3",
//     "10.47"
// );

// for (const item of itemSet) {
//     console.log(item);
//     createItem(item);
// }