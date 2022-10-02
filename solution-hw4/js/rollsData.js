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

let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

function testing() {
    console.log(queryString)
    console.log(params)
    console.log(rollType)
    console.log(rolls[1].basePrice)
}

function updateDetail() {
    let detailTitle = document.querySelector(".subtext").innerHTML = rollType + " Cinnamon Roll"
    console.log("Detail Title Update")
    let detailImage = document.querySelector(".cinnamondetail").src = "assets/products/" + rollType + "-cinnamon-roll.jpg";
    console.log("Detail Image Update")
}