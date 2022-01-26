import { LitElement, html } from 'lit';
import { cardStyles } from './card-styles';

class CardComponent extends LitElement {
  static styles = [cardStyles];

  static properties = {
    data: {},
  };

  constructor() {
    super();
    this.data = {};
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.data.image}" class="card__image" />
        <div class="card__body">
          <p class="card__title">${this.data.name}</p>
          <div>
            <span class="card__item card__item--title">Status</span>
            <span class="card__item card__item--data">${this.data.status}</span>
          </div>
          <div>
            <span class="card__item card__item--title">Species</span>
            <span class="card__item card__item--data">${this.data.species}</span>
          </div>
          <div>
            <span class="card__item card__item--title">Type</span>
            <span class="card__item card__item--data">${this.data.type}</span>
          </div>
          <div>
            <span class="card__item card__item--title">Gender</span>
            <span class="card__item card__item--data">${this.data.gender}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
