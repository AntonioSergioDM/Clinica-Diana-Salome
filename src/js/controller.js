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

/////////////////// SERVICES /////////////////////
import servicesView from './Views/servicesView';
servicesView.render(model.state.services);

//////////////// PAGE NAVIGATION ////////////////
import navView from './Views/navView';
const controlNavLinkClick = function (id) {
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  else modalView.openWindow();
};

navView.render(model.state.labels);
navView.addHandlerLinkClicked(controlNavLinkClick);

//////////////// SECTION TITLES ////////////////
import sectionView from './Views/sectionView';
sectionView.render(model.state.labels);

//////////////////// SLIDER ////////////////////
import sliderView from './Views/sliderView';
sliderView.create(model.state.testimonials);

///////////////////// MAP /////////////////////
import map from './Views/map';
map.loadMap();
map.setLang(model.state.language);

/////////////// OPENING HOURS ///////////////
import openHoursView from './Views/openHoursView';
openHoursView.render(model.state.openHours);

/////////////// FOOTER ///////////////
import footerView from './Views/footerView';
footerView.render(model.state.footer);

//////////////// MODAL WINDOW ////////////////
import modalView from './Views/modalView';

const controlSendEmail = function (data) {
  const { name, phone, email, message } = data;
  console.log(name, email, phone, message);
  // window.open(
  //   `mailto:test@example.com?subject=Hello There&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/`
  // );

  // window.open('tel:259 104 774');
};
modalView.addHandlerSubmitForm(controlSendEmail);
