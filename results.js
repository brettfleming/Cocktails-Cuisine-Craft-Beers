const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card")
const searchbutton = document.getElementById("searchbutton")
const searchinput = document.getElementById("search_input");
var input = 'margarita'
var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input;
function displayResults() {


    fetch(apiUrl)
        .then(function(response) {

    console.log("fetching...")
    fetch("https://api.documenu.com/v2/restaurant/4072702673999819?key=cd34a125c29432346ba6f73259e01e32")
        .then(function (response) {
 main
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {

            console.log(data);

        })
}

displayResults();



// searchbutton.addEventListener("submit", displayResults);