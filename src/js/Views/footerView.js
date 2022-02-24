import View from './View';
import face from 'url:../../img/facebook.png';
import insta from 'url:../../img/instagram.png';

class FooterView extends View {
  _parentElement = document.querySelector('.footer__nav');

  _generateMarkup() {
    return (
      this._data.map(data => this._generateItem(data)).join('') +
      this._generateSocial()
    );
  }

  _generateItem(data) {
    return `
    <li class="footer__item">
      <a class="footer__link" href="#section--${data.id}">${data.title}</a>
    </li>
    `;
  }

  _generateSocial() {
    return `
    <li class="footer__item">
      <a
        class="footer__link"
        href="https://www.facebook.com/clinicadianasalome/"
        target="_blank"
        ><img
          class="nav__logo"
          src="${face}"
          alt="facebook/clinicadianasalome"
      /></a>
    </li>
    <li class="footer__item">
      <a
        class="footer__link"
        href="https://www.instagram.com/clinicamddianasalome/"
        target="_blank"
        ><img
          class="nav__logo"
          src="${insta}"
          alt="instagram/clinicadianasalome"
      /></a>
    </li>
    `;
  }
}

export default new FooterView();
