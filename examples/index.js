var map = L.map('map');

// [DONE] 브이월드
// [TOOD] 브이월드 키 발급
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png', {
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		// L.latLng(57.74, 11.94),
		// L.latLng(57.6792, 11.949)
		// [DONE] 울산->안산
		L.latLng(35.427647, 129.331420),
		L.latLng(37.323364, 126.732196)
	],
	// position: 'topleft', // 'topleft', 'topright', 'bottomleft' or 'bottomright'
	geocoder: L.Control.Geocoder.nominatim(),
	language: 'ko',
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}
}))
// [TODO] spinner 구현. routing 오래 걸리기 때문
// .on('routingstart', showSpinner)
// .on('routesfound routingerror', hideSpinner)
.addTo(map);

L.Routing.errorControl(control).addTo(map);