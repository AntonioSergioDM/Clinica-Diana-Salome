export default class OverView {
  _auxparentSection;
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
    return this;
  }

  scroll(opt = { behavior: 'smooth' }) {
    this._parentSection.scrollIntoView(opt);
    return this;
  }
}
