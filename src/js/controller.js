import { imgPaths } from './config';

///////////////////////////////////////
//////////// Modal window /////////////
// Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//Functions
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Handlers
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////// Send mail////////////////
const btnSendMail = document.querySelector('.btn--send-mail');

btnSendMail.addEventListener('click', function (e) {
  e.preventDefault();
  window.open('mailto:test@example.com');
});

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
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    if (id !== '#')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//////////////////////////////////////////////
//
//////////////////////////////////////////////
//////////// Menu fade animation ////////////
/// Elements
const nav = document.querySelector('.nav');

/// Functions
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
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
openHoursView.render(OPEN_HOURS);
