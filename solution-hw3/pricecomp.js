console.log("Check1");

let select = document.getElementById("glazing")

let allCinnamon = [
    "Keep original",
    "Sugar milk",
    "Vanilla milk",
    "Double chocolate"
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