import { IMAGES_HEADER, IMG_TIMER_SEC } from '../../data/header';
import View from './View';

class HeaderView extends View {
  _parentElement = document.querySelector('.header__title');

  _images = IMAGES_HEADER;
  _currentImg = 0;

  constructor() {
    super();
    this.render('empty');
    this._imgElements = this._parentElement.querySelectorAll('.header__img');
    setInterval(this.nextImage.bind(this), IMG_TIMER_SEC * 1000);
    this._imgElements.forEach(
      function (el) {
        el.addEventListener(
          'load',
          function (e) {
            this._imgElements.forEach(el => el.classList.toggle('fade'));
          }.bind(this)
        );
      }.bind(this)
    );
  }
  nextImage() {
    this._currentImg++;
    if (this._currentImg >= this._images.length) this._currentImg = 0;

    this._imgElements[this._currentImg % 2].src =
      this._images[this._currentImg];
  }

  _generateMarkup() {
    return `
        <img
          src="${this._images[this._currentImg]}"
          class="header__img"
          alt="Clinica Diana Salomé"
        />
        <img
          src="${this._images[this._currentImg + 1]}"
          class="header__img img2 fade"
          alt="Clinica Diana Salomé"
        />
        <div class="header__h1">
          <h1>
            Clínica Médica Dentária <br />
            Dra Diana Salomé
          </h1>
        </div>
      `;
  }
}

export default new HeaderView();
