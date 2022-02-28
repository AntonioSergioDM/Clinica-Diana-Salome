import DoubleContainerView from './DoubleContainerView';
/*import View from './View';

class TeamView extends View {
  _parentElement = document.querySelector('.team__tab-container');

  _descriptionElement = document.querySelector('.team__content');

  addHandlerClickMember(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const person = e.target.closest('.team__tab');
      if (!person) return;

      handler(person.dataset.id);
    });
    return this;
  }

  setDescription(html = '') {
    this._descriptionElement.innerHTML = html;
    return this;
  }

  changeActiveMember(id = -1) {
    this._parentElement.querySelectorAll('.team__tab').forEach(person =>
      person.dataset.id == id // with type conversion
        ? person.classList.add('team__tab--active')
        : person.classList.remove('team__tab--active')
    );
    return this;
  }

  update(...args) {
    super.update(...args);
    this.setDescription();
    return this;
  }

  _generateMarkup() {
    return this._data
      .map((person, i) => this._generateItem(person, i))
      .join('');
  }
  _generateItem(person, i) {
    return `
    <div class="team__tab" data-id="${i}">
      <img class="photo" src="${person.image}" alt="${person.name}" />
      <h4 class="name">${person.name}</h4>
    </div>
    `;
  }
}

export default new TeamView();*/

class TeamView extends DoubleContainerView {
  constructor() {
    super('team');
    this._activeElement = -1; // change default - non active
  }
  _generateItemTab(person, i) {
    return `
    <div class="team__tab" data-id="${i}">
      <img class="photo" src="${person.image}" alt="${person.name}" />
      <h4 class="name">${person.name}</h4>
    </div>
    `;
  }
  _generateItemContent(person, i) {
    return `
    <div class="team__content" data-id="${i}">
      ${person.description}
    </div>
    `;
  }
}

export default new TeamView();
