import { AVAIL_LANG, DEFAULT_LANG, LOGO_URL, WEEK_ORDER } from './config';
import { CLOSE_LABELS, OPEN_HOURS, WEEK_LABELS } from '../data/openHours';
import { TESTIMONIALS } from '../data/testimonials';
import { LANG_FOOTER, LANG_LABELS } from './Config/langConfig';
import { LEARN_MORE_BTN, SERVICES } from '../data/services';

// import OPEN_HOURS_URL from 'url:../data/test.json.data';
// (async function (url) {
//   console.log(url);
//   const open_response = await fetch(OPEN_HOURS_URL);
//   console.log(await open_response.json());
// })(OPEN_HOURS_URL);

export const state = {
  language: DEFAULT_LANG,
  labels: {},
  openHours: {},
  services: [],
  testimonials: [],
  footer: {},
};

const loadLabels = function () {
  state.labels = LANG_LABELS[state.language];
  state.labels.logo = LOGO_URL;

  state.footer = LANG_FOOTER[state.language];
};
const loadOpenHours = function () {
  WEEK_ORDER.forEach(
    (day, i) =>
      (state.openHours[day] = {
        label: WEEK_LABELS[state.language][i],
        ...OPEN_HOURS[day],
      })
  );
  state.openHours.closeLabel = CLOSE_LABELS[state.language];
};
const loadServices = function () {
  state.services = SERVICES[state.language];
  state.services.learnMore = LEARN_MORE_BTN[state.language];
};
const loadTestimonials = function () {
  state.testimonials = TESTIMONIALS[state.language];
};

const load = function () {
  loadLabels();
  loadOpenHours();
  loadServices();
  loadTestimonials();
};

/**
 * Changes the state language if valid
 * @param {string} lang code of language, e.g.: 'pt'
 * @throws 'Language not available' if not in the AVAIL_LANG array in config.js
 */
export const changeLang = function (lang = DEFAULT_LANG) {
  if (!AVAIL_LANG.some(l => l === lang))
    throw new Error('Language not available');

  state.language = lang;
  load();
};

load();
