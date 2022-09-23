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
    for (let i = 0; i < PushSubscriptionOptions.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt
        el.value = opt;
        Selection.appendChild(el);
    }

}