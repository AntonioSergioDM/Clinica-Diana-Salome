import { imgPaths } from './config';

//
//////////////////////////////////////////////
//////////////////////////////////////////////
/////// Tabbed Component - 'Operations' //////
/// Elements
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/// Event handlers
// event delegation
tabsContainer.addEventListener('click', function (e) {
  // get the clicked button (even if the <span> is pressed)
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause - stops if click is on the tab and not on buttons
  if (!clicked) return;

  // change style - 'active' style
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  const data = `operations__content--${clicked.dataset.tab}`;
  tabsContent.forEach(element => {
    if (element.classList.contains(data))
      element.classList.add('operations__content--active');
    else element.classList.remove('operations__content--active');
  });
});
/////////////////////////////////////////////

//

////////////// Smooth Scrolling //////////////
// Elements
// const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Event Handlers
/// 'Learn more' button
// btnScrollTo.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//
//////////////////////////////////////////////
/////// Revealing elements on scroll  ////////
/// Elements
const allSections = document.querySelectorAll('.section');

/// Intersection Observer
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  //only works once
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

/////////////////////////////////////////////
//
//////////////////////////////////////////////
/////////// Lazy Loading Images /////////////
/// Elements
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = imgPaths[`imgLazy${entry.target.dataset.src}`];

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  // Remove observer
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
});
imgTargets.forEach(img => {
  imgObserver.observe(img);
});

/////////////////////////////////////////////
//
import * as model from './model';

//////////////// PAGE NAVIGATION ////////////////
import navView from './Views/navView';
const controlNavLinkClick = function (id) {
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};
navView.render(model.state.labels);
navView.addHandlerLinkClicked(controlNavLinkClick);

//////////////// SECTION TITLES ////////////////
import sectionTitlesView from './Views/sectionTitlesView';
sectionTitlesView.render(model.state.labels);

//////////////////// SLIDER ////////////////////
import sliderView from './Views/sliderView';
sliderView.create(model.state.testimonials);

///////////////////// MAP /////////////////////
import map from './Views/map';
map.loadMap();

/////////////// OPENING HOURS ///////////////
import openHoursView from './Views/openHoursView';
openHoursView.render(model.state.openHours);

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
