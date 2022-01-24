import { LitElement, html } from 'lit';
import { selectStyles } from '../select/select-styles';

class SelectComponent extends LitElement {
  static styles = [selectStyles];

  static properties = {
    options: {},
    selectType: { attribute: 'select-type' },
  };

  constructor() {
    super();
    this.options = [];
    this.selectType = '';
  }

  render() {
    return html`
      <select @input="${this.readSelect}" @change="${this.requiredSelect}" class="${this.getSelectClass()}">
        <option disabled selected>-- select an option --</option>
        ${this.options.map((option) => {
          return html`<option value="${option.value}">${option.text}</option>`;
        })}
      </select>
    `;
  }

  getSelectClass() {
    switch (this.selectType) {
      case 'primary':
        return 'select--primary';
      case 'secondary':
        return 'select--secondary';
      case 'warning':
        return 'select--warning';
      case 'default':
      default:
        return 'select--default';
    }
  }
}

customElements.define('select-component', SelectComponent);
