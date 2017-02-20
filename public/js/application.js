$(document).ready(function(){


})
function initMap() {
  var austin = {lat: 30.2672, lng: -97.7431};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: austin
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
  // var marker = new google.maps.Marker({
  //   position: austin,
  //   map: map
  // });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
