// READING LOCALSTORAGE
$(document).ready(function () {
  var history = JSON.parse(localStorage.getItem("history")) || [];
if (history.length > 0) {
  for (i=0;i<history.length;i++) {
  createCard(history[i])}
}
});



var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');
var resultsContainer = document.getElementById('results-container');
var data = [
  { name: 'apple', description: 'A juicy fruit' },
  { name: 'banana', description: 'A sweet fruit' },
  { name: 'cherry', description: 'A small red fruit' },
  { name: 'date', description: 'A sweet sticky fruit' },
  { name: 'elderberry', description: 'A small purple fruit' }
];

// SEARCH FUNCTION
  function search() {
    var searchTerm = searchInput.value.toLowerCase();
    createCard(searchTerm);
    searchInput.value="";
    var history = JSON.parse(localStorage.getItem("history")) || [];
    if (history.indexOf(searchTerm) === -1) {
  history.push(searchTerm)}
  localStorage.setItem("history", JSON.stringify(history));
  }


  
// CREATE CARD FUNCTION
function createCard(searchTerm) {
  var cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  var cardTitle = document.createElement('h2');
  cardTitle.textContent = `Search results for "${searchTerm}":`;

  var resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container');

  var results = data.filter(item => item.name.includes(searchTerm));

  if (results.length === 0) {
    var resultItem = document.createElement('p');
    resultItem.textContent = `No results found for "${searchTerm}".`;
    resultContainer.appendChild(resultItem);
  } else {
    for (var i = 0; i < results.length; i++) {
      var resultItem = document.createElement('p');
      resultItem.textContent = `${results[i].name}: ${results[i].description}`;
      resultContainer.appendChild(resultItem);
    }
  }

  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(resultContainer);

  resultsContainer.appendChild(cardContainer);
}


searchButton.addEventListener('click', search);
searchInput.addEventListener('keydown', event => {
if (event.key === 'Enter') {
    search();
}
});