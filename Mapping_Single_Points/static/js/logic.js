// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      39.4121, -104.896
    ],
    zoom: 14
  });

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([39.4121, -104.896]).addTo(map);

L.circleMarker([39.4121, -104.896], {
    radius: 300,
    color: '#0906D6',
    fillColor: '#05EDA0',
    fillOpacity: 0.5
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);