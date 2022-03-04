// Polyfiling
// array methods and such
import 'core-js/stable/array';
// async functions
import 'regenerator-runtime/runtime';

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
import { MAX_LOAD_ATTEMPS } from './Config/config';

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

const fail2Load = function (cascate = 0) {
  OverView.hideAll().loading();
  if (cascate < MAX_LOAD_ATTEMPS) init(false, cascate + 1);
  else
    headerView
      .renderError(
        'Something went wrong :(<br>Refresh the page to try again<br>If the problem persist try again later'
      )
      .show();
};

const controlLang = async function (lang) {
  if (lang === model.state.language) return;
  try {
    await model.changeLang(lang);

    footerView.update(model.state.footer);
    sectionView.update(model.state.labels);
    navView.update(model.state.nav).setLang(model.state.language);

    map.setLang(model.state.language);
    controlDisplay();
  } catch {
    fail2Load();
  }
};

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

const init = async function (handler = true, cascate = 0) {
  try {
    await model.load();
    // Render
    navView
      .render(model.state.nav)
      .addHandlerLanguage(controlLang)
      .setLang(model.state.language);
    footerView.render(model.state.footer);
    sectionView.render(model.state.labels);

    // Independent of language - atfter first render are never updated
    agreementsView.render(model.state.agreements);
    headerView.render(model.state.header);

    // Initializers
    map.loadMap().setLang(model.state.language);

    // Handlers
    faqView.addHandlerQuestion(controlFAQ);
    // modalView.addHandlerSubmitForm(controlSendEmail);

    controlDisplay();
    if (handler)
      ['hashchange'].forEach(ev => window.addEventListener(ev, controlDisplay));
  } catch {
    fail2Load(cascate);
  }
};

init();
