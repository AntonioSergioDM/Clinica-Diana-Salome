import View from './View';
import Holidays from 'date-holidays';

class OpenHoursView extends View {
  _parentElement = document.querySelector('.open-hours');

  _generateMarkup() {
    const hd = new Holidays('PT');
    const today = hd.isHoliday(Date.now()) ? 0 : new Date().getDay(); // Sunday is 0

    const html = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(
      day =>
        `<div>${this._data[day].label}<br>${this._data[day].open}${
          this._data[day].open ? ' - ' : 'Encerrado'
        }${this._data[day].close}</div>`
    );

    html[today] = `<b>${html[today]}</b>`;
    html.push(html.shift());

    return html.join('');
  }
}

export default new OpenHoursView();
