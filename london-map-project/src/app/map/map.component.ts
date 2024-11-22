import { Component, OnInit } from '@angular/core';
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = new ol.Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new ol.View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });
    const button = document.createElement('button');
    button.innerHTML = 'Mostra coordinate di Londra ';
    button.onclick = () => {
      alert('Coordinate di Londra: 51.5074° N, 0.1278° W');
    };
    document.body.appendChild(button);
  }

}
