import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { statusList, genderList } from '../parameters/parameters-lists';

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

    console.info({ statusList }, { genderList });
  }

  render() {
    return html`<div></div>`;
  }
}

customElements.define('search-lit', SearchLit);
