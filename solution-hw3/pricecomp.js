console.log("Check1");

let allGlazing = [
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

function updateGlaze() {
    console.log("Running update")
    let cinnamonGlazingElement = document.querySelector('#cinnamonpricebold');

    cinnamonGlazingElement = cinnamon.glazing;
}

function onSelectValueChange() {
    console.log('You selected' + this.value);

    let cinnamonIndex = parseInt(this.value);

    let cinnamonToDisplay = allGlazing[cinnamonIndex];

    displayCinnamon(cinnamonToDisplay);
}

let selectElement = document.querySelector('#glazing')

selectElement.addEventListener('change', onSelectValueChange);

displayCinnamon(allGlazing[0]);