function initMap() {
    const ubicacion = { lat: -16.5000, lng: -68.1193 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: ubicacion,
    });
    new google.maps.Marker({
        position: ubicacion,
        map: map,
        title: "Ubicación: La Paz, Bolivia",
    });
}
