const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card")
const searchbutton = document.getElementById("searchbutton")
const searchinputdrink = document.getElementById("search_inputdrink");
let boozeResults = document.getElementById("booze-results");

var inputdrink = 'margarita'
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
            let drinks = data["drinks"];
            drinks.forEach( drink => {
                console.log(drink)
                let divTag = document.createElement('div');
                let h2Tag = document.createElement("h2");
                divTag.classList.add('card');
                h2Tag.classList.add('card-header')
                h2Tag.textContent = drink.strDrink;
                boozeResults.append(divTag);
                divTag.append(h2Tag);
            })


        })
 };

    console.log("fetching...")
function displayResults2() {
    let zipcode = '';
        fetch("https://api.documenu.com/v2/restaurants/zip_code/" + zipcode + "?key=cd34a125c29432346ba6f73259e01e32")
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