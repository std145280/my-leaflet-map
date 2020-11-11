var myPosition;

//MyIcon Setup
var myIcon = L.icon({
  iconUrl: "images/myIcon.png",

  iconSize: [48, 48], // size of the icon
  iconAnchor: [40, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-15, -20] // point from which the popup should open relative to the iconAnchor
});

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

//Marker Layer Groups
var allMarkers = L.layerGroup();
var myMarkers = L.layerGroup();
var localMarkers = L.layerGroup();
var importedMarkers = L.layerGroup();

// Add layer options to map
var mapLayers = {
  "My Markers": myMarkers,
  "All Markers": allMarkers,
  "Imported Markers": importedMarkers,
  "Markers Around Me": localMarkers
};
L.control.layers(mapLayers, null).addTo(leafletMap);

const markerText = {
  removableAndEditable: `<h3>Επεξεργάσιμο Αναδυόμενο Παράθυρο</h3> Μπορείτε να αλλάξετε το μήνυμα πατώντας <b>Edit</b> <br>και να το αφαιρέσετε επιλέγοντας  <b>Remove this market</b><br><br>`,
  markerLocationText: "<b>Θέση σημείου:</b><br>",
  myPlace: `<h3>Είστε εδώ!</h3>`
};

//------------------------------------------------------------------------//
//                READS A GEOJson file with data
//------------------------------------------------------------------------//
var geojson = new L.GeoJSON.AJAX("data/places.geojson");
geojson.on("data:loaded", function () {
  geojson.addTo(leafletMap);
  geojson.addTo(allMarkers);
  geojson.addTo(importedMarkers);
});

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

//------------------------------------------------------------------------//
//                ADDS AN EDITABLE MARKER AT YOUR PLACE
//------------------------------------------------------------------------//
var addMarkerToMe = document.querySelector("#addMarkerToMe");
addMarkerToMe.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (ex) {
    leafletMap.locate({ setView: true, maxZoom: 15 });
    myPosition = new L.latLng(ex.coords.latitude, ex.coords.longitude);
    let marker = L.marker(myPosition, { icon: myIcon })
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
