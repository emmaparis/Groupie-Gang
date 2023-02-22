  // when page loads, if concerts have been saved, repopulate the "saved/favs" carousel from local storage
  
  // event listener/jQuery .on function to listen for button press when user has typed something in and clicked button --> will call function with rapid API fetch

  
  //rapidAPI concert tracker (artist search)
  const options = {
    method: 'GET',
    headers: { //define options for fetch below
      // 'X-RapidAPI-Key': '', needs to be put back in
      'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    }
  };

var artistName = 'joji' //simple placeholder variable that will have it's value become whatever the user has typed in

function getShows(artistName) { //when function called, will be passed the artist/band name that was entered
  fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?${artistName}=%20joji&page=1`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    // do a loop (to 5?) to populate each card with a concert info
    // pull the lon, lat --> these values will be put into the img src of the card to display a map based on those coords
    // pull the date --> goes in 'date' section of card
    // pull out venue name 
    // pull out city name
    // artist image (if included) --> can have placeholder image already in card then be replaced by this img as the src
    var lon = -73.99156; //placeholders for now
    var lat = 40.74971;
   myMap = document.getElementById("map-img"); //this will eventually be the img a given card

   myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);
};
