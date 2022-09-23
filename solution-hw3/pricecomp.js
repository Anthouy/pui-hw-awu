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

for (var key in fruits) {
    var fruit = fruits[key];
    _select.options[_select.options.length] = new Option(fruit.Description, fruit.id);
  }
  
  document.body.appendChild(_select);


  var fruits =
{
  "1": {
        "id": 1,
        "Description": "Apple",
        "groupID": 0
       },
  "2": {
        "id": 2,
        "Description": "Peach",
        "groupID": 0
       }
};
var _select = document.createElement("select");
for (var key in fruits) {
  var fruit = fruits[key];
  _select.options[_select.options.length] = new Option(fruit.Description, fruit.id);
}

document.body.appendChild(_select);