import View from './View';

class NavView extends View {
  _parentElement = document.querySelector('.nav__links'); // <ul> element

  _nav = this._parentElement.closest('.nav');
  _logo = this._nav.querySelector('img');

  constructor() {
    super();
    this._addHandlerHover();

    // Sticky
    const navHeight = this._nav.getBoundingClientRect().height;
    const obsOptions = {
      root: null, //null corresponds to viewport
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const stickyObserver = new IntersectionObserver(
      this._sticky.bind(this),
      obsOptions
    );
    stickyObserver.observe(document.querySelector('.header'));
  }

  addHandlerLanguage(handler) {
    this._nav
      .querySelector('.nav__langs')
      .addEventListener('click', function (e) {
        e.preventDefault();
        if (!e.target.classList.contains('nav__lang')) return;

        const lang = e.target.textContent;
        handler(lang);
      });
    return this;
  }

  setLang(lang) {
    this._nav.querySelectorAll('.nav__lang').forEach(function (element) {
      if (element.textContent === lang) element.classList.add('active');
      else element.classList.remove('active');
    });
  }

  // addHandlerLinkClicked(handler) {
  //   this._parentElement.addEventListener(
  //     'click',
  //     function (e) {
  //       e.preventDefault();
  //       // if not link
  //       if (!e.target.classList.contains('nav__link')) return;

  //       const id = e.target.getAttribute('href').slice(1);
  //       handler(id);
  //     }.bind(this)
  //   );
  //   return this;
  // }

  _addHandlerHover() {
    this._parentElement.addEventListener(
      'mouseover',
      this._hoverOpacity(0.5).bind(this)
    );
    this._parentElement.addEventListener(
      'mouseout',
      this._hoverOpacity(1).bind(this)
    );
    return this;
  }

  _hoverOpacity(opacity) {
    return function (e) {
      // If not a link
      if (!e.target.classList.contains('nav__link')) return;

      const link = e.target;

      this._parentElement.querySelectorAll('.nav__link').forEach(element => {
        if (!element.isEqualNode(link)) element.style.opacity = opacity;
      });
      this._nav.querySelectorAll('.nav__lang').forEach(element => {
        if (!element.isEqualNode(link)) element.style.opacity = opacity;
      });
      // this._logo.style.opacity = opacity;
    };
  }

  /** To be used as a callback in the observer*/
  _sticky(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) this._nav.classList.add('sticky');
    else this._nav.classList.remove('sticky');

    return this;
  }

  _generateMarkup() {
    return this._data.map(this._generateItem).join('');
  }
  _generateItem(data) {
    return `
    <li class="nav__item">
      <a class="nav__link" href="#${data.id}">${data.title}</a>
    </li>
    `;
  }

  // _generateBtnContact(data) {
  //   return `
  //   <li class="nav__item">
  //     <a
  //       class="nav__link nav__link--btn btn--show-modal"
  //       href="#">
  //         ${data.nav}
  //     </a>
  //   </li>
  //   `;
  // }
}

export default new NavView();
