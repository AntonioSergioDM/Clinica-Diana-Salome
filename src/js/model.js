import { DEFAULT_LANG, LOGO_URL, WEEK_ORDER } from './config';
import { CLOSE_LABELS, OPEN_HOURS, WEEK_LABELS } from '../data/openHours';
import { TESTIMONIALS } from '../data/testimonials';
import { LANG_LABELS } from '../data/langConfig';

export const state = {
  language: DEFAULT_LANG,
  openHours: {},
  testimonials: [],
  labels: {},
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

const loadTestimonials = function () {
  state.testimonials = TESTIMONIALS[state.language];
};
const loadLabels = function () {
  state.labels = LANG_LABELS[state.language];
  state.labels.logo = LOGO_URL;
};

const load = function () {
  loadOpenHours();
  loadTestimonials();
  loadLabels();
};

export const changeLang = function (lang) {
  state.language = lang;
  load();
};

load();
