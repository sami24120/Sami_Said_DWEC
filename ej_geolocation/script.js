
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([39.574505, 2.655378], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    var locations = [];

    function updateMap(location) {
        locations.unshift(location);

        if (locations.length > 5) {
            locations.pop();
        }

        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        for (var i = 0; i < locations.length; i++) {
            var marker = L.marker(locations[i]).addTo(map);
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var userLocation = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];
                updateMap(userLocation);
            });
        }
    }

    getLocation();

    window.addEventListener("beforeunload", function () {
        localStorage.setItem("locations", JSON.stringify(locations));
    });

    var storedLocations = localStorage.getItem("locations");
    if (storedLocations) {
        locations = JSON.parse(storedLocations);
        updateMap(locations[0]);
    }
});
