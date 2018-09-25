const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibHRhbjkzIiwiYSI6ImNqbWk1azhuODAxaTczcG9jaGtmYWVremoifQ.bMsf571waIg9kvzYryn7Rg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-74.009, 40.705] for New York
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
