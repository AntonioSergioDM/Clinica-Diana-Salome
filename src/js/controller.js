import * as model from './model';
import navView from './Views/navView';
import openHoursView from './Views/openHoursView';
import sectionView from './Views/sectionView';
import chronoView from './Views/chronoView';
import servicesView from './Views/servicesView';
import map from './Views/map';
import sliderView from './Views/sliderView';
import faqView from './Views/faqView';
import footerView from './Views/footerView';
import modalView from './Views/modalView';
import teamView from './Views/teamView';
import contactsView from './Views/contactsView';

//////////////// PAGE NAVIGATION ////////////////
const controlNavLinkClick = function (id) {
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  else modalView.openWindow();
};
const controlLang = function (lang) {
  if (lang === model.state.language) return;

  model.changeLang(lang);

  navView.update(model.state.nav);
  openHoursView.update(model.state.openHours);
  sectionView.update(model.state.labels);
  chronoView.update(model.state.chrono);
  teamView.update(model.state.team.members);
  servicesView.update(model.state.services);
  sliderView.update(model.state.testimonials);
  faqView.update(model.state.faq);
  footerView.update(model.state.footer);
  contactsView.update(model.state.contacts);

  map.setLang(model.state.language);
};

////////////////// OPENING HOURS //////////////////

///////////////// SECTION TITLES /////////////////

///////////////////// ABOUT /////////////////////

///////////////////// TEAM /////////////////////
const controlTeam = function (id) {
  model.changeTeamMember(id);
  teamView.setDescription(model.state.team.description).changeActiveMember(id);
};

/////////////////// SERVICES /////////////////////

///////////////////// MAP /////////////////////

//////////////////// SLIDER ////////////////////

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
    .addHandlerLinkClicked(controlNavLinkClick)
    .addHandlerLanguage(controlLang);
  openHoursView.render(model.state.openHours);
  sectionView.render(model.state.labels);
  chronoView.render(model.state.chrono);
  teamView.render(model.state.team.members).addHandlerClickMember(controlTeam);
  servicesView.render(model.state.services);
  sliderView.render(model.state.testimonials);
  faqView.render(model.state.faq).addHandlerQuestion(controlFAQ);
  footerView.render(model.state.footer);
  contactsView.render(model.state.contacts);

  // Map
  map.loadMap().setLang(model.state.language);

  // Handlers
  modalView.addHandlerSubmitForm(controlSendEmail);
};
init();
