/**coordinates of the clinic */
export const COORDS = [41.2993892, -7.757643];
export const MAP_ZOOM_LEVEL = 13;

/** Images for marker on map */
import markerIconPath from '../../img/mapIcon.png';
import markerIconShadowPath from '../../img/logo.jpg';

/** Map icon options - https://leafletjs.com/reference.html#icon */
export const MARKER_ICON_OPTIONS = {
  iconUrl: markerIconPath,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: markerIconShadowPath,
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
};

/** Map tiles - //https://leafletjs.com/reference.html#tilelayer */
export const TILES = {
  url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  opt: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};
