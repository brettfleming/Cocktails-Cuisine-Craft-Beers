const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card");
const searchbutton = document.getElementById("drinksBtn");
const searchinputdrink = document.getElementById("booze-input");
let boozeResults = document.getElementById("booze-results");
const restInput = document.getElementById("rest-input");
const restBtn = document.getElementById("restBtn")
const restList = document.getElementById("rest-list")
// var inputdrink = 'margarita'
// var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input;
// var api = "https://api.documenu.com/v2/restaurant/4072702673999819?key=cd34a125c29432346ba6f73259e01e32";
function displayResults() {
    var inputdrink = searchinputdrink.value;
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputdrink;
        console.log(apiUrl)
    currSearchResults(apiUrl);
}



function currSearchResults(apiUrl) {    
    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            let drinks = data["drinks"];
            // console.log(data)
            drinks.forEach( drink => {
                console.log(drink.strIngredient1)
                let divTag = document.createElement('div');
                let h2Tag = document.createElement("h2");
                divTag.classList.add('card,col-2');
                h2Tag.classList.add('card-header')
                h2Tag.textContent = drink.strDrink;
                boozeResults.append(divTag);
                divTag.append(h2Tag);
                

            })
            // function ingredients() {
            //     var ingArray = data.drinks["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11", "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15"];
            //     // data.ingArray.length[0]
            //     // console.log(data.ingArray.length);
            //     // console.log(ingArray.length)
                
    // }; 
    // ingredients();
        })
    };
    
    
    console.log("fetching...")
function displayResults2() {
    let zipcode = '';
    zipcode = restInput.value;
        fetch("https://api.documenu.com/v2/restaurants/zip_code/" + zipcode + "?key=cd34a125c29432346ba6f73259e01e32")
            .then(function(response) {
                if (!response.ok) {
                    return console.log(response);
                }
                return response.json();
            })
            .then(function (data) {
                var restaurants = data["data"];
                // console.log(data);
                console.log(data.data[0].restaurant_name)
                restaurants.forEach(restaurant =>{
                    console.log(restaurant);
                    let liTag = document.createElement("li");
                    liTag.textContent = restaurant.restaurant_name;
                    restList.append(liTag);


                })




            })
};
// displayResults();
// displayResults2();

function int(event){
    displayResults();
    displayResults2();
}



searchbutton.addEventListener("click", int);
restBtn.addEventListener("click", int);
