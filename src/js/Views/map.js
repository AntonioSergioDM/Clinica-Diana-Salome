import * as L from 'leaflet';
import {
  COORDS,
  MAP_ZOOM_LEVEL,
  MARKER_ICON_OPTIONS,
  TILES,
} from '../Config/mapConfig';

class Map {
  _mapID = 'map';

  // From configuration file
  _coord = COORDS;
  _zoom = MAP_ZOOM_LEVEL;
  _markerOptions = MARKER_ICON_OPTIONS;

  loadMap() {
    this._myMap = L.map(this._mapID).setView(this._coord, this._zoom);

    L.tileLayer(TILES.url, TILES.opt).addTo(this._myMap);

    const myIcon = L.icon(this._markerOptions);

    /* const myMarker = */
    L.marker(this._coord, { icon: myIcon }).addTo(this._myMap);

    this.addHandler();
  }

  addHandler() {
    this._myMap.on(
      'click',
      function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;
        console.log('map click');
        window.open(
          `https://www.google.pt/maps/dir/${lat},${lng}/data=!4m9!4m8!1m0!1m5!1m1!1s0xd3b4b61b63043f3:0x968bd35c9a7ecba3!2m2!1d${this._coord[1]}!2d${this._coord[0]}!3e0!5m1!1e2`
        );
      }.bind(this)
    );
  }
}

export default new Map();
