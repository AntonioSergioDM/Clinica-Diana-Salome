//
//////////////////////////////////////////////
//////////////////////////////////////////////
/////// Tabbed Component - 'Operations' //////
// /// Elements
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// /// Event handlers
// // event delegation
// tabsContainer.addEventListener('click', function (e) {
//   // get the clicked button (even if the <span> is pressed)
//   const clicked = e.target.closest('.operations__tab');

//   // Guard Clause - stops if click is on the tab and not on buttons
//   if (!clicked) return;

//   // change style - 'active' style
//   tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');

//   // Activate content area
//   const data = `operations__content--${clicked.dataset.tab}`;
//   tabsContent.forEach(element => {
//     if (element.classList.contains(data))
//       element.classList.add('operations__content--active');
//     else element.classList.remove('operations__content--active');
//   });
// });
/////////////////////////////////////////////

//

/////////////////////////////////////////////
//
//////////////////////////////////////////////
/////////////////////////////////////////////
//
import * as model from './model';
import navView from './Views/navView';
import openHoursView from './Views/openHoursView';
import sectionView from './Views/sectionView';
import servicesView from './Views/servicesView';
import map from './Views/map';
import sliderView from './Views/sliderView';
import footerView from './Views/footerView';
import modalView from './Views/modalView';

/////////////////// SERVICES /////////////////////

//////////////// PAGE NAVIGATION ////////////////
const controlNavLinkClick = function (id) {
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  else modalView.openWindow();
};
const controlLang = function (lang) {
  if (lang === model.state.language) return;

  model.changeLang(lang);

  navView.update(model.state.labels);
  openHoursView.update(model.state.openHours);
  sectionView.update(model.state.labels);
  footerView.update(model.state.footer);
  servicesView.update(model.state.services);
  sliderView.update(model.state.testimonials);

  map.setLang(model.state.language);
};

//////////////// SECTION TITLES ////////////////

//////////////////// SLIDER ////////////////////

///////////////////// MAP /////////////////////

/////////////// OPENING HOURS ///////////////

/////////////// FOOTER ///////////////

//////////////// MODAL WINDOW ////////////////
const controlSendEmail = function (data) {
  const { name, phone, email, message } = data;
  console.log(name, email, phone, message);
  // window.open(
  //   `mailto:test@example.com?subject=Hello There&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/`
  // );

  // window.open('tel:259 104 774');
};
modalView.addHandlerSubmitForm(controlSendEmail);

const init = function () {
  // Render
  navView.render(model.state.labels);
  openHoursView.render(model.state.openHours);
  sectionView.render(model.state.labels);
  footerView.render(model.state.footer);
  servicesView.render(model.state.services);
  sliderView.render(model.state.testimonials);

  // Map
  map.loadMap();
  map.setLang(model.state.language);

  // Handlers
  navView.addHandlerLinkClicked(controlNavLinkClick);
  navView.addHandlerLanguage(controlLang);
};
init();
