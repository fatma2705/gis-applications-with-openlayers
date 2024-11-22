import './style.css';
import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css'; 
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import SearchNominatim from 'ol-ext/control/SearchNominatim';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
 document.getElementById('zoomRoma').addEventListener('click', () => {
  const romaCoordinate = fromLonLat([12.545,41.8992]);
  map.getView().setCenter(romaCoordinate);
  map.getView().setZoom(10);
 })
 const search = new SearchNominatim({
   placeholder: 'Cerca un luogo...',
  title: 'Ricerca Geocoding',
  
});
map.addControl(search)
search.on('select', function (e) {
  const coord = e.coordinate;
  map.getView().setCenter(coord);
  map.getView().setZoom(12);
});
