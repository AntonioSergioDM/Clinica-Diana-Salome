// Polyfiling
// import 'core-js/stable';
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

// Change ID in URL
// window.history.pushState(null, '', `#${model.state.recipe.id}`);
// get ID in URL
// const id = window.location.hash.slice(1);
// control when changeid in url
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));

const controlDisplay = function () {
  // Get ID in URL
  const id = window.location.hash.slice(1);
  // if (!id) return;

  OverView.hideAll().loading();

  switch (id) {
    case 'development':
      OverView.showAll();
      modalView.closeWindow();
      break;
    case 'about':
      chronoView.show();
      break;
    case 'team':
      teamView.setActive(-1).show();
      break;
    case 'services':
      servicesView.show();
      break;
    case 'faq':
      faqView.show();
      break;
    case 'contacts':
      contactsView.show();
      map.show();
      openHoursView.show();
      break;
    case 'agreements':
      agreementsView.show();
      break;
    case 'home':
      headerView.show();
      homeView.show();
      agreementsView.show();
      testimonialView.show();
      map.show();
      openHoursView.show();
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
// const controlNavLinkClick = function (id) {
//   window.history.pushState(null, '', `#${id}`);
//   console.log('controlLinkClick', id);
//   if (id) document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//   else modalView.openWindow();
// };

const controlLang = function (lang) {
  if (lang === model.state.language) return;

  model.changeLang(lang);

  sectionView.update(model.state.labels);
  navView.update(model.state.nav).setLang(model.state.language);
  footerView.update(model.state.footer);

  openHoursView.update(model.state.openHours);
  chronoView.update(model.state.chrono);
  teamView.update(model.state.team);
  servicesView.update(model.state.services);
  testimonialView.update(model.state.testimonials);
  faqView.update(model.state.faq);
  contactsView.update(model.state.contacts);
  homeView.update(model.state.home);

  // agreementsView.update(model.state.agreements);

  map.setLang(model.state.language);
};

////////////////// OPENING HOURS //////////////////

///////////////// SECTION TITLES /////////////////

///////////////////// ABOUT /////////////////////

///////////////////// TEAM /////////////////////
// const controlTeam = function (id) {
//   model.changeTeamMember(id);
//   teamView.setDescription(model.state.team.description).changeActiveMember(id);
// };

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

//////////////// MODAL WINDOW ////////////////
const controlSendEmail = function (data) {
  const { name, phone, email, message } = data;
  console.log(name, email, phone, message);
  // window.open(
  //   `mailto:test@example.com?subject=Hello There&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/`
  // );

  // window.open('tel:259 104 774');
};

/////////////////// FOOTER ///////////////////

/////////////////////////////////////////////////
//////////////// Initialization ////////////////
///////////////////////////////////////////////
const init = function () {
  // Render
  navView
    .render(model.state.nav)
    // .addHandlerLinkClicked(controlNavLinkClick)
    .addHandlerLanguage(controlLang)
    .setLang(model.state.language);
  openHoursView.render(model.state.openHours);
  sectionView.render(model.state.labels);
  chronoView.render(model.state.chrono);
  teamView.render(model.state.team); //.members)
  // .setDescription(model.state.team.description)
  // .addHandlerClickMember(controlTeam);
  servicesView.render(model.state.services);
  testimonialView.render(model.state.testimonials);
  faqView.render(model.state.faq).addHandlerQuestion(controlFAQ);
  footerView.render(model.state.footer);
  contactsView.render(model.state.contacts);
  homeView.render(model.state.home);
  agreementsView.render(model.state.agreements);

  // Map
  map.loadMap().setLang(model.state.language);

  // Handlers
  modalView.addHandlerSubmitForm(controlSendEmail);
};
init();
