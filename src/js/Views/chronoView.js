import { IMG_TODAY } from '../../data/about';
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
  }

  _generateMarkup() {
    this._numItem = 0;
    return (
      this._data
        .map(
          function (data) {
            if (typeof data === 'number') return this._generateYear(data);
            else {
              this._numItem++;
              return this._generateItem(data);
            }
          }.bind(this)
        )
        .join('') +
      this._generateItem({
        date: 'Hoje',
        text: 'Estamos à sua espera',
        image: IMG_TODAY,
        icon: 'icon-more-horizontal',
      }) +
      this._generateLine()
    );
  }

  _generateLine() {
    return `<div class="chrono__line"></div>`;
  }

  _generateYear(year) {
    return `
    ${this._numItem ? '<div class="chrono__space-half"></div>' : ''}
    <div class="chrono__year"><button class="year">${year}</button></div>
    `;
  }

  _generateItem(data) {
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
            xlink:href="${this._icons}#${data.icon || 'icon-more-vertical'}
          "></use>
        </svg>
      </div>
      <div class="chrono__right">
        ${this._numItem % 2 === 0 ? image(data) : text(data)}
      </div>
    </div>
    `;
  }
}

export default new ChronoView();
