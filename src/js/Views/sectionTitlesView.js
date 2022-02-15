import View from './View';

class SectionTitlesView extends View {
  _sections = document.querySelectorAll('.section[id]');

  render(data, ...others) {
    this._overrideSuper(super.render.bind(this), data, ...others);
  }
  upload(data, ...others) {
    this._overrideSuper(super.upload.bind(this), data, ...others);
  }

  _overrideSuper(superFunction, data, ...others) {
    this._allData = data;
    this._sections.forEach(
      function (section) {
        const i = section.getAttribute('id').split('-').at(-1);
        this._parentElement = section.querySelector('.section__title');
        superFunction(data[`sec${i}`], ...others);
      }.bind(this)
    );
  }

  _generateMarkup() {
    return `
    <h2 class="section__description">${this._data.title}</h2>
    <h3 class="section__header">
    ${this._data.intro}
    </h3>
    `;
  }
}

export default new SectionTitlesView();
