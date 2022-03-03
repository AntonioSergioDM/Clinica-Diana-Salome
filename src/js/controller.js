// Polyfiling
// array methods and such
import 'core-js/stable/array';
// async functions
// import 'regenerator-runtime/runtime';

// import the model and views
import * as model from './model';
import navView from './Views/navView';
import openHoursView from './Views/openHoursView';
import sectionView from './Views/sectionView';
import chronoView from './Views/chronoView';
import servicesView from './Views/servicesView';
import map from './Views/map';
import testimonialView from './Views/testimonialView';
import faqView from './Views/faqView';
import footerView from './Views/footerView';
import modalView from './Views/modalView';
import teamView from './Views/teamView';
import contactsView from './Views/contactsView';
import headerView from './Views/headerView';
import homeView from './Views/homeView';
import agreementsView from './Views/agreementsView';
import OverView from './Views/OverView';

const controlDisplay = function () {
  // Get ID in URL
  const id = window.location.hash.slice(1);

  OverView.hideAll().loading();

  switch (id) {
    // case 'development':
    //   OverView.showAll();
    //   // modalView.closeWindow();
    //   break;
    case 'about':
      headerView.show();
      chronoView.show();
      break;
    case 'team':
      teamView.update(model.state.team).setActive(-1).show();
      break;
    case 'services':
      servicesView.update(model.state.services).show();
      break;
    case 'faq':
      faqView.update(model.state.faq).show();
      break;
    case 'contacts':
      contactsView.update(model.state.contacts).show();
      map.show();
      openHoursView.update(model.state.openHours).show();
      break;
    case 'agreements':
      agreementsView.show();
      break;
    case 'home':
      headerView.show();
      chronoView.show();
      homeView.update(model.state.home).show();
      agreementsView.show();
      contactsView.update(model.state.contacts).show();
      map.show();
      openHoursView.update(model.state.openHours).show();
      testimonialView.update(model.state.testimonials).show();
      break;
    default:
      window.history.pushState(null, '', '#home');
      controlDisplay();
  }
  OverView.scroll2Top();
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlDisplay)
);
//////////////// PAGE NAVIGATION ////////////////
const controlLang = function (lang) {
  if (lang === model.state.language) return;

  model.changeLang(lang);

  navView.update(model.state.nav).setLang(model.state.language);
  footerView.update(model.state.footer);
  sectionView.update(model.state.labels);

  // openHoursView.update(model.state.openHours);
  // chronoView.update(model.state.chrono);
  // teamView.update(model.state.team);
  // servicesView.update(model.state.services);
  // testimonialView.update(model.state.testimonials);
  // faqView.update(model.state.faq);
  // contactsView.update(model.state.contacts);
  // homeView.update(model.state.home);

  // agreementsView.update(model.state.agreements);

  map.setLang(model.state.language);
};

////////////////// OPENING HOURS //////////////////

///////////////// SECTION TITLES /////////////////

///////////////////// ABOUT /////////////////////

///////////////////// TEAM /////////////////////

/////////////////// SERVICES /////////////////////

///////////////////// MAP /////////////////////

///////////////// Testimonials /////////////////

///////////////////// FAQ /////////////////////
const controlFAQ = function (id) {
  if (faqView.isActive(id)) {
    faqView.hideAnswer(id);
    return;
  }

  model.state.faq.forEach((_, i) => {
    if (i != id) faqView.hideAnswer(i);
  });

  faqView.showAnswer(id, { behavior: 'smooth' });
};

/////////////////// FOOTER ///////////////////

/////////////////////////////////////////////////
//////////////// Initialization ////////////////
///////////////////////////////////////////////
const init = function () {
  // Render
  navView
    .render(model.state.nav)
    .addHandlerLanguage(controlLang)
    .setLang(model.state.language);
  footerView.render(model.state.footer);
  sectionView.render(model.state.labels);

  // openHoursView.render(model.state.openHours);
  // chronoView.render(model.state.chrono);
  // teamView.render(model.state.team);
  // servicesView.render(model.state.services);
  // testimonialView.render(model.state.testimonials);
  // faqView.render(model.state.faq);
  // contactsView.render(model.state.contacts);
  // homeView.render(model.state.home);
  agreementsView.render(model.state.agreements);

  // Initializers
  map.loadMap().setLang(model.state.language);

  // Handlers
  faqView.addHandlerQuestion(controlFAQ);
  // modalView.addHandlerSubmitForm(controlSendEmail);

  controlDisplay();
};
init();
