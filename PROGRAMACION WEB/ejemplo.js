function initMap() {
    const laPaz = { lat: -16.5000, lng: -68.1500 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: laPaz,
    });
    const marker = new google.maps.Marker({
        position: laPaz,
        map: map,
        title: "La Paz",
    });
}