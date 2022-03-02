import { WEEK_ORDER } from './Config/constants';
import { FOOTER, NAV, LOGO_URL } from './Config/config';
import {
  AVAIL_LANG,
  DEFAULT_LANG,
  LEARN_MORE_BTN,
  CLOSE_LABELS,
  WEEK_LABELS,
} from './Config/langConfig';
import { LANG_LABELS } from '../data/sections';
import { OPEN_HOURS } from '../data/openHours';
import { TESTIMONIALS } from '../data/testimonials';
import { SERVICES } from '../data/services';
import { FAQ } from '../data/faq';
import { CHRONOLOGY, TODAY_ACHIEV } from '../data/chrono';
import { TEAM } from '../data/team';
import { CONTACTS } from '../data/contacts';
import { HOME } from '../data/home';
import { AGREEMENTS } from '../data/agreements';
// import data from 'url:../data/json/**';
// console.log(data);

// import OPEN_HOURS_URL from 'url:../data/json/agreements.json.data';
// (async function (url) {
//   console.log(url);
//   const open_response = await fetch(OPEN_HOURS_URL);
//   console.log(await open_response.json());
// })(OPEN_HOURS_URL);

export const state = {
  language: DEFAULT_LANG,
  labels: {},
  openHours: {},
  chrono: [],
  services: [],
  testimonials: [],
  faq: [],
  nav: [],
  footer: [],
  team: [],
  contacts: [],
  home: [],
  agreements: [],
};

export const loadLabels = function () {
  if (state._labelsLang === state.language) return state.labels;
  state._labelsLang = state._navLang = state._footerLang = state.language;

  state.labels = LANG_LABELS[state.language];
  state.labels.logo = LOGO_URL;

  state.footer = FOOTER.map(id => ({
    ...state.labels[id],
    id,
  }));
  state.nav = NAV.map(id => ({
    ...state.labels[id],
    id,
  }));
  return state.labels;
};
export const loadOpenHours = function () {
  if (state._openHoursLang === state.language) return state.openHours;
  state._openHoursLang = state.language;

  WEEK_ORDER.forEach(
    (day, i) =>
      (state.openHours[day] = {
        label: WEEK_LABELS[state.language][i],
        ...OPEN_HOURS[day],
      })
  );
  state.openHours.closeLabel = CLOSE_LABELS[state.language];
  return state.openHours;
};
export const loadServices = function () {
  if (state._servicesLang === state.language) return state.services;
  state._servicesLang = state.language;

  state.services = SERVICES[state.language];
  state.services.learnMore = LEARN_MORE_BTN[state.language];
  return state.services;
};
export const loadTestimonials = function () {
  if (state._testimonialsLang === state.language) return state.testimonials;
  state._testimonialsLang = state.language;

  state.testimonials = TESTIMONIALS[state.language];
  return state.testimonials;
};
export const loadFAQ = function () {
  if (state._faqLang === state.language) return state.faq;
  state._faqLang = state.language;

  state.faq = FAQ[state.language];
  return state.faq;
};
export const loadChrono = function () {
  if (state._chronoLang === state.language) return state.chrono;
  state._chronoLang = state.language;

  state.chrono = CHRONOLOGY[state.language];
  const year = new Date().getFullYear();
  if (!state.chrono.includes(year)) state.chrono.push(year);
  if (!state.chrono.includes(TODAY_ACHIEV[state.language]))
    state.chrono.push(TODAY_ACHIEV[state.language]);
  return state.chrono;
};
export const loadTeam = function () {
  if (state._teamLang === state.language) return state.team;
  state._teamLang = state.language;

  state.team = TEAM[state.language];
  return state.team;
};
export const loadContacts = function () {
  if (state._contactsLang === state.language) return state.contacts;
  state._contactsLang = state.language;

  state.contacts = CONTACTS[state.language];
  return state.contacts;
};
export const loadHome = function () {
  if (state._homeLang === state.language) return state.openHours;
  state._openHoursLang = state.language;

  state.home = HOME[state.language];
  state.home.learnMore = LEARN_MORE_BTN[state.language];
  return state.home;
};
export const loadAgreements = function () {
  if (state._agreementsLang === state.language) return state.agreements;
  state._agreementsLang = state.language;

  state.agreements = AGREEMENTS;
  return state.agreements;
};

export const load = function () {
  loadLabels();
  loadOpenHours();
  loadServices();
  loadTestimonials();
  loadFAQ();
  loadChrono();
  loadTeam();
  loadContacts();
  loadHome();
  loadAgreements();
};

/**
 * Changes the description to the id nth member description. Defaults to No Active Members
 * @param {number} id
 * @returns Active team member description
 */
export const changeTeamMember = function (id = -1) {
  state.team.description = state.team._descriptions[id] || '';
  return state.team.description;
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
  state._agreementsLang = state.language; //does'nt change with language
  load();
};

load();
