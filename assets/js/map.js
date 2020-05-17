var labels = '123456';
var labelIndex = 0;
var map = null;
var locations = [
   [ 'Portsmouth',50.819900, -1.086433, 1],
    ['Leicester',52.636473, -1.139342, 2],
    ['London',51.505234, -0.153817, 3],
    ['Manchester',53.481420, -2.242004, 4],
    ['Scotland', 57.099167, -4.513949, 5],
    ['Cardiff',51.483623, -3.178960, 6],
    ['Dublin',53.360073, -6.267658, 7]
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        gestureHandling: 'greedy',
        center: new google.maps.LatLng(54.703429,-2.844944)
    });
}

var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers = [];
for (i = 0; i < locations.length; i++) {
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    label: labels[labelIndex++ % labels.length],
});
markers.push(marker);
};

document.addEventListener("DOMContentLoaded", function(event) { 
     console.log(document.getElementsByClassName("portsmouthID"))
    document.getElementsByClassName("portsmouthID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[0][1],locations[0][2]));
        map.setZoom(8);
        console.log(markers[0].getPosition())

       
    });

     console.log(document.getElementsByClassName("leicesterID"))
    document.getElementsByClassName("leicesterID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[1][1],locations[1][2]));
        map.setZoom(8);
        console.log(markers[1].getPosition())

       
    });

     console.log(document.getElementsByClassName("londonID"))
    document.getElementsByClassName("londonID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[2][1],locations[2][2]));
        map.setZoom(8);
        console.log(markers[2].getPosition())

       
    });

     console.log(document.getElementsByClassName("manchesterID"))
    document.getElementsByClassName("manchesterID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[3][1],locations[3][2]));
        map.setZoom(8);
        console.log(markers[3].getPosition())

       
    });
    console.log(document.getElementsByClassName("scotlandID"))
    document.getElementsByClassName("scotlandID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[4][1],locations[4][2]));
        map.setZoom(8);
        console.log(markers[4].getPosition())

       
    });
 console.log(document.getElementsByClassName("cardiffID"))
    document.getElementsByClassName("cardiffID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[5][1],locations[5][2]));
        map.setZoom(8);
        console.log(markers[5].getPosition())

       
    });
     console.log(document.getElementsByClassName("dublinID"))
    document.getElementsByClassName("dublinID")[0].addEventListener("click", function(){
        //    map.panTo(markers[4].getPosition());
         
        map.panTo(new google.maps.LatLng(locations[6][1],locations[6][2]));
        map.setZoom(8);
        console.log(markers[4].getPosition())

       
    });
    
});
