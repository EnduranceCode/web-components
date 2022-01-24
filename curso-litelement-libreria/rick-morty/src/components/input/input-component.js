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
}

customElements.define('input-component', InputComponent);
