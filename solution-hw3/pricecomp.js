console.log("Check1");

let allCinnamon =
    {
        ValueA: 'Keep original',
        ValueB: 'Sugar milk',
        ValueC: 'Vanilla milk',
        ValueD: 'Double chocolate',
    };

let select = document.getElementById("glazing")
for(index in allCinnamon) {
    select.options[select.options.length] = new Option(allCinnamon[index], index);
}