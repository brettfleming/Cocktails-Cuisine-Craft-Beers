const resultContainer = document.getElementById("result_container");
const resultCard = document.getElementById("result_card")
const searchbutton = document.getElementById("searchbutton")
const searchinput = document.getElementById("search_input");


function displayResults() {

    fetch()
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
              }
              return response.json();
        })
    .then(function(data) {

        console.log(data);
        
    })
} 

displayResults();



searchbutton.addEventListener("submit", displayResults);