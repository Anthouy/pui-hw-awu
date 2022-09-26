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
let glazing = 0;
let amount = 1;
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
        }
        else if (x == allCinnamon[3].glazetype) {
            glazing = allCinnamon[3].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
        }
        else if (x == allCinnamon[1].glazetype) {
            glazing = allCinnamon[1].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
        }
        else {
            glazing = allCinnamon[0].priceadd
            console.log(glazing)
            console.log(x)
            document.getElementById("glazing").addEventListener("change", calculatePrice);
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
        }
        else if (x == allSize[2].cinnCount) {
            amount = allSize[2].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
        }
        else if (x == allSize[3].cinnCount) {
            amount = allSize[3].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
        }
        else {
            amount = allSize[0].priceMult
            console.log(amount)
            console.log(x)
            document.getElementById("packsize").addEventListener("change", calculatePrice);
        }
}

// Calculation function.
function calculatePrice() {
    x = 2.49 + glazing;
    y = x * amount;
    document.getElementById("totalcost").innerHTML = "$" + y.toFixed(2);
    console.log(y)
}