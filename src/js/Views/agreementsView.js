import View from './View';

class AgreementsView extends View {
  _parentElement = document.querySelector('.agreements');

  _generateMarkup() {
    return this._data.map(this._generateItem).join('');
  }

  _generateItem(data) {
    return `
        <li class="agreements__item">
          ${
            data.image
              ? `
              <img
                class="agreements__img"
                src="${data.image}"
                alt="${data.title}"
              />`
              : data.title //`<p class="agreements__img">${data.title}</p>`
          }
        </li>
      `;
  }
}

export default new AgreementsView();
