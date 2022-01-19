import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { selectStyles } from '../css/select-styles';

class SelectComponent extends LitElement {
  static styles = [generalStyles, selectStyles];

  static properties = {
    blankText: {},
    disabled: {},
    items: {},
  };

  constructor() {
    super();
    this.blankText = 'You must select a country!';
    this.disabled = true;
    this.items = [
      { id: '1', text: 'Select one option', value: 'option' },
      { id: '2', text: 'Squirtle', value: 'Water' },
      { id: '3', text: 'Pikachu', value: 'Electricity' },
      { id: '4', text: 'Charmander', value: 'Fire' },
    ];
  }

  render() {
    return html`
      <div class="grid-column grid-column--4">
        <div>
          <label class="required">Select general</label>
          <select @input="${this.readSelect}" @change="${this.requiredSelect}" class="color-select">
            <option value="none">Select country</option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="usa">USA</option>
          </select>
          <div id="error" class="error-msg"></div>
        </div>

        <div>
          <label class="required">Select general</label>
          <select
            @input="${this.readSelect}"
            @change="${this.requiredSelect}"
            ?disabled="${this.disabled}"
            class="color-select"
          >
            <option value="none">Select airport</option>
            <option value="BWU">Sydney Bankstown</option>
            <option value="YKZ">Buttonville Municipal</option>
            <option value="LGA">La Guardia</option>
          </select>
          <div id="error" class="error-msg"></div>
        </div>

        <div>
          <label class="required">Select general</label>
          <select @input="${this.readSelect}" @change="${this.requiredSelect}" class="color-select">
            ${this.items.map((pokemon) => {
              return html`<option value="${pokemon.value}">${pokemon.text}</option>`;
            })}
          </select>
          <div id="error" class="error-msg"></div>
        </div>
      </div>
    `;
  }

  readSelect(event) {
    if (event.target.value) {
      console.info('Event change: ', event.target.value);
    }
  }

  requiredSelect(event) {
    let valueSelect = event.target.value;

    if (valueSelect === 'none') {
      this.shadowRoot.getElementById('error').innerHTML = `<p>${this.blankText}</p>`;
    } else {
      this.shadowRoot.getElementById('error').innerHTML = '';
    }
  }
}

customElements.define('select-component', SelectComponent);
