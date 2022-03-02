/** Default language for the website*/
export const DEFAULT_LANG = 'pt';

/** Text used in the 'Leran more' button by language.*/
export const LEARN_MORE_BTN = {
  pt: 'Saiba mais',
  en: 'Learn more',
};

/** Labels for the week days by language. Starting sunday. */
export const WEEK_LABELS = {
  // prettier-ignore
  pt: ['Domingo e Feriado','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  // prettier-ignore
  en: ['Sunday and Holidays','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'],
};

/** Label to show when NO open hours are defined for the day (by language) */
export const CLOSE_LABELS = {
  pt: 'Encerrado',
  en: 'Closed',
};

/** Label to show in the map after click by language */
export const MAP_POPUP_TEXT = {
  pt: 'Ver Direções',
  en: 'See Directions',
};

/** Available languages - used as language confirmation when changing language.
 * Add the translations in all files in the ../../data/ folder and langConfig.js before adding here
 */
export const AVAIL_LANG = ['pt', 'en'];
