  // when page loads, if concerts have been saved, repopulate the "saved/favs" carousel from local storage

  //target search input and button
var searchInput = $('#search-input');
var searcher = $('#search-button');
var savedCarousel = $('#saved-carousel');
var slide1 = $('.slide_1');

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
      $(concertDate).text(data.data[i].startDate);
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
      
      let myMap = document.getElementById(`map-image-${i}`); //this will eventually be the img a given card

      myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/300x300?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);

      // need to implement an event listener for each slide to have an event listener for the function 'saveCard' that runs on click. Should be added after everything is populated from the search results.
      } //ends loop
    })
    .catch(err => console.error(err));
    
};

// this swiper carousel is for search results
const swiper1 = new Swiper('.swiper1', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
// this swiper carousel is for saved items
const swiper2 = new Swiper('.swiper2', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });


function saveCard(event){
  // takes the innerHTML of the card clicked on and just copy it into the saved concerts
  var newCard = document.createElement('div');
  // set classes to identify the slide as a slide
  newCard.classList.add("swiper-slide");
  newCard.classList.add("card");
  // copies the innerhtml from the card clicked on and saves it inside of the new created element
  newCard.innerHTML = event.target.innerHTML;
  // build place the new element inside of the swiper carousel
 $(savedCarousel).append(newCard);
  // save all of the cards inside of the swiper as one big block of html and sends it to local storage to be retrieved later.
 localStorage.setItem('Saved', $(savedCarousel).html());
}
// currently set to only function on slide one
// needs to be implemented on all cards after they have been populated by search results
$(slide1).on('click', saveCard);

function storeSaved(){
  // save the inner html (all the cards) of the saved carousel to the local storage
}