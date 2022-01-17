import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { dividerStyles } from '../css/divider-styles';

class DividerComponent extends LitElement {
  static styles = [generalStyles, dividerStyles];

  render() {
    return html`
      <div class="grid-column grid-column--1">
        <div>
          <hr class="dashed" />
        </div>
      </div>

      <div class="grid-column grid-column--1">
        <div>
          <hr class="dotted" />
        </div>
      </div>

      <div class="grid-column grid-column--1">
        <div>
          <hr class="solid" />
        </div>
      </div>
    `;
  }
}

customElements.define('divider-component', DividerComponent);
