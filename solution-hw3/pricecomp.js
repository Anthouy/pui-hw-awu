console.log("Check1");

let select = document.getElementById("glazing")

let allCinnamon =
    {
        ValueA: 'Keep original',
        ValueB: 'Sugar milk',
        ValueC: 'Vanilla milk',
        ValueD: 'Double chocolate',
    };

let element = document.getElementById("glazing");
for(index in allCimnamon) {
    select.options[select.options.length] = new Option(allCinnamon[index], index);
}