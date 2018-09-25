const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoibHRhbjkzIiwiYSI6ImNqbWk1azhuODAxaTczcG9jaGtmYWVremoifQ.bMsf571waIg9kvzYryn7Rg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-74.009, 40.705] for New York
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const newMark1 = buildMarker('activity', [-87.6354, 41.8885]).addTo(map);
console.log(newMark1);
// .addTo(map); // [-74.009, 40.705] for NY

const newMark2 = buildMarker('restaurant', [-87.650332, 41.913988]).addTo(map);
