import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { buttonStyles } from '../css/button-styles';

class ButtonComponent extends LitElement {
  static styles = [generalStyles, buttonStyles];

  static properties = {
    disabled: {},
  };

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button @click="${this.clickButton}" ?disabled="${this.disabled}" class="button button--primary">
        Primary Button
      </button>
      <button @click="${this.clickButton}" ?disabled="${this.disabled}" class="button button--secondary">
        Secondary Button
      </button>
    `;
  }

  clickButton() {
    console.info('The button was clicked');
  }
}

customElements.define('button-component', ButtonComponent);
