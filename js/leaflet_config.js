L.Map.addInitHook(function() {
	var slides = document.querySelector('.slides'),
				 zoom = Number(slides.style.zoom);

	// Reveal.js sometimes use the zoom CSS property, but sometimes a scale
	// transform instead. We handle both.
	if (zoom) {
		this._container.style.zoom = 1/zoom;
	} else {
		zoom = Number(slides.style.transform.replace(/.*scale\(([0-9\.]+)\).*/, '$1'));
		this._container.style.transform = 'scale(' + (1 / zoom) + ')';
	}

	this.invalidateSize();
});

var map = L.map('map-test').setView([34.068871, -117.651215], 10);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([34.068871, -117.651215], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 25000
}).addTo(map);

var fireIcon = L.icon({
    iconUrl: 'res/fire_icon.png',
    iconSize: [38, 40],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

var weatherStationIcon = L.icon({
    iconUrl: 'res/weather_station.png',
    iconSize: [38, 40],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

var planes = [
	[34.12222,-117.7506],
	[34.17444,-117.8411],
	[34.16222,-117.6817],
	[34.22389,-117.6675],
	[34.25000,-117.6367],
	[34.16806,-117.7686],
	[34.15167,-117.7436],
	[34.12583333,-117.745],
	[34.13027778,-117.76083333],
	[34.16361111,-117.68138889],
	[33.87055556,-117.685],
	[34.07,-117.48],
	[34.1,-117.63694444],
	[34.18694444,-117.445],
	[34.18694444,-117.42805555],
	[33.93888888,-117.61888888],
	[34.245,-117.75888888],
	[34.01194444,-117.75888888],
	[33.96805555,-117.75888888],
	[33.925,-117.65388888],
	[34.23,-117.51611111],
	[34.15805555,-117.515],
	[33.93888888,-117.61888888],
	[34.17194444,-117.46194444],
	[33.99694444,-117.74194444],
	[33.99694444,-117.72388888],
	[34.12888888,-117.39194444],
	[34.04,-117.39611111],
	[33.99694444,-117.46305555],
	[33.96694444,-117.46611111]
];

for (var i = 0; i < planes.length; i++) {
	new L.marker([planes[i][0],planes[i][1]], {icon: fireIcon}).addTo(map);
}

new L.marker([34.068871, -117.651215], {icon: weatherStationIcon}).addTo(map);

map.addControl(new L.Control.Fullscreen());
