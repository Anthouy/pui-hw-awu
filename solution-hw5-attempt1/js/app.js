console.log("rollsData Load Check");

let calculatedprice = 0;

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

let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function createItem() {
    let x = 0
    popCart()
        for(index in cart) {
            let item = document.querySelector('#item-template');
            item.content.querySelector('.cinnamoncart').src = "assets/products/" + rolls[cart[x].type].imageFile
            item.content.querySelector('.cartdescriptionsmall').innerHTML = cart[x].type + ' Cinnamon Roll<br>Glazing: ' + cart[x].glazing + '<br>Pack Size: ' + cart[x].size + '<br>'
            item.content.querySelector('.itemprice').innerHTML = '<br>$ ' + cart[x].basePrice.toFixed(2)
            const template = document.querySelector('#item-template');
            const clone = template.content.cloneNode(true);
            document.querySelector('main').prepend(clone);
            console.log("Items Created");
            x++
        }
        y = cart[0].basePrice + cart[1].basePrice + cart[2].basePrice + cart[3].basePrice
        document.querySelector('.carttotal').innerHTML = '$ ' + y.toFixed(2)
        console.log(y.toFixed(2))
    }

function removeItem() {
    console.log('Remove')
    let child = document.querySelectorAll('.remove')
    if (child = document.querySelectorAll('.remove')[1]) {
        const element = document.querySelectorAll('#itemcard')[1];
        element.remove();
        cart.splice(0, 1)
        y = cart[0].basePrice + cart[1].basePrice + cart[2].basePrice + cart[3].basePrice
        document.querySelector('.carttotal').innerHTML = '$ ' + y.toFixed(2)
        console.log(y.toFixed(2))
    }
    else if (child = document.querySelectorAll('.remove')[2]) {
        const element = document.querySelectorAll('#itemcard')[2];
        element.remove();
        cart.splice(1, 1)
        y = cart[0].basePrice + cart[1].basePrice + cart[2].basePrice + cart[3].basePrice
        document.querySelector('.carttotal').innerHTML = '$ ' + y.toFixed(2)
        console.log(y.toFixed(2))
    }
    else if (child = document.querySelectorAll('.remove')[3]) {
        const element = document.querySelectorAll('#itemcard')[3];
        element.remove();
        cart.splice(2, 1)
        y = cart[0].basePrice + cart[1].basePrice + cart[2].basePrice + cart[3].basePrice
        document.querySelector('.carttotal').innerHTML = '$ ' + y.toFixed(2)
        console.log(y.toFixed(2))
    }
    else if (child = document.querySelectorAll('.remove')[4]) {
        const element = document.querySelectorAll('#itemcard')[4];
        element.remove();
        cart.splice(3, 1)
        y = cart[0].basePrice + cart[1].basePrice + cart[2].basePrice + cart[3].basePrice
        document.querySelector('.carttotal').innerHTML = '$ ' + y.toFixed(2)
        console.log(y.toFixed(2))
    }
    }
    

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

// Calculation function for detail.
function calculatePrice() {
    x = baserollsprice + glazing;
    y = x * amount;
    document.getElementById("totalcost").innerHTML = "$" + y.toFixed(2);
    console.log(y)
}

// Calculation function for cart.
function calculatecartPrice() {

}

function addtoCart() {
    let cinnamonRoll = new Roll(rollType, rollGlazing, packSize, baserollsprice)
    cart.push(cinnamonRoll)
    console.log(cinnamonRoll)
}

function popCart() {
    let cartitem1 = new Roll('Apple', 'Original', 3, 10.47)
    let cartitem2 = new Roll('Raisin', 'Sugar milk', 3, 8.97)
    let cartitem3 = new Roll('Walnut', 'Vanilla milk', 12, 39.90)
    let cartitem4 = new Roll('Original', 'Sugar milk', 1, 2.49)
    cart.push(cartitem1, cartitem2, cartitem3, cartitem4)
    console.log(cart)
}

// function popCart() {
//     let cartRolls = {
//     roll1 : {rollType: 'Original', rollGlazing: 'Sugar milk', packSize: '1', calculatedprice: 2.49},
//     roll2 : {rollType: 'Walnut', rollGlazing: 'Vanilla milk', packSize: '12', calculatedprice: 39.90},
//     roll3 : {rollType: 'Raisin', rollGlazing: 'Sugar milk', packSize: '3', calculatedprice: 8.97},
//     roll4 : {rollType: 'Apple', rollGlazing: 'Original', packSize: '3', calculatedprice: 10.47},
// }
//     cart.push(cartRolls)
//     console.log(cart)
// }