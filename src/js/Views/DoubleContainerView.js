import View from './View';

/**
 * @abstract
 */
class Container extends View {
  constructor(elementClass, generateItem) {
    super();
    this._elementClass = elementClass;
    this._parentElement = document.querySelector(`.${elementClass}-container`);
    this._generateItem = generateItem;
  }
  _generateMarkup() {
    return this._data.map(this._generateItem).join('');
  }

  setActive(id) {
    this._parentElement
      .querySelectorAll(`.${this._elementClass}`)
      .forEach(element =>
        element.dataset.id == id
          ? element.classList.add(`${this._elementClass}--active`)
          : element.classList.remove(`${this._elementClass}--active`)
      );
    return this;
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const clicked = e.target.closest(`.${this._elementClass}`);

        if (!clicked) return;

        handler(clicked.dataset.id);
      }.bind(this)
    );
    return this;
  }
}

/**
 * @abstract
 */
export default class DoubleContainerView extends View {
  _activeElement = 0;
  constructor(className) {
    super();
    this._parentElement = document.querySelector(`.${className}`);
    this._tabView = new Container(`${className}__tab`, this._generateItemTab);
    this._contentView = new Container(
      `${className}__content`,
      this._generateItemContent
    );
    this._tabView.addHandlerClick(this.setActive.bind(this));
  }

  setActive(id = this._activeElement) {
    this._tabView.setActive(id);
    this._contentView.setActive(id);
    this._activeElement = id;
    return this;
  }

  render(data) {
    this._tabView.render(data);
    this._contentView.render(data);
    this.setActive();
    return this;
  }
  update(data) {
    this._tabView.update(data);
    this._contentView.update(data);
    this.setActive();
    return this;
  }
}
