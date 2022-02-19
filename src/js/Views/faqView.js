import View from './View';

class FAQView extends View {
  _parentElement = document.querySelector('.faq');

  showAnswer(id) {
    const answers = this._parentElement.querySelectorAll('.faq__answer');
    const answer = this._parentElement.querySelector(
      `.faq__question[data-id="${id}"] .faq__answer`
    );

    if (!answer) return;

    // Hide all
    answers.forEach(ans => ans.classList.remove('faq__answer--active'));
    // Show answer
    answer.classList.add('faq__answer--active');
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
