import View from './View';

class FAQView extends View {
  _parentElement = document.querySelector('.faq');

  addHandlerQuestion(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const header = e.target.closest('.faq__header');

      if (!header) return;

      handler(header.closest('.faq__question').dataset.id);
    });
    return this;
  }

  isActive(id) {
    this._setQuestionAndAnswer(id);
    return this._answer?.classList.contains('faq__answer--active');
  }

  showAnswer(id, scrollOpts = { behavior: 'smooth' }) {
    this._setQuestionAndAnswer(id);

    if (!this._answer) return this;

    this._answer.classList.add('faq__answer--active');
    this._question.scrollIntoView(scrollOpts);
    this._changeChevron('up');

    return this;
  }

  hideAnswer(id) {
    this._setQuestionAndAnswer(id);

    if (!this._answer) return;

    this._answer.classList.remove('faq__answer--active');
    this._changeChevron('down');
    return this;
  }

  _changeChevron(direction) {
    this._question.querySelector(
      'use'
    ).href.baseVal = `${this._icons}#icon-chevron-${direction}`;
    return this;
  }

  _setQuestionAndAnswer(id) {
    this._question = this._parentElement.querySelector(
      `.faq__question[data-id="${id}"]`
    );
    this._answer = this._question?.querySelector('.faq__answer');
    return this;
  }

  _generateMarkup() {
    return this._data.map(this._generateItem.bind(this)).join('');
  }

  _generateItem(data, i) {
    return `
    <li class="faq__question" data-id="${i}">
      <div class="faq__header">
        ${data.question}
        <span>
          <svg>
            <use xlink:href="${this._icons}#icon-chevron-down"></use>
          </svg>
        </span>
      </div>
      <div class="faq__answer"><p>${data.answer}</p></div>
    </li>
    `;
  }
}

export default new FAQView();
