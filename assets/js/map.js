
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 54.703429,
            lng: -2.844944
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Locations of shows 
    var locations = [ 
        { lat: 50.819900, lng: -1.086433, title: "Portsmouth" },
        { lat:  52.636473, lng: -1.139342, title: "Leicester" },
        { lat: 51.505234, lng: -0.153817, title:  "London" },
        { lat: 53.481420, lng: -2.242004, title: "Manchester" },
        { lat: 57.170766, lng: -4.182766, title: "Scotland" },
        { lat: 51.483623, lng: -3.178960, title: "cardiff"},
        { lat: 51.483623, lng: -3.178960, title: "Dublin" } 
    ];

     var markers = locations.map(function(locations, i) {
        return new google.maps.Marker({
            position: locations,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

// Hover

$( ".ports" )
  .mouseover(function() {
   $(".ports").css("color","blue");
});
$( ".ports" )
  .mouseout(function() {
   $(".ports").css("color","white");
});


$( ".leic" )
  .mouseover(function() {
   $(".leic").css("color","blue");
});
$( ".leic" )
  .mouseout(function() {
   $(".leic").css("color","white");
});


$( ".lon" )
  .mouseover(function() {
   $(".lon").css("color","blue");
});
$( ".lon" )
  .mouseout(function() {
   $(".lon").css("color","white");
});


$( ".man" )
  .mouseover(function() {
   $(".man").css("color","blue");
});
$( ".man" )
  .mouseout(function() {
   $(".man").css("color","white");
});


$( ".scot" )
  .mouseover(function() {
   $(".scot").css("color","blue");
});
$( ".scot" )
  .mouseout(function() {
   $(".scot").css("color","white");
});


$( ".car" )
  .mouseover(function() {
   $(".car").css("color","blue");
});
$( ".car" )
  .mouseout(function() {
   $(".car").css("color","white");
});


$( ".dub" )
  .mouseover(function() {
   $(".dub").css("color","blue");
   var coords = latlng.split(",");
 var panPoint = new google.maps.LatLng(coords[0], coords[1]);
  
    map.setZoom(12);
      map.panTo(panPoint);
});
$( ".dub" )
  .mouseout(function() {
   $(".dub").css("color","white");
});

// zoom on map

jQuery(document).ready(function($) {
     var coords = latlng.split(",");
 var panPoint = new google.maps.LatLng(coords[0], coords[1]);
    $('.locations').mouseover( function() {
    map.setZoom(12);
      map.panTo(panPoint);
   });
// $(".markers").on('click',function pan(latlng) {
//  
//   map.setZoom(10); // or whatever lvl of zoom desired
//   
// }

   //    var lat = locations[0];
//     var lng = locations[1];
    // $("#map","Portsmouth").mouseover();{
    // google.maps.event.trigger(map, 'resize');    
    // }
   
    //  $('.bt-googlemaps').animate({width:'710px'}, 500);
    //  $('.bt-googlemaps').animate({height:'640px'}, 500);
    //  
         
});
