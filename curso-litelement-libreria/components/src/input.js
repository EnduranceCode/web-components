import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { inputStyles } from '../css/input-styles';

class InputComponent extends LitElement {
  static styles = [generalStyles, inputStyles];

  static properties = {
    msgValue: {},
    placeHolder: {},
    blanlText: {},
    maxLengthText: {},
    minLengthText: {},
    inputType: {},
    disabled: {},
  };

  constructor() {
    super();
    this.msgValue = '';
    this.inputType = 'text';
    this.placeHolder = 'Test';
    this.blankText = 'Required fiield';
    this.minLengthText = 2;
    this.maxLengthText = 4;
    this.disabled = true;
  }

  render() {
    return html`
      <div class="grid-column grid-column--2">
        <div>
          <label class="required">Input general</label>
          <input
            .value="${this.msgValue}"
            .type="${this.inputType}"
            .placeholder="${this.placeHolder}"
            @change="${this.readInput}"
            @keyup="${this.requiredInput}"
            class="color-input"
          />
          <div id="error" class="error-msg"></div>
        </div>
        <div>
          <label class="required">Input general</label>
          <input
            .value="${this.msgValue}"
            .type="${this.inputType}"
            .placeholder="${this.placeHolder}"
            @change="${this.readInput}"
            @keyup="${this.requiredInput}"
            ?disabled="${this.disabled}"
            class="color-input"
          />
          <div id="error" class="error-msg"></div>
        </div>
      </div>
    `;
  }

  readInput(event) {
    if (event.target.value) {
      console.info('@change event | ', event.target.value);
    }
  }

  requiredInput(event) {
    let inputValue = event.target.value;
    let inputValueLength = inputValue.length;

    if (inputValue === '') {
      this.shadowRoot.getElementById('error').innerHTML = `<p>${this.blankText}</p>`;
    } else if (inputValueLength < this.minLengthText) {
      this.shadowRoot.getElementById(
        'error'
      ).innerHTML = `<p>The minimum length of the field is ${this.minLengthText} characters</p>`;
    } else if (inputValueLength > this.maxLengthText) {
      this.shadowRoot.getElementById(
        'error'
      ).innerHTML = `<p>The max length of the field is ${this.maxLengthText} characters</p>`;
    } else {
      this.shadowRoot.getElementById('error').innerHTML = '';
    }
  }
}

customElements.define('input-component', InputComponent);
