import { LitElement, html } from 'lit';
import { generalStyles } from '../css/general-styles';
import { cardStyles } from '../css/card-styles';

class CardComponent extends LitElement {
  static styles = [generalStyles, cardStyles];

  static properties = {
    title: {},
    text: {},
  };

  constructor() {
    super();
    this.title = 'Rick Sánchez';
    this.text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  }
  render() {
    return html`
      <div class="grid-column grid-column--4">
        <div class="card-album">
          <img src="../img/rick-morty.png" />
          <p class="title">${this.title}</p>
        </div>
        <div class="card-album">
          <img src="../img/rick-morty.png" />
          <p class="title">${this.title}</p>
        </div>
        <div class="card-album">
          <img src="../img/rick-morty.png" />
          <p class="title">${this.title}</p>
        </div>
        <div class="card-album">
          <img src="../img/rick-morty.png" />
          <p class="title">${this.title}</p>
        </div>
      </div>

      <div class="grid-column grid-column--1">
        <div class="card">
          <p>${this.text}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
