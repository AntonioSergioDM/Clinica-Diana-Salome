import SliderView from './sliderView';
import img from 'url:../../img/testimonials/*';

class TestimonialView extends SliderView {
  _parentElement = document.querySelector('.slider');

  _dots = true;
  _buttons = true;

  _generateItem(data, index) {
    return `
    <div class="slide slide--${index}">
        <div class="testimonial">
            <h5 class="testimonial__header">${data.title}</h5>
            <blockquote class="testimonial__text">
            ${data.text}
            </blockquote>
            <address class="testimonial__author">
                <img 
                    src="${img[data.image]}" 
                    alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">
                    ${data.author}
                </h6>
                <p class="testimonial__location">
                    ${'⭐'.repeat(data.stars)}
                </p>
            </address>
        </div>
    </div>
      `;
  }
}

export default new TestimonialView();
