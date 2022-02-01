import { LitElement, html } from 'lit';
import { resultsStyles } from './results-styles';

import '../card/card-component';

class ResultsComponent extends LitElement {
  static styles = [resultsStyles];

  static properties = {
    cityId: {},
    data: {},
  };

  constructor() {
    super();
    /* As the API doesn't have open CORS, this URL is kept just for the sake of documentation */
    this.LOCATION_BASE_URL = 'https://www.metaweather.com/api/location/';
    this.LOCATION_API_MOCKUP_URL =
      'https://raw.githubusercontent.com/EnduranceCode/web-components/master/curso-litelement-libreria/metaweather/api-mockup/';
    this.WEATHER_IMAGE_BASE_URL = 'https://www.metaweather.com/static/img/weather/';
    this.cityId = '';
    this.data = {};
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('changed-value', (event) => {
      this.updateSearchParameters(event);
    });
    document.addEventListener('click-button', () => {
      this.getForecast();
    });
  }

  disconnectedCallback() {
    document.removeEventListener('changed-value', (event) => {
      this.updateSearchParameters(event);
    });
    document.removeEventListener('click-button', () => {
      this.getForecast();
    });
    super.removeEventListener();
  }

  render() {
    if (this.data.consolidated_weather) {
      return html`
        <div>
          <h2>Forecast</h2>
          ${this.data.consolidated_weather ? this.displayResults() : null}
        </div>
      `;
    } else if (this.data.error) {
      return html`
        <div>
          <h2 class="error">Error!</h2>
          <p class="error">${this.data.error}</p>
        </div>
      `;
    } else {
      return null;
    }
  }

  updateSearchParameters(event) {
    this.cityId = event.detail.value;
    this.data = {};
  }

  getForecast() {
    const endpoint = this.LOCATION_API_MOCKUP_URL + this.cityId + '.json';

    if (this.cityId) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((result) => {
          if (result.consolidated_weather) {
            this.addImgUrl(result.consolidated_weather);
            this.data = result;
          }
        })
        .catch((this.data = { error: 'No results found for this search criteria' }));
    }
  }

  addImgUrl(consolidatedWeather) {
    consolidatedWeather.map((element) => {
      element.weather_state_img_url = this.WEATHER_IMAGE_BASE_URL + element.weather_state_abbr + '.svg';
    });
  }

  displayResults() {
    return html`
      <div class="columns">
        ${this.data.consolidated_weather.map((item) => {
          return html`<card-component .data="${item}" class="column"></card-component>`;
        })}
      </div>
    `;
  }
}

customElements.define('results-component', ResultsComponent);
