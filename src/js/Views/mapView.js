import View from './View';
import * as L from 'leaflet';
import {
  COORDS,
  MAP_ZOOM_LEVEL,
  MARKER_ICON_OPTIONS,
  TILES,
} from '../Config/mapConfig';

class MapView extends View {
  _parentElement = document.querySelector('.section--2');
  _defaultClear = false;
  _mapID = 'map';

  // From configuration file
  _coord = COORDS;
  _zoom = MAP_ZOOM_LEVEL;
  _markerOptions = MARKER_ICON_OPTIONS;

  loadMap() {
    const myMap = L.map(this._mapID).setView(this._coord, this._zoom);

    L.tileLayer(TILES.url, TILES.opt).addTo(myMap);

    const myIcon = L.icon(this._markerOptions);

    const myMarker = L.marker(this._coord, { icon: myIcon }).addTo(myMap);
  }

  _generateMarkup() {
    return `<div class="map" id="${this._mapID}"></div>`;
  }
}

export default new MapView();
