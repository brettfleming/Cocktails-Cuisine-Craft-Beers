// // HEAD


// //  c5ea794c75093490681135754b8328eac96167e2

const searchbutton = document.getElementById("drinksBtn");
const restBtn = document.getElementById("restBtn");

// // var searchFormEl = document.querySelector('#search-card');

// function buildLiquorResults() {
//   // To prevent multiple/repeated results popping up for cocktails
//   removeElementChildren(boozeResults);

//   var searchInputVal = document.getElementById('#search1').value;

  
//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './results.html?q=' + searchInputVal;

//   location.assign(queryString);
//   // To build results

//   displayResults();
// }

// function buildRestResults() {
//   // To prevent multiple/repeated results popping up for restaurants
//   removeElementChildren(restList);

//   var searchInputVal = document.getElementById('#search2').value;


//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './results.html?q=' + searchInputVal;

//   location.assign(queryString);

//   // To build results
//   displayResults2();
// }


// searchbutton.addEventListener("click", buildLiquorResults);
// restBtn.addEventListener("click", buildRestResults);

function handleSearch(event) {
  event.preventDefault();
  
  var searchInputVal1 = document.querySelector('#search1').value;
  var searchInputVal2 = document.querySelector('#search2').value;
}