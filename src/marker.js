// const locationMarker = document.createElement('div'); // Create a new, detached DIV
// locationMarker.style.width = '32px';
// locationMarker.style.height = '39px';
// locationMarker.style.backgroundImage = {
//   generic: 'url(http://i.imgur.com/WbMOfMl.png)',
//   restaurant: 'url()'
// }

// new mapboxgl.Marker(locationMarker).setLngLat([-87.641, 41.895]).addTo(map); // [-74.009, 40.705] for NY

const mapbox = require('mapbox-gl');

const iconURLs = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

const buildMarker = (type, coordinates) => {
  let newEl = document.createElement('div');
  console.log(newEl);
  newEl.style.name = type;
  newEl.style.width = '32px';
  newEl.style.height = '39px';
  newEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapbox.Marker(newEl).setLngLat(coordinates);
};

module.exports = buildMarker;
