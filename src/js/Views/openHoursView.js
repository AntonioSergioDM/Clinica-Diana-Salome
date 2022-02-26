import View from './View';
import Holidays from 'date-holidays';

class OpenHoursView extends View {
  _parentElement = document.querySelector('.open-hours');

  update(...args) {
    this.render(...args);
    return this;
  }

  _generateMarkup() {
    const hd = new Holidays('PT');
    const today = hd.isHoliday(Date.now()) ? 0 : new Date().getDay(); // Sunday is 0

    const html = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(
      (day, i) => `
        <li class="day ${i == today ? 'today' : ''}">
          ${this._data[day].label}
          <br>
          ${this._data[day].open
            .map(
              (open, i) =>
                `${open}${open ? ' - ' : this._data.closeLabel}${
                  this._data[day].close[i]
                }`
            )
            .join('<br>')}
        </li>`
    );

    html.push(html.shift());

    return html.join('');
  }
}

export default new OpenHoursView();
