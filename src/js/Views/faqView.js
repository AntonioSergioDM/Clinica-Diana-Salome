import View from './View';

class FAQView extends View {
  _parentElement = document.querySelector('.faq');

  addHandlerQuestion(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const question = e.target.closest('.faq__question');

      if (!question) return;

      handler(question.dataset.id);
    });
  }

  isActive(id) {
    return this._getAnswerElementById(id)?.classList.contains(
      'faq__answer--active'
    );
  }

  showAnswer(id, scrollOpts = { behavior: 'smooth' }) {
    const answer = this._getAnswerElementById(id);

    if (!answer) return;

    answer.classList.add('faq__answer--active');
    answer.parentElement.scrollIntoView(scrollOpts);
  }

  hideAnswer(id) {
    const answer = this._getAnswerElementById(id);

    if (!answer) return;

    answer.classList.remove('faq__answer--active');
  }

  _getAnswerElementById(id) {
    return this._parentElement.querySelector(
      `.faq__question[data-id="${id}"] .faq__answer`
    );
  }

  _generateMarkup() {
    return this._data.map(this._generateQuestion.bind(this)).join('');
  }

  _generateQuestion(data, i) {
    return `
    <li class="faq__question" data-id="${i}">
      <div class="faq__header">${data.question}</div>
      <div class="faq__answer">${data.answer}</div>
    </li>
    `;
  }
}

export default new FAQView();
