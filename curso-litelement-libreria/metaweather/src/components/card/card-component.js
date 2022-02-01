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
        <img src="${this.data.weather_state_img_url}" class="card__image" />
        <div class="card__body">
          <p class="card__title">${this.data.applicable_date}</p>
          <div class="card__item">
            <div class="card__item--title">Weather State</div>
            <div class="card__item--data">${this.data.weather_state_name}</div>
          </div>
          <div class="card__item">
            <div class="card__item--title">Temp</div>
            <div class="card__item--data">${Math.round((this.data.the_temp + Number.EPSILON) * 100) / 100} ºC</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
