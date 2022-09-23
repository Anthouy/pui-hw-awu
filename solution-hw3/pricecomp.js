console.log("Check1");

let select = document.getElementById("glazing")

let allCinnamon = [
    {
        "1": {
                glazing: 'Keep original',
                priceadapt: '0.00',
            }
    },
    {
        "2": {
            glazing: 'Sugar milk',
            priceadapt: '0.00',
        }
    },
    {
        "3": {
            glazing: 'Vanilla milk',
            priceadapt: '0.50',
        }
    },
    {
        "4": {
            glazing: 'Double chocolate',
            priceadapt: '1.50',
        }
    },
]

var select = document.getElementById("glazing");
select.options[select.options.length] = new Option('Text 1', 'Value1');