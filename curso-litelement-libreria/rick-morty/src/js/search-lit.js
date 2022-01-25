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
    searchParameters: {},
    searchResults: {},
  };

  constructor() {
    super();
    this.URL_FILTER_CHARACTERS = 'https://rickandmortyapi.com/api/character/';
    this.statusList = statusList;
    this.genderList = genderList;
    this.searchParameters = {
      name: '',
      status: '',
      specie: '',
      type: '',
      gender: '',
      page: '',
    };
    this.searchResults = {};
  }

  render() {
    return html`
      <div class="grid-column grid-column--4">
        <input-component
          id="name"
          type="text"
          placeholder="Name of the character"
          input-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></input-component>
        <select-component
          id="status"
          .options="${statusList}"
          select-placeholder="Status of the character"
          select-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></select-component>
        <input-component
          id="specie"
          type="text"
          placeholder="Specie of the character"
          input-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></input-component>
        <input-component
          id="type"
          type="text"
          placeholder="Type of the character"
          input-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></input-component>
      </div>

      <div class="grid-column grid-column--4">
        <select-component
          id="gender"
          .options="${genderList}"
          select-placeholder="Gender of the character"
          select-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></select-component>
        <input-component
          id="page"
          type="text"
          placeholder="Page"
          input-type="secondary"
          @changed-value="${this.updateSearchParameters}"
        ></input-component>
        <button-component button-type="primary">Clear</button-component>
        <icon-componet
          id="icon"
          icon-name="search"
          icon-type="secondary"
          @click="${this.searchCarachters}"
        ></icon-componet>
      </div>

      <div><p>Resultado</p></div>
    `;
  }

  updateSearchParameters(event) {
    this.searchParameters[event.detail.id] = event.detail.value;
  }

  searchCarachters() {
    let endpoint = '';
    for (const key in this.searchParameters) {
      let concatenationString = endpoint.length > 0 ? '&' : '?';

      if (this.searchParameters[key].length > 0) {
        endpoint += concatenationString + key + '=' + this.searchParameters[key];
      }
    }

    endpoint = this.URL_FILTER_CHARACTERS + endpoint;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      });
  }
}

customElements.define('search-lit', SearchLit);
