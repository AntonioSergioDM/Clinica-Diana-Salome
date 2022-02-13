/**Path to full image of lazy image with data-src="1" */
import imgLazy1 from '../img/logo.jpg';
import imgLazy2 from '../img/logo.jpg';
import imgLazy3 from '../img/logo.jpg';

/** all dynamic images paths to use - parcel compatible */
export const imgPaths = {
  imgLazy1,
  imgLazy2,
  imgLazy3,
};

/** Images for marker on map */
import markerIconPath from '../img/logo.jpg';
import markerIconShadowPath from '../img/logo.jpg';

/** Map icon options - https://leafletjs.com/reference.html#icon */
export const markerIconOptions = {
  iconUrl: markerIconPath,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: markerIconShadowPath,
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
};

/**coordinates of the clinic */
export const COORDS = [41.2993892, -7.757643];
export const MAP_ZOOM_LEVEL = 13;

/** Open and close time for each weekday
 * (holidays have the same hours as sunday)*/
export const OPEN_HOURS = {
  // always in the format hh:mm or empty string if closed
  mon: {
    label: 'Segunda',
    open: '09h00',
    close: '18h00',
  },
  tue: {
    label: 'Terça',
    open: '09h00',
    close: '18h00',
  },
  wed: {
    label: 'Quarta',
    open: '09h00',
    close: '18h00',
  },
  thu: {
    label: 'Quinta',
    open: '09h00',
    close: '18h00',
  },
  fri: {
    label: 'Sexta',
    open: '09h00',
    close: '18h00',
  },
  sat: {
    label: 'Sábado',
    open: '09h00',
    close: '18h00',
  },
  sun: {
    label: 'Dom e Fer',
    open: '',
    close: '',
  },
};
