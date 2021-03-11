var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  45.116177, lng: 7.742615},
    zoom: 8
  });  
  var marker = new google.maps.Marker({
    position: {lat:  45.116177, lng: 7.742615},
    map: map
  });
}