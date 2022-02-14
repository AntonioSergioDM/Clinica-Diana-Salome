import { imgPaths } from './config';

////////////// Send mail////////////////
const controlSendEmail = function (data) {
  const { name, phone, email, message } = data;
  console.log(name, email, phone, message);
  // window.open(
  //   `mailto:test@example.com?subject=Hello There&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/`
  // );

  // window.open('tel:259 104 774');
};
modalView.addHandlerSubmitForm(controlSendEmail);

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
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Event Handlers
/// 'Learn more' button
// btnScrollTo.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

/// Page Navigation
// Event delegation - listener in the parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // if not link
  if (!e.target.classList.contains('nav__link')) return;

  const id = e.target.getAttribute('href');
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
//////////// Menu fade animation ////////////
/// Elements
const nav = document.querySelector('.nav');

/// Functions
const handleHover = function (e) {
  // If not a link
  if (!e.target.classList.contains('nav__link')) return;

  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  siblings.forEach(element => {
    if (element !== link) element.style.opacity = this;
  });
  logo.style.opacity = this;
};
/// Event delegation
// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
/////////////////////////////////////////////
//
//////////////////////////////////////////////
/////////// Sticky navigation tab ///////////
/// Elements - some are defined above
//nav
//section1
const header = document.querySelector('.header');

/// Intersection Observer API
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;
const obsOptions = {
  root: null, //null corresponds to viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

/////////////////////////////////////////////
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
//////////////////////////////////////////////
////////////////// Slider ///////////////////
import sliderView from './Views/sliderView';
import { TESTIMONIALS } from '../data/testimonials';

sliderView.create(TESTIMONIALS);
////////////////////////////////////////////////////////////////////////////////////////////

////////////////// MAP //////////////////////////
import mapView from './Views/mapView';
mapView.loadMap();

////////// OPENING HOURS //////////////
import openHoursView from './Views/openHoursView';
import { OPEN_HOURS } from '../data/openHours';
import modalView from './Views/modalView';
openHoursView.render(OPEN_HOURS);
