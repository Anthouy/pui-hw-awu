console.log("Check1");

let allCinnamon =
    {
        ValueA: 'Keep original',
        ValueB: 'Sugar milk',
        ValueC: 'Vanilla milk',
        ValueD: 'Double chocolate',
    };

let selectGlaze = document.getElementById("glazing")
for(index in allCinnamon) {
    selectGlaze.options[selectGlaze.options.length] = new Option(allCinnamon[index], index);
}

let allSize =
    {
        1: '1',
        3: '3',
        5: '6',
        10: '12',
    };

let selectSize = document.getElementById("packsize")
for(index in allSize) {
    selectSize.options[selectSize.options.length] = new Option(allSize[index], index);
}

function glazingChange(element) {

}