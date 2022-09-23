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
/**
 * 
 * @param cinnamon
 */


function displayCinnamon(cinnamon) {
    console.log("Running update")
    let cinnamonTitleElement = document.querySelector('');
    let cinnamonInfoElement = document.querySelector('#totalcost');

    cinnamonTitleElement.innerText = cinnamon.glazing;
    cinnamonInfoElement.innetText = cinnamon.price;
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