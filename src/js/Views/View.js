import { ICON_PATH } from '../Config/config';
import OverView from './OverView';

/**
 * Defines the functions and paths common to all the Views
 * @abstract
 */
export default class View extends OverView {
  _data;

  /**
   * Path to icons - because of parcel
   * @protected
   */
  _icons = ICON_PATH;

  // Default messages - to be overwrite in the children classes
  _errorMessage = 'Something went wrong :(';
  _message = 'It worked :)';

  update(data, position = 'afterbegin') {
    this._data = data;
    const newMarkup = this._generateMarkup();

    try {
      const newDOM = document.createRange().createContextualFragment(newMarkup);
      const newElements = Array.from(newDOM.querySelectorAll('*')).filter(
        el => !(el.nodeName === 'BR' || el.nodeName === 'SPAN')
      );
      const currElements = Array.from(
        this._parentElement.querySelectorAll('*')
      ).filter(el => !(el.nodeName === 'BR' || el.nodeName === 'SPAN'));

      if (currElements.length !== newElements.length)
        throw new Error('Unmatched markups');

      newElements.forEach((newEl, i) => {
        const currEl = currElements[i];

        // Update changed text
        if (
          newEl.firstChild?.nodeValue.trim() !== '' &&
          !newEl.isEqualNode(currEl)
        )
          currEl.innerHTML = newEl.innerHTML;

        // Update changed attributes
        if (!newEl.isEqualNode(currEl))
          Array.from(newEl.attributes).forEach(attr => {
            currEl.setAttribute(attr.name, attr.value);
          });
      });
    } catch {
      this._clear();
      this._parentElement.insertAdjacentHTML(position, newMarkup);
      this._failUpdate();
    }
    return this;
  }

  /**
   * Render the received object to the View
   * or the View's error message.
   * @param { Object | Object[] } [data] - The data to be rendered (e.g. Recipe)
   * @this {Object} View instance
   */
  render(data = 'No data', position = 'afterbegin') {
    if (!data || (Array.isArray(data) && !data.length))
      return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML(position, markup);
    return this;
  }

  renderSpinner(position = 'afterbegin', clearParent = true) {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${this._icons}#icon-loader"></use>
        </svg>
      </div>
    `;

    if (clearParent) this._clear();
    this._parentElement.insertAdjacentHTML(position, markup);
    return this;
  }

  renderError(
    message = this._errorMessage,
    position = 'afterbegin',
    clearParent = true
  ) {
    const markup = `
        <div class="error">
            <div>
                <svg>
                    <use href="${this._icons}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
      `;

    if (clearParent) this._clear();
    this._parentElement.insertAdjacentHTML(position, markup);
    return this;
  }

  renderMessage(
    message = this._message,
    position = 'afterbegin',
    clearParent = true
  ) {
    const markup = `
        <div class="message">
            <div>
                <svg>
                    <use href="${this._icons}#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
      `;

    if (clearParent) this._clear();
    this._parentElement.insertAdjacentHTML(position, markup);
    return this;
  }

  _clear() {
    this._parentElement.innerHTML = '';
    return this;
  }
  /** if update fails the markup is rendered and this function called*/
  _failUpdate() {
    //do nothing
  }
}
