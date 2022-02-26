import View from './View';

class HomeView extends View {
  _parentElement = document.querySelector('.home');

  _generateMarkup() {
    return this._data
      .map(
        function (section) {
          return this._generateItem(section);
        }.bind(this)
      )
      .join('');
  }
  _generateItem(data) {
    return `
        <section class="section">
          <div class="section__title">
            <h2 class="section__description">${data.title}</h2>
          </div>
          <div class="section__title home__body">
            <h3 class="section__header">${data.text}</h3>
            <img class="home__body__img" src="${data.image}"/>
            <a href="#${data.href}" > 
              <button class="btn--text btn--scroll-to">${this._data.learnMore}</button> 
            </a>
          </div>
        </section>
      `;
  }
}

export default new HomeView();
