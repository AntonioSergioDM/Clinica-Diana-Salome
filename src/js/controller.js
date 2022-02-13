import { COORDS, imgPaths, MAP_ZOOM_LEVEL, markerIconOptions } from './config';

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
/// Modal window - end
//////////////////////////////////////////////
//
//////////////////////////////////////////////
////////////// Smooth Scrolling //////////////
// Elements
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Event Handlers
/// 'Learn more' button
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/// Page Navigation
// Event delegation - listener in the parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//////////////////////////////////////////////
//
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
  threshold: 0.15,
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
const slider = function () {
  /// Elements
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  /// State Variables
  // Current and max slide
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  /// Functions
  const goToSlide = function (slide) {
    // Side by side
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    // Activate dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const nextSlide = function () {
    // Update current slide
    curSlide++;

    // Check the limits
    if (curSlide > maxSlide) curSlide = 0;

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    // Update current slide
    curSlide--;

    // Check the limits
    if (curSlide < 0) curSlide = maxSlide;

    goToSlide(curSlide);
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const init = function () {
    createDots();
    goToSlide(curSlide);
  };
  init();

  /// Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  dotContainer.addEventListener('click', function (e) {
    // only the dot buttons
    if (!e.target.classList.contains('dots__dot')) return;

    goToSlide(e.target.dataset.slide);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  });
};
slider();
////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MAP //////////////////////////
import * as L from 'leaflet';
const loadMap = function () {
  const myMap = L.map('map').setView(COORDS, MAP_ZOOM_LEVEL);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);

  const myIcon = L.icon(markerIconOptions);

  const myMarker = L.marker(COORDS, { icon: myIcon }).addTo(myMap);
};

loadMap();
