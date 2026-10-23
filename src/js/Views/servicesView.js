import View from './View';
import img from 'url:../../img/services/*';

class ServicesView extends View {
  _parentElement = document.querySelector('.features');

  // _imgObserver = new IntersectionObserver(this._loadImg.bind(this), {
  //   root: null,
  //   threshold: 0,
  //   rootMargin: '+200px',
  // });
  // constructor() {
  //   super();
  //   this._addLazyLoading();
  // }

  // render(...args) {
  //   super.render(...args);
  //   this._addLazyLoading();
  //   return this;
  // }

  // _addLazyLoading() {
  //   const imgTargets = this._parentElement.querySelectorAll('img[data-src]');

  //   imgTargets.forEach(img => {
  //     this._imgObserver.observe(img);
  //   });
  //   return this;
  // }

  // _loadImg(entries, observer) {
  //   const [entry] = entries;

  //   if (!entry.isIntersecting) return;

  //   // Replace src with data-src
  //   entry.target.src = entry.target.dataset.src;

  //   entry.target.addEventListener('load', function () {
  //     entry.target.classList.remove('lazy-img');
  //   });
  //   // Remove observer
  //   observer.unobserve(entry.target);
  // }

  _generateMarkup() {
    return this._data.map(this._generateItem.bind(this)).join('');
  }

  _generateItem(data, i) {
    return `
      <article class="service-card">
        ${this._generateImage(data)}
        ${this._generateDescription(data)}
      </article>
    `;
  }

  _generateImage(data) {
    return `
        <img
          src="${img[data.image]}"
          alt="${data.title}"
          class="features__img "
          loading="lazy"
        />
    `;
    // return `
    //     <img
    //       src="${img[data.imageLazy]}"
    //       data-src="${img[data.image]}"
    //       alt="${data.title}"
    //       class="features__img lazy-img"
    //     />
    // `;
  }

  _generateDescription(data) {
    return `
		<div class="features__feature">
          <h3 class="features__header">${data.title}</h3>
			<p>
				${data.text}
			</p>
      ${
        data.link
          ? `
          <a class="btn--text btn--scroll-to" href="${data.link}" ${
            data.link.startsWith('http')
              ? 'target="_blank" rel="noopener noreferrer"'
              : ''
          }>${this._data.learnMore}</a>
          `
          : ''
      }
		</div>
		`;
  }
}

export default new ServicesView();
