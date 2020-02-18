// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 6.440613, lng: 3.501246 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn, #myBtn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-150
      },
      80
    );
  }
});


// Read More Button
// function readMore() {
//   let dots = document.getElementById("dots");
//   let moreText = document.getElementById("moretext");
//   let btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

function changeHeight() {
  var readmore = $('#myBtn');
  if (readmore.text() == 'Read more') {
      readmore.text("Read less");
      $("#textBody").animate({maxHeight : '150vh', height : 'auto'},"slow");
  } else {
      readmore.text("Read more");
      $("#textBody").animate({maxHeight : '15vh', height: 'auto'},"slow");
  }           
};


       