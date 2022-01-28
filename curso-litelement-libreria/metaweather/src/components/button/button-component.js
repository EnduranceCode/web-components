import { LitElement, html } from 'lit';
import { buttonStyles } from './button-styles';

class ButtonComponent extends LitElement {
  static styles = [buttonStyles];

  static properties = {
    buttonType: { attribute: 'button-type' },
  };

  constructor() {
    super();
    this.buttonType = 'default';
  }

  render() {
    return html`
      <button class="${this.getButtonClass()}">
        <slot></slot>
      </button>
    `;
  }

  getButtonClass() {
    switch (this.buttonType) {
      case 'primary':
        return 'button button--primary';
      case 'secondary':
        return 'button button--secondary';
      case 'warning':
        return 'button button--warning';
      case 'default':
      default:
        return 'button button--default';
    }
  }
}

customElements.define('button-component', ButtonComponent);
