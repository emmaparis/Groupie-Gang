<<<<<<< HEAD
=======
  // when page loads, if concerts have been saved, repopulate the "saved/favs" carousel from local storage
  
  // event listener/jQuery .on function to listen for button press when user has typed something in and clicked button --> will call function with rapid API fetch
var searchInput = $('#search-input');
var searcher = $('#search-button');
<<<<<<< HEAD
=======

$(searcher).on('click', function() {
      let artistName = searchInput.val();
      getShows(artistName);
});
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840

$(searcher).on('click', function() {
      let artistName = searchInput.val();
      getShows(artistName);
});
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840

<<<<<<< HEAD
	

<<<<<<< HEAD
var artistName = 'motley crue' //simple placeholder variable that will have it's value become whatever the user has typed in
getShows(artistName);
=======
// var artistName = 'motley crue' //simple placeholder variable that will have it's value become whatever the user has typed in
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
=======
// var artistName = 'motley crue' //simple placeholder variable that will have it's value become whatever the user has typed in
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840

function getShows(artistName) { //when function called, will be passed the artist/band name that was entered
  fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${artistName}&page=1`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
//       // do a loop (to 5?) to populate each card with a concert info
      let i = 0; //just trying one "iteration" for now
<<<<<<< HEAD
<<<<<<< HEAD
      // console.log(data.data.length);
      console.log(data.data[i]); // see one response object
//       // pull the lon, lat --> these values will be put into the img src of the card to display a map based on those coords
      console.log(data.data[i].location.geo.latitude);
      console.log(data.data[i].location.geo.longitude);
=======
      console.log(data);
      console.log(data.data[i]); // see one response object
//       // pull the lon, lat --> these values will be put into the img src of the card to display a map based on those coords
      let lat = data.data[i].location.geo.latitude;
      let lon = data.data[i].location.geo.longitude;
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
=======
      console.log(data);
      console.log(data.data[i]); // see one response object
//       // pull the lon, lat --> these values will be put into the img src of the card to display a map based on those coords
      let lat = data.data[i].location.geo.latitude;
      let lon = data.data[i].location.geo.longitude;
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
//       //pull the date --> will go in 'date' section of card
      console.log(data.data[i].startDate);
//       //get band name (could also just use user input result)
      console.log(data.data[i].name);
//       // get venue name
      console.log(data.data[i].location.name);
//       //get band image (if available)
      let bandImage = document.getElementById("band-img");
      bandImage.setAttribute("src", data.data[i].image); //sets top img of card to whatever image was given from api for current artist/band
//       // grab city/region
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(data.data[i].location.address.addressLocality);
//       //grab country
      console.log(data.data[i].location.address.addressCountry);
    })
    .catch(err => console.error(err));
    
    // pull out venue name 
    // pull out city name
    // artist image (if included) --> can have placeholder image already in card then be replaced by this img as the src
    var lon = -73.99156; //placeholders for now
    var lat = 40.74971;
    let myMap = document.getElementById("map-img"); //this will eventually be the img a given card

   myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);
=======
      let city = data.data[i].location.address.addressLocality;
//       //grab country
      let country = data.data[i].location.address.addressCountry;
      let address = document.getElementById("address");
      $(address).text(city + ", "+ country)

=======
      let city = data.data[i].location.address.addressLocality;
//       //grab country
      let country = data.data[i].location.address.addressCountry;
      let address = document.getElementById("address");
      $(address).text(city + ", "+ country)

>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
      let myMap = document.getElementById("map-img"); //this will eventually be the img a given card

   myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);

    })
    .catch(err => console.error(err));
    
    // pull out venue name 
    // pull out city name    
    
<<<<<<< HEAD
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
=======
>>>>>>> 6b4335f6cbaf13fc585e5238fe92eba3c8b8e840
};


var granimInstance = new Granim({
  element: '#canvas-image-blending',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  image : {
      source: 'assets/groupiehero_720.png',
      blendingMode: 'multiply'
  },
  states : {
      "default-state": {
          gradients: [
              ['#29323c', '#485563'],
              ['#FF6B6B', '#556270'],
              ['#80d3fe', '#7ea0c4'],
              ['#f0ab51', '#eceba3']
          ],
          transitionSpeed: 7000
      }
  }
});
