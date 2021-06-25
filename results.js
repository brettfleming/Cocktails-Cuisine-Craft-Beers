const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card")
const searchbutton = document.getElementById("searchbutton")
const searchinputdrink = document.getElementById("search_inputdrink");
let drinkName = document.getElementById('drinkName');
var inputdrink = 'vodka'
// var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input;
// var api = "https://api.documenu.com/v2/restaurant/4072702673999819?key=cd34a125c29432346ba6f73259e01e32";
function displayResults() {
    // inputdrink = search_inputdrink
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputdrink;


    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            data["drinks"].forEach(element => {
                drinkName.textContent = data['drinks']['strDrink']
            });

            console.log(data);
            console.log(drinkname);

        })
        };

    console.log("fetching...")
function displayResults2() {
        fetch("https://api.documenu.com/v2/restaurants/zip_code/11211?key=cd34a125c29432346ba6f73259e01e32")
            .then(function(response) {
                if (!response.ok) {
                    return console.log(response);
                }
                return response.json();
            })
            .then(function (data) {
    
                console.log(data);
    
            })
            };
displayResults();
displayResults2();





// searchbutton.addEventListener("submit", displayResults);