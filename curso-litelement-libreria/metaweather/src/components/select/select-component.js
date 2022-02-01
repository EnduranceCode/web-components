import { LitElement, html } from 'lit';
import { selectStyles } from '../select/select-styles';
import { locationOptions } from './select-options-data';

class SelectComponent extends LitElement {
  static styles = [selectStyles];

  static properties = {
    continent: {},
    selectPlaceholder: { attribute: 'select-placeholder' },
    selectType: { attribute: 'select-type' },
  };

  constructor() {
    super();
    this.continent = '';
    this.selectPlaceholder = '-- select an option --';
    this.selectType = '';
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('reset-component', () => this.resetComponent());
  }

  disconnectedCallback() {
    document.removeEventListener('reset-component', () => this.resetComponent());
    super.disconnectedCallback();
  }

  render() {
    const options = this.getSelectOptions(this.continent);

    return html`
      <select class="${this.getSelectClass()}" @change="${this.handleInputValueChange}">
        <option disabled selected>${this.selectPlaceholder}</option>
        ${options.map((option) => {
          return html`<option value="${option.value}">${option.text}</option>`;
        })}
      </select>
    `;
  }

  getSelectOptions(continent) {
    let options = [];
    for (const key in locationOptions) {
      if (key == continent) {
        options = locationOptions[key];
      }
    }

    return options;
  }

  getSelectClass() {
    switch (this.selectType) {
      case 'primary':
        return 'select--primary';
      case 'link':
        return 'select--link';
      case 'info':
        return 'select--info';
      case 'success':
        return 'select--success';
      case 'warning':
        return 'select--warning';
      case 'danger':
        return 'select--danger';
      default:
        return 'select--default';
    }
  }

  handleInputValueChange(event) {
    this.dispatchEvent(
      new CustomEvent('changed-value', {
        bubbles: true,
        composed: true,
        detail: { id: this.id, value: event.target.value },
      })
    );
  }

  resetComponent() {
    this.shadowRoot.querySelector('select').selectedIndex = 0;
  }
}

customElements.define('select-component', SelectComponent);
