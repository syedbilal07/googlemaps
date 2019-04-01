// Google Maps
var myCenter = new google.maps.LatLng(51.508742,-0.120850);
function initialize()
{
	var mapProp = 
	{
		center:myCenter,
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position:myCenter,
		title:'Click To Zoom'
	});
	marker.setMap(map);
	// Zoom to 9 when clicking on marker
	google.maps.event.addListener(marker, 'click' ,function()
	{
		map.setZoom(9);
		map.setCenter(marker.getPosition());
	});
	// 3 seconds after the center of the map has changed, pan back to the marker
	google.maps.event.addListener(map, 'center_changed', function(){
		window.setTimeout(function(){
			map.panTo(marker.getPosition());
		},5000);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
// Google Maps 1
var map1;
var myCenter1 = new google.maps.LatLng(51.508742,-0.120850);
function initialize1()
{
	var mapProp1 = 
	{
		center:myCenter1,
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
	// Set Marker Which Shows Latitude & Longitude When User Clicks On Map
	google.maps.event.addListener(map1, 'click', function(event){
		placeMarker(event.latLng);
	});
}
function placeMarker(location)
{
	var marker1 = new google.maps.Marker({
		position:location,
		map:map1,
	});
	var infoWindow = new google.maps.InfoWindow({
		content:'Latitude:-' + location.lat() + "<br />" + "Longitude:- " + location.lng()
	});
	infoWindow.open(map1, marker1);
}
google.maps.event.addDomListener(window, 'load', initialize1);