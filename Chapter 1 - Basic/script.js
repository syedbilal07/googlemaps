function initialize()
{
	var mapProp = 
	{
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
	google.maps.event.addDomListener(window, 'load', initialize);

function loadScript()
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
	document.body.appendChild(script);
}
window.onload = script;