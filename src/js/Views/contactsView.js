import View from './View';

/**
 * @abstract
 */
class ListView extends View {
  _generateMarkup() {
    return this._data.map((data, i) => this._generateItem(data, i)).join('');
  }

  setActive(id) {
    this._parentElement
      .querySelectorAll(`.${this._elementClass}`)
      .forEach(tab =>
        tab.dataset.tab == id
          ? tab.classList.add(`${this._elementClass}--active`)
          : tab.classList.remove(`${this._elementClass}--active`)
      );
  }
}

class TabView extends ListView {
  _elementClass = 'contacts__tab';
  _parentElement = document.querySelector('.contacts__tab-container');

  addHandlerTab(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const clicked = e.target.closest(`.${this._elementClass}`);

        if (!clicked) return;

        handler(clicked.dataset.tab);
      }.bind(this)
    );
  }

  _generateItem(data, i) {
    return `
      <button
        class="btn contacts__tab contacts__tab--${i + 1}"
        data-tab="${i + 1}"
      >
        <span>0${i + 1}</span>${data.title}
      </button>
    `;
  }
}

class ContentView extends ListView {
  _elementClass = 'contacts__content';
  _parentElement = document.querySelector('.contacts__content-container');

  _generateItem(data, i) {
    return `
    <div class="contacts__content contacts__content--${i + 1}" data-tab="${
      i + 1
    }">
      <div class="contacts__icon contacts__icon--${i + 1}">
        <img src="${data.image}" />
      </div>
      <h5 class="contacts__header">${data.text}</h5>
      <p>
        <a class="contacts__tab--${i + 1}" href="${data.link}">
        ${data.value}
        </a>
      </p>
    </div>
    `;
  }
}

class ContactsView {
  _tabView = new TabView();
  _contentView = new ContentView();

  constructor() {
    this._tabView.addHandlerTab(this.setActive.bind(this));
  }

  setActive(id = 1) {
    this._tabView.setActive(id);
    this._contentView.setActive(id);
  }

  render(data) {
    this._tabView.render(data);
    this._contentView.render(data);
    this.setActive();
  }
  update(data) {
    this._tabView.update(data);
    this._contentView.update(data);
    this.setActive();
  }
}

export default new ContactsView();
