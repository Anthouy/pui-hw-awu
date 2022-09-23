console.log("Check1");

let allCinnamon = [];
allCinnamon[0] = {priceadapt: 0, glazetype: 'Keep original'};
allCinnamon[1] = {priceadapt: 0, glazetype: 'Sugar milk'};
allCinnamon[2] = {priceadapt: 0.50, glazetype: 'Vanilla milk'};
allCinnamon[3] = {priceadapt: 1.50, glazetype: 'Double chocolate'};

let selectGlaze = document.getElementById("glazing")
for(index in allCinnamon) {
    selectGlaze.options[selectGlaze.options.length] = new Option(allCinnamon[index].glazetype);
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