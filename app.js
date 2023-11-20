// Initialize the map
var mymap = L.map('map').setView([0, 0], 1);

// Add a tile layer (you can replace this with other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Add markers for Minecraft-like points of interest
var poi1 = L.marker([10, 10]).addTo(mymap);
var poi2 = L.marker([-10, -10]).addTo(mymap);

// Add popups to the markers
poi1.bindPopup("<b>Minecraft Village</b><br>Coordinates: (10, 10)").openPopup();
poi2.bindPopup("<b>Dungeon</b><br>Coordinates: (-10, -10)").openPopup();
