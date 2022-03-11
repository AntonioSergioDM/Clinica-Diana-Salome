import { HEADER_TIMER_SEC } from '../Config/config';
import View from './View';
import img from 'url:../../img/header/*';

class HeaderView extends View {
  _parentElement = document.querySelector('.header__title');

  _currentImg = 0;
  _currentDiv = 0;

  render(data) {
    super.render(data);
    this._imgElements = this._parentElement.querySelectorAll('.header__img');
    this.addHandlerLoad(this.changeVisibleImage.bind(this));
    setInterval(this.loadNextImage.bind(this), HEADER_TIMER_SEC * 1000);
  }

  loadNextImage() {
    this._currentImg++;
    if (this._currentImg >= this._data.length) this._currentImg = 0;

    this._imgElements[this._currentImg].src
      ? this.changeVisibleImage()
      : (this._imgElements[this._currentImg].src =
          img[this._data[this._currentImg]]);
    return this;
  }

  changeVisibleImage() {
    this._imgElements.forEach(el => el.classList.add('fade'));
    this._imgElements[this._currentImg].classList.remove('fade');
    return this;
  }

  addHandlerLoad(handler) {
    this._imgElements.forEach(el => el.addEventListener('load', handler));
    return this;
  }

  _generateMarkup() {
    return `${this._data.map(this._generteItem)}
        <div class="header__h1">
          <h1>
            Clínica Médica Dentária <br />
            Drª Diana Salomé
          </h1>
        </div>
      `;
  }
  _generteItem(data, i) {
    return `
        <img
          class="header__img ${i ? 'img2 fade' : ''}"
          alt="Clinica Diana Salomé"
          ${i ? '' : `src="${img[data]}"`}
        />
        `;
  }
}

export default new HeaderView();
