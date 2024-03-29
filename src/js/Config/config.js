import logoUrl from 'url:../../img/logo/logo.png';
/** path to the logo */
export const LOGO_URL = logoUrl;

// Import icons - the url to use to acess it because of using parcel to compress, transpilling and polyfiling our code
import icons from 'url:../../img/icons.svg';
/** path to icons.svg */
export const ICON_PATH = icons;

/** time to change images in the header */
export const HEADER_TIMER_SEC = 4;

/** max number of failures when trying to load data */
export const MAX_LOAD_ATTEMPS = 3;

/** nav links */
export const NAV = ['about', 'services', 'team', 'faq', 'contacts'];
/** footer links */ //prettier-ignore
export const FOOTER = ['about', 'services', 'agreements', 'team', 'faq', 'contacts'];

// Map coords are in the mapConfig
