import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { tableStyles } from '../css/table-styles';

class TableComponent extends LitElement {
  static styles = [generalStyles, tableStyles];

  static properties = {
    headboard: {},
    list: {},
  };

  constructor() {
    super();
    this.headboard = [{ title: 'First Name' }, { title: 'Last Name' }, { title: 'Points' }];
    this.list = [
      { points: '50', firstName: 'Loki', lastName: 'Laufeyson' },
      { points: '94', firstName: 'Steve', lastName: 'Rogers' },
      { points: '67', firstName: 'Clinton', lastName: 'Barton' },
      { points: '34', firstName: 'Tony', lastName: 'Stark' },
    ];
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.headboard.map((item) => {
              {
                return html`<td>${item.title}</td>`;
              }
            })}
          </tr>
        </thead>
        <tbody>
          ${this.list.map((record) => {
            return html`<tr>
              <td>${record.firstName}</td>
              <td>${record.lastName}</td>
              <td>${record.points}</td>
            </tr>`;
          })}
        </tbody>
      </table>
    `;
  }
}

customElements.define('table-component', TableComponent);
