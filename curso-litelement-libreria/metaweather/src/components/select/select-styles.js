import { css } from 'lit';

export const selectStyles = css`
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

  select {
    border-radius: 5px;
    border-width: 1px;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 10px;
    width: 100%;
  }

  select:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  select:disabled,
  select[disabled] {
    background-color: var(--grey-lighter);
    border-color: var(--grey);
    color: var(--grey-light);
    pointer-events: none;
  }

  .select--default {
    border-color: var(--grey-dark);
  }

  .select--primary {
    border-color: var(--primary-color);
  }

  .select--link {
    border-color: var(--link-color);
  }

  .select--info {
    border-color: var(--info-color);
  }

  .select--success {
    border-color: var(--success-color);
  }

  .select--warning {
    border-color: var(--warning-color);
  }

  .select--danger {
    border-color: var(--danger-color);
  }
`;
