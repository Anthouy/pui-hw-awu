console.log("Check1");

let select = document.getElementById("glazing")

let allCinnamon = [
    {
        'Keep original': '0.00',
        'Sugar milk': '0.00',
        'Vanilla milk': '0.50',
        'Double chocolate': '1.50',
    }
]

let element = document.getElementById("glazing");
for(index in allCimnamon) {
    select.options[select.options.length] = new Option(allCinnamon[index], index);
}