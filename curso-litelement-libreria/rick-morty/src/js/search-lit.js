import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { statusList, genderList } from '../parameters/parameters-lists';

import '../components/input/input-component';
import '../components/select/select-component';
import '../components/button/button-component';
import '../components/icon/icon-component';

class SearchLit extends LitElement {
  static styles = [generalStyles];

  static properties = {
    statusList: {},
    genderList: {},
  };

  constructor() {
    super();
    this.statusList = statusList;
    this.genderList = genderList;
  }

  render() {
    return html`
      <div class="grid-column grid-column--4">
        <input-component
          id="name"
          type="text"
          placeholder="Name of the character"
          input-type="secondary"
        ></input-component>
        <select-component
          id="status"
          .options="${statusList}"
          select-placeholder="Status of the character"
          select-type="secondary"
        ></select-component>
        <input-component
          id="specie"
          type="text"
          placeholder="Specie of the character"
          input-type="secondary"
        ></input-component>
        <input-component
          id="type"
          type="text"
          placeholder="Type of the character"
          input-type="secondary"
        ></input-component>
      </div>

      <div class="grid-column grid-column--4">
        <select-component
          id="gender"
          .options="${genderList}"
          select-placeholder="Gender of the character"
          select-type="secondary"
        ></select-component>
        <input-component id="page" type="text" placeholder="Page" input-type="secondary"></input-component>
        <button-component button-type="primary">Clear</button-component>
        <icon-componet id="icon" icon-name="search" icon-type="secondary"></icon-componet>
      </div>
    `;
  }
}

customElements.define('search-lit', SearchLit);
