import { css } from 'lit';

export const selectStyles = css`
  :host {
    --default-color: #f3efee;
    --primary-color: #9ebe1d;
    --secondary-color: #73d0fb;
    --warning-color: #f71906;
    --focus-color: #cd5c5c;
  }

  select {
    border: none;
    border-bottom: 3px solid #000;
    box-sizing: border-box;
    height: 40px;
    margin-bottom: 10px;
    padding: 10px 10px;
    width: 100%;
  }

  select:focus {
    border: none;
    border-bottom: 3px solid var(--focus-color);
    outline: none;
  }

  select:disabled,
  select[disabled] {
    background-color: #cccccc;
    border-bottom: 3px solid #f6f6f6;
    color: #f6f6f6;
    pointer-events: none;
  }

  .select--default {
    background-color: var(--default-color);
  }

  .select--primary {
    background-color: var(--primary-color);
  }

  .select--secondary {
    background-color: var(--secondary-color);
  }

  .select--warning {
    background-color: var(--warning-color);
  }
`;
