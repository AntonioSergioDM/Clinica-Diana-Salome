import View from './View';

class ChronoView extends View {
  _parentElement = document.querySelector('.chrono');

  constructor() {
    super();
    this.addHandlerYear();
  }

  addHandlerYear() {
    this._parentElement.addEventListener('click', function (e) {
      const element = e.target;

      if (!element.classList.contains('year')) return;

      element.scrollIntoView({ behavior: 'smooth' });
    });
    return this;
  }

  _generateMarkup() {
    this._numItem = 0;
    return (
      this._data.map(this._generateItem.bind(this)).join('') +
      this._generateExtraMarkup()
    );
  }

  _generateExtraMarkup() {
    return this._generateLine();
  }

  _generateItem(data) {
    if (typeof data === 'number') return this._generateYear(data);
    else {
      this._numItem++;
      return this._generateEvent(data);
    }
  }

  _generateYear(year) {
    return `
    ${this._numItem ? '<div class="chrono__space-half"></div>' : ''}
    <div class="chrono__year"><button class="year">${year}</button></div>
    `;
  }

  _generateEvent(data) {
    const image = data => `<img src="${data.image}" alt="${data.text}" />`;
    const text = data => `<h4>${data.date}</h4><h3>${data.text}</h3>`;

    return `
    <div class="chrono__space"></div>
    <div class="chrono__point">
      <div class="chrono__left">
        ${this._numItem % 2 === 0 ? text(data) : image(data)}
      </div>
      <div class="chrono__middle">
        <svg>
          <use 
            xlink:href="${this._icons}#${data.icon || 'icon-disc'}
          "></use>
        </svg>
      </div>
      <div class="chrono__right">
        ${this._numItem % 2 === 0 ? image(data) : text(data)}
      </div>
    </div>
    `;
  }

  _generateLine() {
    return `<div class="chrono__line"></div>
    <div class="chrono__line-half"></div>`;
  }
}

export default new ChronoView();
