console.log("Check1");

let allCinnamon =
    {
        0.00: 'Keep original',
        0.00: 'Sugar milk',
        0.50: 'Vanilla milk',
        1.50: 'Double chocolate',
    };

let select = document.getElementById("glazing")
for(index in allCinnamon) {
    select.options[select.options.length] = new Option(allCinnamon[index], index);
}