console.log("Check1");

let allCinnamon = [
    {
        glazing: 'Keep original',
        price: '+ $0.00',
    },
    {
        glazing: 'Sugar Milk',
        price: '+ $0.00',
    },
    {
        glazing: 'Vanilla milk',
        price: '+ $0.50',
    },
    {
        glazing: 'Double Chocolate',
        price: '+ $1.50',
    },
];

function glazingChange() {
    for (let i = 0; i < allCinnamon.length; i++) {
        let opt = allCinnamon[i];
        let el = document.createElement("allCinnamon");
        el.textContent = opt
        el.value = opt;
        select.appendChild(el);
    }

}