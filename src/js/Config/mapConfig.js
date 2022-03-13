/**coordinates of the clinic */
export const COORDS = [41.29822701133623, -7.747412611051245];
export const MAP_ZOOM_LEVEL = 15;

/** Images for marker on map */
import markerIconPath from '../../img/map/mapIcon4.png';

/** Map icon options - https://leafletjs.com/reference.html#icon */
export const MARKER_ICON_OPTIONS = {
  iconUrl: markerIconPath,
  iconSize: [70, 70],
  iconAnchor: [35, 70],
  popupAnchor: [0, -70],
};

/** Map tiles
 * DOC: https://leafletjs.com/reference.html#tilelayer
 * Providers (url): https://leaflet-extras.github.io/leaflet-providers/preview/ */
export const TILES = {
  url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  opt: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

export const POPUP_OPTIONS = {
  maxWdth: 250,
  minWidth: 100,
  autoClose: true,
  closeOnClick: false,
  className: `map__popup`,
};
