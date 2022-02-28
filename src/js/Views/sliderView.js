import View from './View';

class SliderView extends View {
  _parentElement = document.querySelector('.slider');

  render(data) {
    super.render(data, 'beforeend')._init()._addEventHandlers();
    return this;
  }

  _init() {
    this._slides = this._parentElement.querySelectorAll('.slide');
    this._btnLeft = this._parentElement.querySelector('.slider__btn--left');
    this._btnRight = this._parentElement.querySelector('.slider__btn--right');
    this._dotContainer = this._parentElement.querySelector('.dots');

    this._curSlide = 0;
    this._maxSlide = this._slides.length - 1;

    this._createDots();
    this.goToSlide();

    return this;
  }

  _addEventHandlers() {
    this._btnRight.addEventListener('click', this.nextSlide.bind(this));
    this._btnLeft.addEventListener('click', this.prevSlide.bind(this));
    this._dotContainer.addEventListener('click', this._dotClicked.bind(this));

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
    // Side by side
    this._slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    // Activate dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');

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
    return `
        <button class="slider__btn slider__btn--left">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      `;
  }

  _generateItem(testimonial, index) {
    return `
    <div class="slide slide--${index}">
        <div class="testimonial">
            <h5 class="testimonial__header">${testimonial.title}</h5>
            <blockquote class="testimonial__text">
            ${testimonial.text}
            </blockquote>
            <address class="testimonial__author">
                <img 
                    src="${testimonial.image}" 
                    alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">
                    ${testimonial.author}
                </h6>
                <p class="testimonial__location">
                    ${'⭐'.repeat(testimonial.stars)}
                </p>
            </address>
        </div>
    </div>
      `;
  }
}

export default new SliderView();
