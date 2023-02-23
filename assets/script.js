<<<<<<< HEAD

	

=======
  // when page loads, if concerts have been saved, repopulate the "saved/favs" carousel from local storage
  
  // event listener/jQuery .on function to listen for button press when user has typed something in and clicked button --> will call function with rapid API fetch

  
  //rapidAPI concert tracker (artist search)
  const options = {
    method: 'GET',
    headers: { //define options for fetch below
      // 'X-RapidAPI-Key': '', // needs to be put back in
      'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    }
  };

var artistName = 'motley crue' //simple placeholder variable that will have it's value become whatever the user has typed in
// getShows(artistName);

// function getShows(artistName) { //when function called, will be passed the artist/band name that was entered
//   fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${artistName}&page=1`, options)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // do a loop (to 5?) to populate each card with a concert info
//       let i = 0; //just trying one "iteration" for now
//       console.log(data.data.length);
//       console.log(data.data[i]); // see one response object
//       // pull the lon, lat --> these values will be put into the img src of the card to display a map based on those coords
//       console.log(data.data[i].location.geo.latitude);
//       console.log(data.data[i].location.geo.longitude);
//       //pull the date --> will go in 'date' section of card
//       console.log(data.data[i].startDate);
//       //get band name (could also just use user input result)
//       console.log(data.data[i].name);
//       // get venue name
//       console.log(data.data[i].location.name);
//       //get band image (if available)
//       console.log(data.data[i].image);
//       // grab city/region
//       console.log(data.data[i].location.address.addressLocality);
//       //grab country
//       console.log(data.data[i].location.address.addressCountry);
//     })
//     .catch(err => console.error(err));
    
    
    
    // 
    // pull out venue name 
    // pull out city name
    // artist image (if included) --> can have placeholder image already in card then be replaced by this img as the src
    // var lon = -73.99156; //placeholders for now
    // var lat = 40.74971;
//    myMap = document.getElementById("map-img"); //this will eventually be the img a given card

//    myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);
// };


var granimInstance = new Granim({
  element: '#canvas-image-blending',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  image : {
      source: 'assets/crowd.jpg',
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
>>>>>>> e8809ce0e3996c4c0ee2fbd2eb2911fee0fd6b7b
