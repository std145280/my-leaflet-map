var myPosition;
//Marker Layer Groups
var allMarkers = L.layerGroup();
var myMarkers = L.layerGroup();
var localMarkers = L.layerGroup();

// Define some maps options
var mapOptions = {
  center: [37.9844, 23.7281],
  zoom: 12
};

//Create a map and assign it to the map div
var leafletMap = L.map("leafletMapid", mapOptions);

//  Add a baselayer
var mapBoxOutdoors = L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=0XlfM4fhgeaEeNyF9jNG",
  {
    maxZoom: 18,
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
    zoomOffset: -1
  }
).addTo(leafletMap);

// Add layer options to map
var mapLayers = {
  "My Markers": myMarkers,
  "All Markers": allMarkers,
  "Markers Around Me": localMarkers
};
L.control.layers(mapLayers, null).addTo(leafletMap);

const markerText = {
  removableAndEditable: `<h3>Επεξεργάσιμο Αναδυόμενο Παράθυρο</h3> Μπορείτε να αλλάξετε το μήνυμα πατώντας <b>Edit</b> <br>και να το αφαιρέσετε επιλέγοντας  <b>Remove this market</b><br><br>`,
  markerLocationText: "<b>Θέση σημείου:</b><br>",
  myPlace: `<h3>Είστε εδώ!</h3>`
};

//------------------------------------------------------------------------//
//                ADDS AN EDITABLE MARKER AT THE PLACE YOU CLICK
//------------------------------------------------------------------------//
leafletMap.on("click", function (e) {
  let markerPosition = e.latlng;

  let marker = L.marker(markerPosition)
    .addTo(leafletMap)
    .bindPopup(
      markerText.removableAndEditable +
        markerText.markerLocationText +
        `
      <b>Latitude:</b> ${markerPosition.lat}<br>
      <b>Longitude:</b> ${markerPosition.lng}`,
      { removable: true, editable: true, maxWidth: 600, autoPan: false }
    )
    .openPopup();
  marker.addTo(allMarkers);
  marker.addTo(myMarkers);
});

var addMarkerToMe = document.querySelector("#addMarkerToMe");

addMarkerToMe.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (ex) {
    leafletMap.locate({ setView: true, maxZoom: 15 });
    myPosition = new L.latLng(ex.coords.latitude, ex.coords.longitude);
    let marker = L.marker(myPosition)
      .addTo(leafletMap)
      .bindPopup(
        markerText.myPlace +
        markerText.markerLocationText +
        `
      <b>Latitude:</b> ${myPosition.lat}<br>
      <b>Longitude:</b> ${myPosition.lng}`,
        { removable: true, editable: true, maxWidth: 600, autoPan: false }
      )
      .openPopup();
      
      marker.addTo(localMarkers);
      marker.addTo(allMarkers);
      marker.addTo(myMarkers);    
  });
});


document.addEventListener("removeMarker", (e) => {
  console.log(e);
});
