import View from './View';

class ServicesView extends View {
  _parentElement = document.querySelector('.features');

  _imgObserver = new IntersectionObserver(this._loadImg.bind(this), {
    root: null,
    threshold: 0,
    rootMargin: '+200px',
  });
  constructor() {
    super();
    this._addLazyLoading();
  }

  render(...args) {
    super.render(...args);
    this._addLazyLoading();
  }

  _addLazyLoading() {
    const imgTargets = this._parentElement.querySelectorAll('img[data-src]');

    imgTargets.forEach(img => {
      this._imgObserver.observe(img);
    });
  }

  _loadImg(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    // Remove observer
    observer.unobserve(entry.target);
  }

  _generateMarkup() {
    return this._data
      .map(
        function (data, i) {
          if (i % 2) {
            return this._generateImage(data) + this._generateDescription(data);
          } else {
            return this._generateDescription(data) + this._generateImage(data);
          }
        }.bind(this)
      )
      .join('');
  }

  _generateImage(data) {
    return `
        <img
          src="${data.imageLazy}"
          data-src="${data.image}"
          alt="${data.title}"
          class="features__img lazy-img"
        />
    `;
  }

  _generateDescription(data) {
    return `
		<div class="features__feature">
			<div class="features__icon">
				<svg>
					<use xlink:href="${this._icons}#icon-${data.icon}"></use>
				</svg>
			</div>
			<h5 class="features__header">${data.title}</h5>
			<p>
				${data.text}
			</p>
      ${
        data.link
          ? `
          <a href="${data.link}" target="_blanck"> 
            <button class="btn--text btn--scroll-to">${this._data.learnMore}</button> 
          </a>
          `
          : ''
      }
		</div>
		`;
  }
}

export default new ServicesView();
