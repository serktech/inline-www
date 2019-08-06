// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 40.695541, lng: -73.987839 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}
