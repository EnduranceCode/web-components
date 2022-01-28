import { css } from 'lit';

export const buttonStyles = css`
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
  }

  .button {
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    height: 40px;
    padding: 10px 10px;
    text-decoration: none;
    width: 100%;
  }

  .button:hover {
    box-shadow: 2px 4px 8px rgb(0, 0, 0, 0.24);
  }

  .button:disabled,
  .button[disabled] {
    background-color: var(--grey-lighter);
    color: var(--grey-light);
    pointer-events: none;
  }

  .button--default {
    background-color: var(--grey-dark);
  }

  .button--primary {
    background-color: var(--primary-color);
  }

  .button--link {
    background-color: var(--link-color);
  }

  .button--info {
    background-color: var(--info-color);
  }

  .button--success {
    background-color: var(--success-color);
  }

  .button--warning {
    background-color: var(--warning-color);
  }

  .button--danger {
    background-color: var(--danger-color);
  }
`;
