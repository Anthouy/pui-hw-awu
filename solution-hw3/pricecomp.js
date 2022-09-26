console.log("Check1");

let allCinnamon = [];
allCinnamon[0] = {priceadd: 0, glazetype: 'Keep original'};
allCinnamon[1] = {priceadd: 0, glazetype: 'Sugar milk'};
allCinnamon[2] = {priceadd: 0.50, glazetype: 'Vanilla milk'};
allCinnamon[3] = {priceadd: 1.50, glazetype: 'Double chocolate'};

let selectGlaze = document.getElementById("glazing")
for(index in allCinnamon) {
    selectGlaze.options[selectGlaze.options.length] = new Option(allCinnamon[index].glazetype);
}

let allSize = [];
allSize[0] = {priceMult: 1, cinnCount: '1'};
allSize[1] = {priceMult: 3, cinnCount: '3'};
allSize[2] = {priceMult: 5, cinnCount: '6'};
allSize[3] = {priceMult: 10, cinnCount: '12'};

let selectSize = document.getElementById("packsize")
for(index in allSize) {
    selectSize.options[selectSize.options.length] = new Option(allSize[index].cinnCount);
    console.log("Populating Menus")
}

let glazing = 0;
let amount = 0;

function glazingChange() {
    let x = document.getElementById("glazing").value;
        if (x == allCinnamon[2].glazetype) {
            glazing = allCinnamon[2].priceadd
            console.log(glazing)
            console.log(x)
        }
    document.getElementById("totalcost").innerHTML = x;
}

function packChange() {
    let x = document.getElementById("packsize").value;
    document.getElementById("totalcost").innerHTML = x;
}

function calculatePrice() {
    x = (2.49 + glazing) * amount;
    return x, glazing, amount;
}

function testingarrayaccess() {
    return allCinnamon[2].priceadd
}