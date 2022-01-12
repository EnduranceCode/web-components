import { LitElement, html } from 'lit';

class ThirdElement extends LitElement {
  static properties = {
    message: {},
  };

  constructor() {
    super();
    this.message = 'Hello again!';
  }

  render() {
    return html`${this.message}`;
  }
}
customElements.define('third-element', ThirdElement);
