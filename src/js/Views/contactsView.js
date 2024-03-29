import DoubleContainerView from './DoubleContainerView';
import img from 'url:../../img/contacts/*';

class ContactsView extends DoubleContainerView {
  constructor() {
    super('contacts');
  }
  _generateItemContent(data, i) {
    return `
    <div class="contacts__content contacts__content--${i + 1}" data-id="${i}">
      <div class="contacts__icon contacts__icon--${i + 1}">
        <img src="${img[data.image]}" alt="contact medium" />
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
  _generateItemTab(data, i) {
    return `
      <button
        class="btn contacts__tab contacts__tab--${i + 1}"
        data-id="${i}"
      >
      ${data.title}
      </button>
    `;
  }
}

export default new ContactsView();
