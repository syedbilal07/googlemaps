var myCenter = new google.maps.LatLng(51.508742,-0.120850);
function initialize()
{
	var mapProp = {
		center:myCenter,
		zoom:5,
		disableDefaultUI:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

var myCenter1 = new google.maps.LatLng(51.508742,-0.120850);
function initialize1()
{
	var mapProp = {
		center:myCenter1,
		zoom:5,
		panControl:true,
		zoomControl:true,
		mapTypeControl:true,
		scaleControl:true,
		streetViewControl:true,
		overviewMapControl:true,
		rotateControl:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap1"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize1);
var myCenter2 = new google.maps.LatLng(51.508742,-0.120850);
function initialize2()
{
	var mapProp =
	{
	center:myCenter,
	zoom:7,
	zoomControl:true,
	zoomControlOptions:
	{
		style:google.maps.ZoomControlStyle.SMALL
	},
	mapTypeId:google.maps.MapTypeId.ROADMAP
	}

var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);
};
google.maps.event.addDomListener(window, 'load', initialize2);

var myCenter3 = new google.maps.LatLng(51.508742,-0.120850);
function initialize3()
{
	var mapProp =
	{
	center:myCenter3,
	zoom:7,
	zoomControl:true,
	zoomControlOptions:
	{
		style:google.maps.ZoomControlStyle.SMALL
	},
	mapTypeControl:true,
	mapTypeControlOptions:
	{
		style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		position:google.maps.ControlPosition.TOP_CENTER
	},
	mapTypeId:google.maps.MapTypeId.ROADMAP
	}

var map = new google.maps.Map(document.getElementById("googleMap3"),mapProp);
};
google.maps.event.addDomListener(window, 'load', initialize3);