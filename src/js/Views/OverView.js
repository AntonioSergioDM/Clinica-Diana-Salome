export default class OverView {
  // _parentSection;
  _auxparentSection = false;

  static _spinnerElement = document.querySelector('section.spinner');
  static _allSections = document.querySelectorAll('section');
  static showAll() {
    this._allSections.forEach(sec => sec.classList.remove('hide'));
    return this;
  }
  static hideAll() {
    this._allSections.forEach(sec => sec.classList.add('hide'));
    return this;
  }
  static scroll2Top(opt = { behavior: 'smooth' }) {
    Array.from(this._allSections)
      .find(sec => !sec.classList.contains('hide'))
      .scrollIntoView(opt);
    return this;
  }
  static loading(opt = { behavior: 'smooth' }) {
    this._spinnerElement.classList.remove('hide');
    this._spinnerElement.scrollIntoView(opt);
    return this;
  }

  get _parentSection() {
    if (!this._auxparentSection)
      this._auxparentSection = this._parentElement.closest('section');
    return this._auxparentSection;
  }
  hide() {
    this._parentSection.classList.add('hide');
    return this;
  }

  show() {
    this._parentSection.classList.remove('hide');
    OverView._spinnerElement.classList.add('hide');
    return this;
  }

  scroll(opt = { behavior: 'smooth' }) {
    this._parentSection.scrollIntoView(opt);
    return this;
  }
}
