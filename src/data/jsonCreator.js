import { WEEK_ORDER } from '../js/Config/constants';
import { FOOTER, NAV, LOGO_URL } from '../js/Config/config';
import {
  AVAIL_LANG,
  DEFAULT_LANG,
  LEARN_MORE_BTN,
  CLOSE_LABELS,
  WEEK_LABELS,
} from '../js/Config/langConfig';
import { SECTION_TITLES } from './sections';
import { OPEN_HOURS } from './openHours';
import { TESTIMONIALS } from './testimonials';
import { SERVICES } from './services';
import { FAQ } from './faq';
import { CHRONOLOGY, TODAY_ACHIEV } from './chrono';
import { TEAM } from './team';
import { CONTACTS } from './contacts';
import { HOME } from './home';
import { AGREEMENTS } from './agreements';
import { IMAGES_HEADER } from './header';

const download = function (content, fileName = '', contentType = 'json') {
  const str = JSON.stringify(content);
  const a = document.createElement('a');
  const file = new Blob([str], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName + '.json.data';
  a.click();
  URL.revokeObjectURL(a.href);
};

const state = {
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
  header: [],

  loadLabels() {
    this.labels = SECTION_TITLES[this.language];
    this.labels.logo = LOGO_URL;

    this.footer = FOOTER.map(id => ({
      ...this.labels[id],
      id,
    }));
    this.nav = NAV.map(id => ({
      ...this.labels[id],
      id,
    }));
    return this.labels;
  },
  loadOpenHours() {
    WEEK_ORDER.forEach(
      (day, i) =>
        (this.openHours[day] = {
          label: WEEK_LABELS[this.language][i],
          ...OPEN_HOURS[day],
        })
    );
    this.openHours.closeLabel = CLOSE_LABELS[this.language];
    return this.openHours;
  },
  loadServices() {
    this.services = SERVICES[this.language];
    return this.services;
  },
  loadTestimonials() {
    this.testimonials = TESTIMONIALS[this.language];
    return this.testimonials;
  },
  loadFAQ() {
    this.faq = FAQ[this.language];
    return this.faq;
  },
  loadChrono() {
    this.chrono = CHRONOLOGY[this.language];
    const year = new Date().getFullYear();
    if (!this.chrono.includes(year)) this.chrono.push(year);
    if (!this.chrono.includes(TODAY_ACHIEV[this.language]))
      this.chrono.push(TODAY_ACHIEV[this.language]);
    return this.chrono;
  },
  loadTeam() {
    this.team = TEAM[this.language];
    return this.team;
  },
  loadContacts() {
    this.contacts = CONTACTS[this.language];
    return this.contacts;
  },
  loadHome() {
    this.home = HOME[this.language];
    return this.home;
  },
  loadAgreements() {
    this.agreements = AGREEMENTS;
    return this.agreements;
  },
  loadHeader() {
    this.header = IMAGES_HEADER;
    return this.header;
  },
  loadLearnMore() {
    this.learnMore = LEARN_MORE_BTN[this.language];
  },

  load() {
    this.loadLabels();
    this.loadOpenHours();
    this.loadServices();
    this.loadTestimonials();
    this.loadFAQ();
    // this.loadChrono();
    this.loadTeam();
    this.loadContacts();
    this.loadHome();
    this.loadAgreements();
    this.loadHeader();
    this.loadLearnMore();
  },
  changeLang(lang = DEFAULT_LANG) {
    if (!AVAIL_LANG.some(l => l === lang))
      throw new Error('Language not available');

    this.language = lang;
    this.load();
  },
};

AVAIL_LANG.forEach(lang => {
  state.changeLang(lang);
  download(state, lang);
});

export const empty = true;
