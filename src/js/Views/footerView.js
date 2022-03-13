import View from './View';

class FooterView extends View {
  _parentElement = document.querySelector('.footer__nav');

  _generateMarkup() {
    return this._data.map(this._generateItem).join('') + this._generateSocial();
  }

  _generateItem(data) {
    return `
    <li class="footer__item">
      <a class="footer__link" href="#${data.id}">${data.title}</a>
    </li>
    `;
  }

  _generateSocial() {
    return `
    <li class="footer__item">
      <a
        class="footer__logo"
        href="https://www.facebook.com/clinicadianasalome/"
        target="_blank"
        aria-label="facebook"
      >
        <svg>
          <use xlink:href="${this._icons}#icon-facebook"></use>
        </svg>
      </a>
      <a
        class="footer__logo"
        href="https://www.instagram.com/clinicamddianasalome/"
        target="_blank"
        aria-label="instagram"
      >
        <svg>
          <use xlink:href="${this._icons}#icon-instagram"></use>
        </svg>
      </a>
    </li>
    `;
  }
}

export default new FooterView();
