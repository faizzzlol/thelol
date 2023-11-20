// Initialize the map
var mymap = L.map('map').setView([0, 0], 1);

// Replace this with the URL of your own map tiles
var mapTilesUrl = 'https://your-minecraft-map-tiles/{z}/{x}/{y}.png';

// Add your own tile layer
L.tileLayer(mapTilesUrl, {
    attribution: 'Your attribution here'
}).addTo(mymap);

// You can add markers or other features as needed
var poi1 = L.marker([10, 10]).addTo(mymap);
var poi2 = L.marker([-10, -10]).addTo(mymap);

poi1.bindPopup("<b>Minecraft Village</b><br>Coordinates: (10, 10)").openPopup();
poi2.bindPopup("<b>Dungeon</b><br>Coordinates: (-10, -10)").openPopup();
