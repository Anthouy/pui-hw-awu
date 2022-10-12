import { Roll } from "./item.js";

const itemSet = new Set();

const itemListElement = document.querySelector('#item-list');

function addNewItem(rollType, rollGlazing, packSize, basePrice) {
    const item = new Roll(rollType, rollGlazing, packSize, basePrice, deleteExistingItem);
    itemListElement.prepend(item.element);
    itemSet.add(item);
}

function deleteExistingItem(item) {
    itemSet.delete(item);
    saveToLocalStorage();
}

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