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

  function search() {
    var searchTerm = searchInput.value.toLowerCase();
    var results = data.filter(item => item.name.includes(searchTerm));
    displayResults(results);
  }

  function displayResults(results) {
    resultsContainer.innerHTML = '';
    results.forEach(item => {
      var card = document.createElement('div');
      card.classList.add('card');
      var title = document.createElement('h2');
      title.textContent = item.name;
      var description = document.createElement('p');
      description.textContent = item.description;
      card.appendChild(title);
      card.appendChild(description);
      resultsContainer.appendChild(card);
    });
  }

  searchButton.addEventListener('click', search);
  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      search();
    }
  });