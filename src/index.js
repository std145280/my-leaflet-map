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

const sampleMarkerText = {
  // Note how popup content can be written as an HTML string, or as JSX within a single node:

  removableAndEditable: `<h3>This marker is removable and its popup is editable.</h3>
    <p>Leaflet-Popup-Modifier can make a popup editable, removable, both, or neither.  You can add <code>edtiable</code> or <code>removable</code> to its options to decide what type of popup you want.<br>
    <br>
    Go to the <a href="https://github.com/slutske22/leaflet-popup-modifier" target="_blank">GitHub page</a> for this plugin to read more about it.</p>`,

  removable: `<h3>This Jormungandr is removable.</h3>
    <p>The Leaflet-Popup-Modifier plugin will automatically name each leaflet map element to properly render the "Remove this {thing}" link.  If you want to customize the name, you can add the <code>nametag: <i>'yourNametag'</i></code> option to a removable popup.</p>`
};

//------------------------------------------------------------------------//
//                DROP A MARKER IN CENTER
//------------------------------------------------------------------------//

// Define buttons
var makeMarker = document.querySelector("#makeMarker");

makeMarker.addEventListener("click", function () {
  let markerPosition = leafletMap.getCenter();

  let marker = L.marker(markerPosition)
    .addTo(leafletMap)
    .bindPopup(
      `
     Latitude: ${markerPosition.lat}<br>
     Longitude: ${markerPosition.lng}`,
      { removable: true, editable: true, maxWidth: 600, autoPan: false }
    )
    .openPopup();
});

document.addEventListener("removeMarker", (e) => {
  console.log(e);
});
