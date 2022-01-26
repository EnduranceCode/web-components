import { LitElement, html } from 'lit';
import { generalStyles } from '../../css/general-styles';

import '../card/card-component';

class ResultsComponent extends LitElement {
  static styles = [generalStyles];

  static properties = {
    data: {},
  };

  constructor() {
    super();
    this.data = {};
  }

  render() {
    if (this.data.results) {
      return html`
        <div>
          <h2>Results</h2>
          ${this.data.results ? this.displayResults() : null}
        </div>
      `;
    } else {
      return null;
    }
  }

  displayResults() {
    return html`
      <div class="grid-column grid-column--4">
        ${this.data.results.map((item) => {
          return html`<card-component .data="${item}"></card-component>`;
        })}
      </div>
    `;
  }
}

customElements.define('results-component', ResultsComponent);
