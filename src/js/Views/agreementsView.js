import View from './View';

class AgreementsView extends View {
  _parentElement = document.querySelector('.agreements');

  _generateMarkup() {
    return this._data.map(data => this._generateItem(data)).join('');
  }

  _generateItem(data) {
    return `
        <li class="agreements__item">
          <img
            class="agreements__img"
            src="${data.image}"
            alt="${data.title}"
          />
        </li>
      `;
  }
}

export default new AgreementsView();
