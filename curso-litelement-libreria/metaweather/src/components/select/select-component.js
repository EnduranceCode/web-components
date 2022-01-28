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

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('reset-component', () => this.resetComponent());
  }

  disconnectedCallback() {
    document.removeEventListener('reset-component', () => this.resetComponent());
    super.disconnectedCallback();
  }

  render() {
    return html`
      <select class="${this.getSelectClass()}" @change="${this.handleInputValueChange}">
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
    this.dispatchEvent(new CustomEvent('changed-value', { detail: { id: this.id, value: event.target.value } }));
  }

  resetComponent() {
    this.shadowRoot.querySelector('select').selectedIndex = 0;
  }
}

customElements.define('select-component', SelectComponent);
