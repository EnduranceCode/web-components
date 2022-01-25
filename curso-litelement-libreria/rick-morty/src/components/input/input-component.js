import { LitElement, html } from 'lit';
import { inputStyles } from './input-styles';

class InputComponent extends LitElement {
  static styles = [inputStyles];

  static properties = {
    type: {},
    placeholder: {},
    value: {},
    inputType: { attribute: 'input-type' },
  };

  constructor() {
    super();
    this.placeholder = '';
    this.value = '';
    this.inputType = '';
  }

  render() {
    return html`
      <input
        .type="${this.type}"
        .placeholder="${this.placeholder}"
        .value="${this.value}"
        @change="${this.handleInputValueChange}"
        class="${this.getInputClass()}"
      />
    `;
  }

  getInputClass() {
    switch (this.inputType) {
      case 'primary':
        return 'input--primary';
      case 'secondary':
        return 'input--secondary';
      case 'warning':
        return 'input--warning';
      case 'default':
      default:
        return 'input--default';
    }
  }

  handleInputValueChange(event) {
    this.dispatchEvent(new CustomEvent('changed-value', { detail: { id: this.id, value: event.target.value } }));
  }
}

customElements.define('input-component', InputComponent);
