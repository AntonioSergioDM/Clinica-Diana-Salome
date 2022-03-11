import View from './View';
import img from 'url:../../img/home/*';

class HomeView extends View {
  _parentElement = document.querySelector('.home');

  _generateMarkup() {
    return this._data.map(this._generateItem.bind(this)).join('');
  }
  _generateItem(data) {
    return `
        <section class="section">
          <div class="section__title">
            <h2 class="section__description">${data.title}</h2>
          </div>
          <div class="section__title home__body">
            <h3 class="section__header">${data.text}</h3>
            <img class="home__body__img" src="${img[data.image]}" alt="${
      data.title
    }"/>
            <a href="#${data.href}" > 
              <button class="btn--text btn--scroll-to">${
                this._data.learnMore
              }</button> 
            </a>
          </div>
        </section>
      `;
  }
}

export default new HomeView();
