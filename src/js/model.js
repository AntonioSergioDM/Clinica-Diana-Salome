import { AVAIL_LANG, DEFAULT_LANG, LOGO_URL, WEEK_ORDER } from './config';
import { CLOSE_LABELS, OPEN_HOURS, WEEK_LABELS } from '../data/openHours';
import { TESTIMONIALS } from '../data/testimonials';
import { FOOTER, LANG_LABELS, NAV } from './Config/langConfig';
import { LEARN_MORE_BTN, SERVICES } from '../data/services';
import { FAQ } from '../data/faq';
import { CHRONOLOGY, TODAY_ACHIEV } from '../data/about';
import { TEAM } from '../data/team';
import { CONTACTS } from '../data/contacts';
import { HOME } from '../data/home';
import { AGREEMENTS } from '../data/agreements';

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
  chrono: [],
  services: [],
  testimonials: [],
  faq: [],
  nav: [],
  footer: [],
  team: { members: [], description: '', _descriptions: [] },
  contacts: [],
  home: [],
  agreements: [],
};

const loadLabels = function () {
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
const loadFAQ = function () {
  state.faq = FAQ[state.language];
};
const loadChrono = function () {
  state.chrono = CHRONOLOGY[state.language];
  const year = new Date().getFullYear();
  if (!state.chrono.includes(year)) state.chrono.push(year);
  state.chrono.push(TODAY_ACHIEV[state.language]);
};
const loadTeam = function () {
  state.team = TEAM[state.language];
  // TEAM[state.language].forEach((person, i) => {
  //   state.team.members[i] = { name: person.name, image: person.image };
  //   state.team._descriptions[i] = person.description;
  // });
};
const loadContacts = function () {
  state.contacts = CONTACTS[state.language];
};
const loadHome = function () {
  state.home = HOME[state.language];
  state.home.learnMore = LEARN_MORE_BTN[state.language];
};
const loadAgreements = function () {
  state.agreements = AGREEMENTS;
};

const load = function () {
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
  load();
};

load();
