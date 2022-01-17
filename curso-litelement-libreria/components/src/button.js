import { LitElement, html } from 'lit';

class ButtonComponent extends LitElement {
  render() {
    return html` <button>Click</button> `;
  }
}

customElements.define('button-component', ButtonComponent);
