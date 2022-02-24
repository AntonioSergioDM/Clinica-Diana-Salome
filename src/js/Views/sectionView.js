import View from './View';

class SectionTitlesView extends View {
  _sections = document.querySelectorAll('.section[id]');

  _observer = new IntersectionObserver(this._revealSection, {
    root: null,
    threshold: 0.1,
  });

  constructor() {
    super();
    this._sections.forEach(section => {
      section.classList.add('section--hidden');
      this._observer.observe(section);
    });
  }

  _revealSection(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    //only works once
    observer.unobserve(entry.target);
  }

  render(data, ...others) {
    this._overrideSuper(super.render.bind(this), data, ...others);
  }
  update(data, ...others) {
    this._overrideSuper(super.update.bind(this), data, ...others);
  }

  _overrideSuper(superFunction, data, ...others) {
    this._allData = data;
    this._sections.forEach(
      function (section) {
        const id = section.getAttribute('id').split('-').at(-1);
        this._parentElement = section.querySelector('.section__title');
        superFunction(data[id], ...others);
      }.bind(this)
    );
  }

  _generateMarkup() {
    return `
    <h2 class="section__description">${this._data.title}</h2>
    <h3 class="section__header">
    ${this._data.intro}
    </h3>
    `;
  }
}

export default new SectionTitlesView();
