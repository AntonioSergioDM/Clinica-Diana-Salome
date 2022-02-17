import * as L from 'leaflet';
import {
  COORDS,
  MAP_ZOOM_LEVEL,
  MARKER_ICON_OPTIONS,
  POPUP_TEXT,
  TILES,
} from '../Config/mapConfig';

class Map {
  _mapID = 'map';

  // From configuration file
  _coord = COORDS;
  _zoom = MAP_ZOOM_LEVEL;
  _markerOptions = MARKER_ICON_OPTIONS;
  _popupText = 'See directions'; // default

  loadMap() {
    this._myMap = L.map(this._mapID).setView(this._coord, this._zoom);

    L.tileLayer(TILES.url, TILES.opt).addTo(this._myMap);

    this._myIcon = L.icon(this._markerOptions);

    /* const myMarker = */
    L.marker(this._coord, { icon: this._myIcon }).addTo(this._myMap);

    this.addHandler();
  }

  setLang(lang) {
    this._popupText = POPUP_TEXT[lang];
  }

  addHandler() {
    this._myMap.on(
      'click',
      function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;

        if (this._marker?.setLatLng([lat, lng])) return;

        this._marker = L.marker([lat, lng], { icon: this._myIcon });
        this._marker
          .addTo(this._myMap)
          .bindPopup(
            L.popup({
              maxWdth: 250,
              minWidth: 100,
              autoClose: true,
              closeOnClick: false,
              // className: `${workout.type}-popup`,
            })
          )
          .setPopupContent(
            `<a href="https://www.google.pt/maps/dir/${lat},${lng}/data=!4m9!4m8!1m0!1m5!1m1!1s0xd3b4b61b63043f3:0x968bd35c9a7ecba3!2m2!1d${this._coord[1]}!2d${this._coord[0]}!3e0!5m1!1e2"  target="_blanck">${this._popupText}</a>`
          )
          .openPopup();
      }.bind(this)
    );
  }
}

export default new Map();
