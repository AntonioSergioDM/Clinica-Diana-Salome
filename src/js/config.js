/**Path to full image of lazy image with data-src="1" */
import imgLazy1 from 'url:../img/logo.jpg';
import imgLazy2 from 'url:../img/logo.jpg';
import imgLazy3 from 'url:../img/logo.jpg';

/** all dynamic images paths to use - parcel compatible */
export const imgPaths = {
  imgLazy1,
  imgLazy2,
  imgLazy3,
};

/** week days
 *    keys to open hours
 *    order starting at sunday as the Date.getDay()
 */
export const WEEK_ORDER = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

import logoUrl from 'url:../img/logo.jpg';
/** path to the logo */
export const LOGO_URL = logoUrl;

/** default language */
export const DEFAULT_LANG = 'pt';

/** Available languages
 * Add the translations in all files in the data folder before adding here
 */
export const AVAIL_LANG = ['pt', 'en'];
