import View from './View';

class ModalView extends View {
  _parentElement = document.querySelector('.modal__body');

  //   _btnForm = document.querySelector('.btn--send-mail');

  _windowElement = document.querySelector('.modal');
  _overlayElement = document.querySelector('.overlay');
  _btnCloseModal = document.querySelector('.btn--close-modal');
  _btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  constructor() {
    super();
    // this._addHandlerShowWindow();
    // this._addHandlerHideWindow();
  }

  addHandlerSubmitForm(handler) {
    this._formHandler = handler;
    this._parentElement.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        const dataArr = [
          ...new FormData(this._parentElement.querySelector('form')),
        ];
        const data = Object.fromEntries(dataArr);
        handler(data);
      }.bind(this)
    );
    return this;
  }

  // _addHandlerShowWindow() {
  //   this._btnsOpenModal.forEach(
  //     function (btn) {
  //       btn.addEventListener('click', this._toggleWindow.bind(this));
  //     }.bind(this)
  //   );
  // }

  _addHandlerHideWindow() {
    [this._btnCloseModal, this._overlayElement].forEach(el =>
      el.addEventListener('click', this._toggleWindow.bind(this))
    );

    document.addEventListener(
      'keydown',
      function (e) {
        if (e.key === 'Escape' && this.isWindowOpen()) this.closeWindow();
      }.bind(this)
    );
    return this;
  }

  closeWindow() {
    if (this.isWindowOpen()) this._toggleWindow();
    return this;
  }
  openWindow() {
    if (!this.isWindowOpen()) this._toggleWindow();
    return this;
  }

  isWindowOpen() {
    return !this._windowElement.classList.contains('hidden');
  }

  _toggleWindow() {
    this._overlayElement.classList.toggle('hidden');
    this._windowElement.classList.toggle('hidden');
    return this;
  }

  _generateMarkup() {
    return `
      <form class="modal__form">
        <label>Nome</label>
        <input type="text" />

        <label>Telefone</label>
        <input type="tel" />

        <label>Email</label>
        <input type="email" />

        <label>Mensagem</label>
        <input type="text" />

        <button class="btn btn--send-mail">Enviar</button>
      </form>
      `;
  }
}

export default new ModalView();
