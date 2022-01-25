import { LitElement, html } from 'lit';
import { selectStyles } from '../select/select-styles';

class SelectComponent extends LitElement {
  static styles = [selectStyles];

  static properties = {
    options: {},
    selectPlaceholder: { attribute: 'select-placeholder' },
    selectType: { attribute: 'select-type' },
  };

  constructor() {
    super();
    this.options = [];
    this.selectPlaceholder = '-- select an option --';
    this.selectType = '';
  }

  render() {
    return html`
      <select class="${this.getSelectClass()}">
        <option disabled selected>${this.selectPlaceholder}</option>
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
