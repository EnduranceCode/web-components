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
      case 'link':
        return 'button button--link';
      case 'info':
        return 'button button--info';
      case 'success':
        return 'button button--success';
      case 'warning':
        return 'button button--warning';
      case 'danger':
        return 'button button--danger';
      default:
        return 'button button--default';
    }
  }
}

customElements.define('button-component', ButtonComponent);
