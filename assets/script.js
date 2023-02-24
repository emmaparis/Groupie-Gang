  // when page loads, if concerts have been saved, repopulate the "saved/favs" carousel from local storage

  //target search input and button
var searchInput = $('#search-input');
var searcher = $('#search-button');

//when user types artist name and clicks button, calls function w/fetch, passing whatever was typed as the artist name
$(searcher).on('click', function() {
      let artistName = searchInput.val();
      getShows(artistName);
      searchInput.val('');
});

  
  //rapidAPI concert tracker (artist search)
  const options = {
    method: 'GET',
    headers: { //define options for fetch below
      'X-RapidAPI-Key': '3fdcf50bafmsh314ad737bf310e6p17a2f8jsnc654ee3d4629', 
      'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    }
  };

// var artistName = 'motley crue' //simple placeholder variable that will have it's value become whatever the user has typed in

function getShows(artistName) { //when function called, will be passed the artist/band name that was entered
  fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${artistName}&page=1`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
//       // do a loop (to 5?) to populate each card with a concert info
      
      for(i= 0; i<5; i++) {
      console.log(data);
      console.log(i);
      console.log(data.data[i]); // see one response object
//       // pull the lon, lat --> these values will be put into the map-img src of the card to display a map based on those coords
      let lat = data.data[i].location.geo.latitude;
      let lon = data.data[i].location.geo.longitude;
//       //pull the date --> will go in 'date' section of card
      concertDate = $('.date-'+i);
      let date = data.data[i].startDate;
      $(concertDate).text(date.substring(0,10));
//       //get band name (could also just use user input result)
      let artist = $('.artist-name-'+i);
      $(artist).text(' ' + data.data[i].name + ' ');
//       // get venue name
      let venue = $('.venue-'+i);
      $(venue).text(data.data[i].location.name);
//       //get band image (if available)
      let bandImage = $("#artist-image-"+i);
      console.log(bandImage);
      console.log(data.data[i].image);
      $(bandImage).attr("src", data.data[i].image); //sets top img of card to whatever image was given from api for current artist/band
//       // grab city/region
      let city = $(".city-"+i);
      $(city).text(data.data[i].location.address.addressLocality) 
//       //grab country
      let country = $(".country-"+i);
      $(country).text(data.data[i].location.address.addressCountry);
      let banner = $('.banner-'+i);
      $(banner).text('Wanna see '+ data.data[i].name + ' play live in '+ data.data[i].location.address.addressLocality + '??');
      
      let myMap = document.getElementById(`map-image-${i}`); //this will eventually be the img a given card

      myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);
      } //ends loop
    })
    .catch(err => console.error(err));
    
};


const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
