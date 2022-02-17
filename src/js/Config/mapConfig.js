/**coordinates of the clinic */
export const COORDS = [41.29822701133623, -7.747412611051245];
export const MAP_ZOOM_LEVEL = 15;

/** Images for marker on map */
import markerIconPath from '../../img/mapIcon.png';

/** Map icon options - https://leafletjs.com/reference.html#icon */
export const MARKER_ICON_OPTIONS = {
  iconUrl: markerIconPath,
  iconSize: [100, 100],
  iconAnchor: [50, 100],
  popupAnchor: [0, -100],
};

/** Map tiles
 * DOC: https://leafletjs.com/reference.html#tilelayer
 * Providers (url): https://leaflet-extras.github.io/leaflet-providers/preview/*/
export const TILES = {
  url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  opt: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

export const POPUP_TEXT = {
  pt: 'Direções',
  en: 'See Directions',
};
