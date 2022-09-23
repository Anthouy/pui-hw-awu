console.log("Check1");

let allCinnamon = [
    {
        glazing: 'Keep original',
        price: '2.49',
    },
    {
        glazing: 'Sugar Milk',
        price: '2.49',
    },
    {
        glazing: 'Vanilla milk',
        price: '2.99',
    },
    {
        glazing: 'Double Chocolate',
        price: '3.99',
    },
];

let allSize = [
    {
        glazing: '1',
        price: '1',
    },
    {
        glazing: '3',
        price: '3',
    },
    {
        glazing: '6',
        price: '5',
    },
    {
        glazing: '12',
        price: '10',
    },
];

function displayCinnamon(cinnamon) {
    console.log("Running update")
    let cinnamonGlazingElement = document.querySelector('.cinnamonpricebold');
    let cinnamonPriceElement = document.querySelector('.cinnamonpricebold');

    cinnamonGlazingElement.innerText = cinnamon.glazing;
    cinnamonPriceElement.innetText = cinnamon.price;
}

function onSelectValueChange() {
    console.log('You selected' + this.value);

    let cinnamonIndex = parseInt(this.value);

    let cinnamonToDisplay = allCinnamon[cinnamonIndex];

    displayCinnamon(cinnamonToDisplay);
}

let selectElement = document.querySelector('#glazing')

selectElement.addEventListener('change', onSelectValueChange);

displayCinnamon(allCinnamon[0]);