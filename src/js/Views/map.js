import * as L from 'leaflet';
import {
  COORDS,
  MAP_ZOOM_LEVEL,
  MARKER_ICON_OPTIONS,
  POPUP_OPTIONS,
  POPUP_TEXT,
  TILES,
} from '../Config/mapConfig';
import OverView from './OverView';

class Map extends OverView {
  // DOM reference
  _mapID = 'map';

  _parentElement = document.getElementById(this._mapID);

  // From configuration file
  // map
  _myCoords = COORDS;
  _zoom = MAP_ZOOM_LEVEL;
  _tileLayer = L.tileLayer(TILES.url, TILES.opt);
  // icon
  _myIcon = L.icon(MARKER_ICON_OPTIONS);
  // marker
  _myMarker = L.marker(this._myCoords, { icon: this._myIcon });
  // popup
  _popup = L.popup(POPUP_OPTIONS);
  _popupText = 'See directions'; // default - overrided by setLang()

  _coords = [0, 0]; //starts empty

  loadMap() {
    this._myMap = L.map(this._mapID).setView(this._myCoords, this._zoom);

    this._tileLayer.addTo(this._myMap);

    this._myMarker.addTo(this._myMap);

    this.addHandler();

    return this;
  }

  setLang(lang) {
    this._popupText = POPUP_TEXT[lang];
    this._marker.setPopupContent(this._generateMarkup());
    return this;
  }

  addHandler() {
    this._createMarker();
    this._myMap.on('click', this._setMarker.bind(this));

    return this;
  }

  _setMarker(mapEvent) {
    const { lat, lng } = mapEvent.latlng;
    this._coords = [lat, lng];

    this._marker
      .setLatLng(this._coords)
      .setPopupContent(this._generateMarkup())
      .openPopup();

    return this;
  }

  _createMarker() {
    this._marker = L.marker(this._coords, { icon: this._myIcon });
    this._marker
      .addTo(this._myMap)
      .bindPopup(this._popup)
      .setPopupContent(this._generateMarkup());

    return this;
  }

  _generateMarkup() {
    const [lat, lng] = this._coords;
    const [myLat, myLng] = this._myCoords;
    return `<a href="https://www.google.pt/maps/dir/${lat},${lng}/data=!4m9!4m8!1m0!1m5!1m1!1s0xd3b4b61b63043f3:0x968bd35c9a7ecba3!2m2!1d${myLng}!2d${myLat}!3e0!5m1!1e2"  target="_blanck">${this._popupText}</a>`;
  }
}

export default new Map();
