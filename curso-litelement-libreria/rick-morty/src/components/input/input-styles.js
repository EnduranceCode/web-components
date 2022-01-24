import { css } from 'lit';

export const inputStyles = css`
  :host {
    --default-color: #f3efee;
    --primary-color: #9ebe1d;
    --secondary-color: #73d0fb;
    --warning-color: #f71906;
    --focus-color: #cd5c5c;
  }

  input {
    background: transparent;
    background-color: var(--primary-color);
    border: 0;
    border-bottom: 3px solid #000;
    box-sizing: border-box;
    height: 40px;
    padding: 10px;
    width: 100%;
  }

  input:focus {
    border: none;
    border-bottom: 3px solid var(--focus-color);
    outline: none;
  }

  input:disabled,
  input[disabled] {
    background-color: #cccccc;
    border-bottom: 3px solid #f6f6f6;
    color: #f6f6f6;
    pointer-events: none;
  }

  .input--default {
    background-color: var(--default-color);
  }

  .input--primary {
    background-color: var(--primary-color);
  }

  .input--secondary {
    background-color: var(--secondary-color);
  }

  .input--warning {
    background-color: var(--warning-color);
  }
`;
