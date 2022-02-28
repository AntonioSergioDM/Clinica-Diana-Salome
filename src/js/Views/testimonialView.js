import SliderView from './sliderView';

class TestimonialView extends SliderView {
  _parentElement = document.querySelector('.slider');

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

export default new TestimonialView();
