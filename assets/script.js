// this function prints the saved events in the array on initialization
function storeSaved(){
  $(savedCarousel).html(localStorage.getItem('Saved'));
}
storeSaved();

// target search input and button
var searchInput = $('#search-input');
var searcher = $('#search-button');
var savedCarousel = $('#saved-carousel');
var slide1 = $('.slide_1');

// variables representing the 'save' buttons
var button1 = $('#button-1');
var button2 = $('#button-2');
var button3 = $('#button-3');
var button4 = $('#button-4');
var button5 = $('#button-5');

// the carousel that stores the saved events
var savedCarousel = $('#saved-carousel');

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
      'X-RapidAPI-Key': '48fb8adc1dmsh6966e6d7b383838p18ff3ajsn424bb327d27c', 
      'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    }
  };


function getShows(artistName) { //when function called, will be passed the artist/band name that was entered
  fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist?name=${artistName}&page=1`, options)
    .then(function (response) {
      return response.json();
    }) 
    .then(function (data) {
//     do a loop to populate each card with a concert info 
  myModal = document.querySelector('modal-js');
  if (!data.data) {
    $('.modal').addClass('is-active'); 
    $('.modal-close').on('click', function(){
    console.log('hi');
    $('#modal-js').removeClass('is-active');
    
  })
  }
    if ((data.data.length > 0)) {
      for(i= 0; i<5; i++) {
//       // pull the lon, lat --> these values will be put into the map-img src of the card to display a map based on those coords
//need to do data.data[i] because there is an inner "data" object
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
      $(bandImage).attr("src", data.data[i].image); //sets top img of card to whatever image was given from api for current artist/band
//       // grab city/region
      let city = $(".city-"+i);
      $(city).text(data.data[i].location.address.addressLocality) 
//       //grab country
      let country = $(".country-"+i);
      $(country).text(data.data[i].location.address.addressCountry);
      let banner = $('.banner-'+i);
      $(banner).text('Wanna see '+ data.data[i].name + ' play live in '+ data.data[i].location.address.addressLocality + '??');
      
      let myMap = document.getElementById(`map-image-${i}`); //target placeholder for map
      //put map in placeholder img spot w/mapbox api
      myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${lon},${lat})/${lon},${lat},11/500x500?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`);
      // need to save the div on click
      } //ends loop
      return;
    } //ends if
    else  {
      $('.modal').addClass('is-active') 
    }
     //ends conditional
    })
    .catch(err => console.error(err));
    
    
};


var swiper1 = new Swiper('.swiper1', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
    
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    
// this swiper carousel is for saved items
var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // the inhereted positioning for the pagination and buttons is horrible and overriding it in our own stylesheet isn't working so I'm leaving these out for now

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // If we need navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


function saveCard(event){
// takes the innerHTML of the card clicked on and just copy it into the saved concerts
var slider = $(event.target).parents()[2];
var newCard = document.createElement('div');
// set classes to identify the slide as a slide and style it
newCard.classList.add("swiper-slide");
newCard.classList.add("card");
newCard.classList.add("saved-card");
// copies the innerhtml from the card clicked on and saves it inside of the new created element
newCard.innerHTML = slider.innerHTML;
// gets rid of the button so that when it's saved it doesn't have a button to save it
var byeButton = $(newCard).find('.save-button');
byeButton.remove();
// place the new element inside of the swiper carousel
$(savedCarousel).append(newCard);
// save all of the cards inside of the swiper as one big block of html and sends it to local storage to be retrieved later.
localStorage.setItem('Saved', $(savedCarousel).html());
}

// while a for loop could have been implemented to apply these event listeners, I decided to do it this way for simplicity's sake
$(button1).on('click', saveCard);
$(button2).on('click', saveCard);
$(button3).on('click', saveCard);
$(button4).on('click', saveCard);
$(button5).on('click', saveCard);

// this function prints the saved events in the array on initialization
function storeSaved(){
  $(savedCarousel).html(localStorage.getItem('Saved'));
}
storeSaved();
