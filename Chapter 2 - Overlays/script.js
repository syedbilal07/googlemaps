// Google Maps
	var myCenter = new google.maps.LatLng(51.508742,-0.120850);
	var stavanger = new google.maps.LatLng(58.983991,5.734863);
	var amsterdam = new google.maps.LatLng(52.395715,4.888916);
	var london = new google.maps.LatLng(51.508742,-0.120850);
function initialize()
{
	var mapProp =
	{
		center:myCenter,
		zoom:7,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var myTrip = [stavanger,amsterdam,london];
	var flightPath = new google.maps.Polyline({
		path:myTrip,
		strokeColor:"#0000FF",
		strokeOpacity:0.8,
		strokeWeight:2
	});
	var marker = new google.maps.Marker(
	{
		position:myCenter,
		animation:google.maps.Animation.BOUNCE
	});
	flightPath.setMap(map)
}
	google.maps.event.addDomListener(window, 'load', initialize);
// Google Maps 1

	var myCenter1 = new google.maps.LatLng(51.508742,-0.120850);
	function initialize1()
{
	var mapProp1 =
	{
		center:myCenter1,
		zoom:7,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
	var marker1 = new google.maps.Marker(
	{
		position:myCenter1,
		animation:google.maps.Animation.BOUNCE
	});
	marker1.setMap(map1);
	var infoWindow = new google.maps.InfoWindow({
		content:"Hello London.!"
	});
	infoWindow.open(map1, marker1);
}
	google.maps.event.addDomListener(window, 'load', initialize1);