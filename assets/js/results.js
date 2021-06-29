const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card");
const searchbutton = document.getElementById("drinksBtn");
const searchinputdrink = document.getElementById("booze-input");
let boozeResults = document.getElementById("booze-results");
const restInput = document.getElementById("rest-input");
const restBtn = document.getElementById("restBtn");
const restList = document.getElementById("rest-list");
const brewInput = document.getElementById("brew-input");
const brewBtn = document.getElementById('brewBtn');
const brewList = document.getElementById('brew-list');
const pastDrinks = document.getElementById('past-drink');
const pastRest =document.getElementById('past-rest');
const pastBrew =document.getElementById('past-brew');
const clearRest = document.getElementById("restClear");
const clearDrink = document.getElementById("clearDrink");
const clearBrew = document.getElementById("clearBrew");
// var inputdrink = 'margarita'

let drinkArray = [];
let restArray = [];
let brewArray = [];


// var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input;
// var api = "https://api.documenu.com/v2/restaurant/4072702673999819?key=cd34a125c29432346ba6f73259e01e32";
function displayResults() {
    var inputdrink = searchinputdrink.value || pastDrinkBtn.textContent;
    // drinkArray.push(inputdrink)
    // localStorage.setItem("pastdrink", JSON.stringify(drinkArray));
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputdrink;
    currSearchResults(apiUrl, inputdrink);
}
function drinkPastList() {
    drinkArray = JSON.parse(localStorage.getItem('pastdrink')) || [];
    // console.log(drinksArray)
    drinkArray.forEach(drinks => {
        console.log(drinks)
        let button = document.createElement('button');
        button.classList.add("pastDrinkBtn");
        console.log(button);
        button.textContent = drinks
        pastDrinks.append(button);
        
    });
    restArray = JSON.parse(localStorage.getItem('pastrest')) || [];
    // console.log(drinksArray)
    restArray.forEach(rest => {
        console.log(rest)
        let button = document.createElement('button');
        button.classList.add("pastRestBtn");
        console.log(button);
        button.textContent = rest
        pastRest.append(button);
        
    });
    brewArray = JSON.parse(localStorage.getItem('pastbrew')) || [];
    // console.log(drinksArray)
    brewArray.forEach(brew => {
        console.log(brew)
        let button = document.createElement('button');
        button.classList.add("pastBrewBtn");
        console.log(button);
        button.textContent = brew
        pastBrew.append(button);
        
    });
    
}

drinkPastList();
// Function to prevent repeated searches from appearing when clicking button multiple times
function removeElementChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function currSearchResults(apiUrl, inputdrink) {
    let i = 0;

    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            let drinks = data["drinks"];
            if (!drinks) {
                let modaltext =document.getElementById("modalText")
                modaltext.textContent = "No drinks found please try again!"
                $("#myModal").modal("show");
            }
            else {
                if (inputdrink = searchinputdrink.value) {
                drinkArray.push(inputdrink)
                localStorage.setItem("pastdrink", JSON.stringify(drinkArray));
                }
            

            drinks.forEach( drink => {
                i++
                if (i < 6) {
                let divTag = document.createElement('div');
                let h2Tag = document.createElement("h2");
                let ulTag = document.createElement("ul");
                divTag.classList.add('card,col-2');
                h2Tag.classList.add('card-header');
                h2Tag.textContent = drink.strDrink;
                if (drink.strIngredient1) {
                    let liTag = document.createElement("li");
                    liTag.textContent = drink.strIngredient1;
                    if (drink.strMeasure1) {
                        liTag.textContent = drink.strIngredient1 + " " + drink.strMeasure1;
                    }
                    ulTag.append(liTag);
                }
                if (drink.strIngredient2) {
                    let liTag2 = document.createElement("li");
                    liTag2.textContent = drink.strIngredient2;
                    if (drink.strMeasure2) {
                        liTag2.textContent = drink.strIngredient2 + " " + drink.strMeasure2;
                    }
                    ulTag.append(liTag2);
                }
                if (drink.strIngredient3) {
                    let liTag3 = document.createElement("li");
                    liTag3.textContent = drink.strIngredient3;
                    if (drink.strMeasure3) {
                        liTag3.textContent = drink.strIngredient3 + " " + drink.strMeasure3;
                    }
                    ulTag.append(liTag3);
                }
                if (drink.strIngredient4) {
                    let liTag4 = document.createElement("li");
                    liTag4.textContent = drink.strIngredient4;
                    if (drink.strMeasure4) {
                        liTag4.textContent = drink.strIngredient4 + " " + drink.strMeasure4;
                    }
                    ulTag.append(liTag4);
                }
                boozeResults.append(divTag);
                divTag.append(h2Tag);
                divTag.append(ulTag);
                ulTag.classList.add("cocktail-list")
            }

            })
        }
        })
    };
    
    
    console.log("fetching...")
function displayResults2() {
    let i = 0;
    let zipcode = '';
    zipcode = restInput.value || pastRestBtn.textContent;
        fetch("https://api.documenu.com/v2/restaurants/zip_code/" + zipcode + "?key=cd34a125c29432346ba6f73259e01e32")
            .then(function(response) {
                if (!response.ok) {
                    // return console.log(response);
                }
                return response.json();
            })
            .then(function (data) {
                
                var restaurants = data["data"];
                if (restaurants.length === 0) {
                    let modaltext =document.getElementById("modalText")
                    modaltext.textContent = "No restaurants found in your area please try another Zip Code!"
                    $("#myModal").modal("show");
                    
                } else {
                    if (zipcode = restInput.value) {
                    restArray.push(zipcode)
                    localStorage.setItem("pastrest", JSON.stringify(restArray));
                    }
                // console.log(data);
                    restaurants.forEach(restaurant =>{
                        i++
                        if (i <= 11) {
                        
                        // console.log(restaurant);
                        let liTag = document.createElement("li");
                        let aTag = document.createElement("a");
                        liTag.classList.add('list-style')
                        aTag.setAttribute('href', restaurant.restaurant_website);
                        aTag.setAttribute('target', '_blank');
                        aTag.textContent =  " " + restaurant.restaurant_website;
                        liTag.textContent = restaurant.restaurant_name + ": " + restaurant.restaurant_phone;
                        liTag.append(aTag);
                        restList.append(liTag);

                    }
                })
            }

            })
};
function displayResults3() {
    let zipcode = '';
    zipcode = brewInput.value || pastBrewBtn.textContent;
        fetch("https://api.openbrewerydb.org/breweries?by_postal=" + zipcode)
            .then(function(response) {
                if (!response.ok) {
                    // return console.log(response);
                }
                return response.json();
            })
            .then(function (data) {
                var breweries = data;
                console.log(data);
                // console.log(data[0].name)
                if (breweries.length === 0) {
                    let modaltext =document.getElementById("modalText")
                    modaltext.textContent = "No breweries found in your area please try another Zip Code!"
                    $("#myModal").modal("show");
                } else {
                    if (zipcode = brewInput.value) {
                    brewArray.push(zipcode)
                    localStorage.setItem("pastbrew", JSON.stringify(brewArray));
                    }
                breweries.forEach(brew =>{
                    let liTag = document.createElement("li");
                    liTag.textContent = brew.name;
                    liTag.classList.add('list-style')
                    if (brew.phone) {
                        liTag.textContent = brew.name + ": " + brew.phone;
                        if (brew.website_url) {
                            let aTag = document.createElement("a");
                            aTag.setAttribute('href', brew.website_url);
                            aTag.setAttribute('target', '_blank');
                            aTag.textContent = " " + brew.website_url;
                            liTag.append(aTag)
                        }
                    }
                    brewList.append(liTag);
                    
                })}

            })
};

const pastDrinkBtn = document.querySelector('.pastDrinkBtn');
const pastRestBtn = document.querySelector('.pastRestBtn');
const pastBrewBtn = document.querySelector('.pastBrewBtn');

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

function buildBrewResults() {
    // To prevent multiple/repeated results popping up for breweries
    removeElementChildren(brewList);
    // To build results
    displayResults3();
}
function clearListDrink() {
    localStorage.removeItem("pastdrink");
    location.reload();
}
function clearListRest() {
    localStorage.removeItem("pastrest");
    location.reload();
}
function clearListBrew() {
    localStorage.removeItem("pastbrew");
    location.reload();
}



clearDrink.addEventListener("click", clearListDrink);
clearRest.addEventListener("click", clearListRest);
clearBrew.addEventListener("click", clearListBrew);

searchbutton.addEventListener("click", buildLiquorResults);
restBtn.addEventListener("click", buildRestResults);
brewBtn.addEventListener("click", buildBrewResults);
pastDrinkBtn.addEventListener("click", displayResults);
pastRestBtn.addEventListener("click", displayResults2);
pastBrewBtn.addEventListener("click", displayResults3);




