import { LitElement, html } from 'lit';

class SecondElement extends LitElement {
  render() {
    return html`<p>Hello world! From my second-element</p>`;
  }
}
customElements.define('second-element', SecondElement);
