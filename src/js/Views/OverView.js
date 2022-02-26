export default class OverView {
  _spinnerElement = document.querySelector('section.spinner');
  // _parentSection;
  _auxparentSection = false;
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
    this._spinnerElement.classList.add('hide');
    return this;
  }

  scroll(opt = { behavior: 'smooth' }) {
    this._parentSection.scrollIntoView(opt);
    return this;
  }

  loading(opt = { behavior: 'smooth' }) {
    this._spinnerElement.classList.add('hide');
    this._spinnerElement.scrollIntoView(opt);
  }
}
