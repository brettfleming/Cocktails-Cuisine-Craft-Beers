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
    currSearchResults(apiUrl);
}

function removeElementChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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

            console.log(data)
            // function ingredients() {
                console.log(drinks[0]["strIngredient1"]);
            //     var ingArray = data[drinks.strIngredient1, data.drinks.strIngredient2, data.drinks.strIngredient3, data.drinks.strIngredient4, data.drinks.strIngredient5, data.drinks.strIngredient6, data.drinks.strIngredient7, data.drinks.strIngredient8, data.drinks.strIngredient9, data.drinks.strIngredient10, data.drinks.strIngredient11, data.drinks.strIngredient12, data.drinks.strIngredient13, data.drinks.strIngredient14, data.drinks.strIngredient15];
            //     // data.ingArray.length[0]
            //     // console.log(data.ingArray.length);
            //     console.log(ingArray)
                
    // }; 
          
    
            drinks.forEach( drink => {
                // console.log(drink.strIngredient1)
                let divTag = document.createElement('div');
                let h2Tag = document.createElement("h2");
                let ulTag = document.createElement("ul");
                let liTag = document.createElement("li");
                let liTag2 = document.createElement("li");
                let liTag3 = document.createElement("li");
                let liTag4 = document.createElement("li");
                divTag.classList.add('card,col-2');
                h2Tag.classList.add('card-header');
                h2Tag.textContent = drink.strDrink;
                liTag.textContent = drink.strIngredient1 + " " + drink.strMeasure1;
                liTag2.textContent = drink.strIngredient2 + " " + drink.strMeasure2;
                liTag3.textContent = drink.strIngredient3 + " " + drink.strMeasure3;
                liTag4.textContent = drink.strIngredient4 + " " + drink.strMeasure4;
                ulTag.append(liTag);
                ulTag.append(liTag2);
                ulTag.append(liTag3);
                ulTag.append(liTag4);
                boozeResults.append(divTag);
                divTag.append(h2Tag);
                divTag.append(ulTag);
                
                

            })
           
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
                    // return console.log(response);
                }
                return response.json();
            })
            .then(function (data) {
                var restaurants = data["data"];
                console.log(data);
                console.log(data.data[0].restaurant_name)
                restaurants.forEach(restaurant =>{
                    console.log(restaurant);
                    let liTag = document.createElement("li");
                    liTag.textContent = restaurant.restaurant_name + ": " + restaurant.restaurant_phone;
                    restList.append(liTag);


                })




            })
};
// displayResults();
// displayResults2();

// function int(event){
//     displayResults();
//     displayResults2();
// }


function buildLiquorResults() {
    // To prevent multiple/repeated results popping up for cocktails
    removeElementChildren(boozeResults);
    // To build results
    displayResults();
}

function buildRestResults() {
    // To prevent multiple/repeated results popping up for restaurants
    removeElementChildren(restList);
    // To build results
    displayResults2();
}

searchbutton.addEventListener("click", buildLiquorResults);
restBtn.addEventListener("click", buildRestResults);




