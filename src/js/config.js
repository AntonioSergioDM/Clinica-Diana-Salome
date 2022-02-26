/** week days
 *    keys to open hours
 *    order starting at sunday as the Date.getDay()
 */
export const WEEK_ORDER = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

import logoUrl from 'url:../img/logo.jpg';
/** path to the logo */
export const LOGO_URL = logoUrl;

/** Available languages
 * Add the translations in all files in the data and config folders before adding here
 */
export const AVAIL_LANG = ['pt', 'en'];

/** default language */
export const DEFAULT_LANG = 'pt';

// Import icons - the url to use to acess it because of using parcel to compress, transpilling and polyfiling our code
import icons from 'url:../img/icons.svg';
/** path to icons.svg */
export const ICON_PATH = icons;
