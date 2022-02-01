import { css } from 'lit';

export const resultsStyles = css`
  :host {
    --primary-color: #00d1b2;
    --link-color: #485fc7;
    --info-color: #3e8ed0;
    --success-color: #48c78e;
    --warning-color: #ffe08a;
    --danger-color: #f14668;
    --grey-dark: #4a4a4a;
    --grey: #7a7a7a;
    --grey-light: #b5b5b5;
    --grey-lighter: #dbdbdb;

    --results-gap: 15px;
  }

  .columns {
    column-gap: var(--results-gap);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .column {
    margin-bottom: var(--results-gap);
  }

  .error {
    color: var(--danger-color);
  }
`;
