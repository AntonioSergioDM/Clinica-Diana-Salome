import DoubleContainerView from './DoubleContainerView';
import img from 'url:../../img/team/*';

class TeamView extends DoubleContainerView {
  constructor() {
    super('team');
    this._activeElement = -1; // change default - non active
  }
  _generateItemTab(person, i) {
    return `
    <div class="team__tab" data-id="${i}">
      <img class="photo" src="${img[person.image]}" alt="${person.name}" />
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
