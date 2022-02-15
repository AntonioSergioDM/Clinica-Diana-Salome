import View from './View';

class NavView extends View {
  _parentElement = document.querySelector('.nav');

  _logo = this._parentElement.querySelector('img');
  _linksListEl = this._parentElement.querySelector('.nav__links'); // <ul> element
  _links = this._parentElement.querySelectorAll('.nav__link'); // list of <a> elements

  constructor() {
    super();
    this._addHandlerHover();

    const navHeight = this._parentElement.getBoundingClientRect().height;
    const obsOptions = {
      root: null, //null corresponds to viewport
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const stickyObserver = new IntersectionObserver(
      this._sticky.bind(this),
      obsOptions
    );
    stickyObserver.observe(this._parentElement.parentElement);
  }

  addHandlerLinkClicked(handler) {
    this._linksListEl.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        // if not link
        if (!e.target.classList.contains('nav__link')) return;

        const id = e.target.getAttribute('href');
        handler(id);
      }.bind(this)
    );
  }

  _addHandlerHover() {
    this._parentElement.addEventListener(
      'mouseover',
      this._hoverOpacity(0.5).bind(this)
    );
    this._parentElement.addEventListener(
      'mouseout',
      this._hoverOpacity(1).bind(this)
    );
  }

  _hoverOpacity(opacity) {
    return function (e) {
      // If not a link
      if (!e.target.classList.contains('nav__link')) return;

      const link = e.target;

      this._links.forEach(element => {
        if (!element.isEqualNode(link)) element.style.opacity = opacity;
      });
      this._logo.style.opacity = opacity;
    };
  }

  /** To be used as a callback in an observer*/
  _sticky(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) this._parentElement.classList.add('sticky');
    else this._parentElement.classList.remove('sticky');
  }
}

export default new NavView();
