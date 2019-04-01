var myCenter = new google.maps.LatLng(45.434046,12.340284);
function initialize()
{
	var mapProp = 
	{
		center:myCenter,
		zoom:18,
		mapTypeId:google.maps.MapTypeId.HYBRID
	}
	var maps = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

var myCenter1 = new google.maps.LatLng(45.434046,12.340284);
function initialize1()
{
	var mapProp = 
	{
		center:myCenter1,
		zoom:18,
		mapTypeId:google.maps.MapTypeId.HYBRID
	}
	var maps = new google.maps.Map(document.getElementById("googleMap1"), mapProp);
	maps.setTilt(0);
}
google.maps.event.addDomListener(window, 'load', initialize1);