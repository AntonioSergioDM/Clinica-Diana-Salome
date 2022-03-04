import { AVAIL_LANG, DEFAULT_LANG } from './Config/langConfig';
import dataLangURL from 'url:../data/json/*.json.data';

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
  header: [],
};

export const load = async function () {
  const newState = await (await fetch(dataLangURL[state.language])).json();
  Object.keys(newState).forEach(
    property => (state[property] = newState[property])
  );
  state.home.learnMore = state.learnMore;
  state.services.learnMore = state.learnMore;
};

/**
 * Changes the state language if valid
 * @async
 * @param {string} lang code of language, e.g.: 'pt'
 * @throws 'Language not available' if not in the AVAIL_LANG array in config.js
 */
export const changeLang = async function (lang = DEFAULT_LANG) {
  if (!AVAIL_LANG.some(l => l === lang))
    throw new Error('Language not available');

  state.language = lang;
  state._agreementsLang = state.language; //does'nt change with language
  await load();
};

//////////////////////////////////////////////
//////////////////// DEV ////////////////////
///////////////////////////////////////////
//// to create the language json files ////
// import { empty } from '../data/jsonCreator';
