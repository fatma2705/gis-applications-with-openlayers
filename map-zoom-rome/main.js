import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

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
 document.getElementById('zoomToRome').addEventListener('click', () => {
  const romaCoordinate = fromLonLat([12.545,41.8992]);
  map.getView().setCenter(romaCoordinate);
  map.getView().setZoom(10);
 })
