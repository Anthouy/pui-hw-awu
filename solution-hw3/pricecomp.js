console.log("Check1");

let allCinnamon = [];
allCinnamon[0] = 0, 'Keep original';
allCinnamon[1] = 0, 'Sugar milk';
allCinnamon[2] = 0.50, 'Vanilla milk';
allCinnamon[3] = 1.50, 'Double chocolate';

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