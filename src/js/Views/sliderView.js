import View from './View';

/** @abstract */
export default class SliderView extends View {
  /** creates dots if true - default true */
  _dots = true;
  /** creates arrow buttons if true - default true */
  _buttons = true;

  _failUpdate() {
    this._slides = this._parentElement.querySelectorAll('.slide');
    this._btnLeft = this._parentElement.querySelector('.slider__btn--left');
    this._btnRight = this._parentElement.querySelector('.slider__btn--right');
    this._dotContainer = this._parentElement.querySelector('.dots');

    this._curSlide = 0;
    this._maxSlide = this._slides.length - 1;

    if (this._dotContainer) this._createDots();
    this.goToSlide();

    this._addEventHandlers();

    return this;
  }

  render(data) {
    super.render(data, 'beforeend');
    this._failUpdate();
    return this;
  }

  _addEventHandlers() {
    this._btnRight?.addEventListener('click', this.nextSlide.bind(this));
    this._btnLeft?.addEventListener('click', this.prevSlide.bind(this));
    this._dotContainer?.addEventListener('click', this._dotClicked.bind(this));

    document.addEventListener('keydown', this._arrowClicked.bind(this));

    return this;
  }

  _arrowClicked(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  }

  _dotClicked(e) {
    // only the dot buttons
    if (!e.target.classList.contains('dots__dot')) return;

    this.goToSlide(e.target.dataset.slide);
  }

  goToSlide(slide = this._curSlide) {
    this._curSlide = slide;
    // Side by side
    this._slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    // Activate dots
    document
      .querySelectorAll('.dots__dot')
      ?.forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      ?.classList.add('dots__dot--active');

    return this;
  }

  nextSlide() {
    // Update current slide
    this._curSlide++;

    // Check the limits
    if (this._curSlide > this._maxSlide) this._curSlide = 0;

    this.goToSlide();
  }

  prevSlide() {
    // Update current slide
    this._curSlide--;

    // Check the limits
    if (this._curSlide < 0) this._curSlide = this._maxSlide;

    this.goToSlide();
  }

  _createDots() {
    this._slides.forEach((_, i) => {
      this._dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
    return this;
  }

  _generateMarkup() {
    return (
      this._data.map(this._generateItem.bind(this)).join('') +
      this._generateExtraMarkup()
    );
  }

  _generateExtraMarkup() {
    return `${this._buttons ? this._generateButtons() : ''}
    ${this._dots ? this._generateDotContainer() : ''}`;
  }
  _generateButtons() {
    return `
    <button class="slider__btn slider__btn--left">
      <svg>
      <use xlink:href="${this._icons}#icon-arrow-left"></use>
      </svg>
    </button>
    <button class="slider__btn slider__btn--right">
      <svg>
        <use xlink:href="${this._icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }
  _generateDotContainer() {
    return '<div class="dots"></div>';
  }
}
