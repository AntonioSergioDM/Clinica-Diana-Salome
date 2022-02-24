import View from './View';

class TeamView extends View {
  _parentElement = document.querySelector('.team__people');

  _descriptionElement = document.querySelector('.team__description');

  addHandlerClickMember(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const person = e.target.closest('.team__person');
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
    this._parentElement.querySelectorAll('.team__person').forEach(person =>
      person.dataset.id == id // with type conversion
        ? person.classList.add('active')
        : person.classList.remove('active')
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
    <div class="team__person" data-id="${i}">
      <img class="photo" src="${person.image}" alt="${person.name}" />
      <h4 class="name">${person.name}</h4>
    </div>
    `;
  }
}

export default new TeamView();
