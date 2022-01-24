import { css } from 'lit';

export const buttonStyles = css`
  :host {
    --default-color: #f3efee;
    --primary-color: #9ebe1d;
    --secondary-color: #73d0fb;
    --warning-color: #f71906;
  }

  .button {
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: white;
    display: inline-block;
    font-size: 14px;
    padding: 10px 10px;
    text-decoration: none;
    width: 100%;
  }

  .button:hover {
    box-shadow: 0 6px 8px rgb(0, 0, 0, 0.24);
  }

  .button:disabled,
  .button[disabled] {
    background-color: #cccccc;
    color: #f6f6f6;
    pointer-events: none;
  }

  .button--default {
    background-color: var(--default-color);
  }

  .button--primary {
    background-color: var(--primary-color);
  }

  .button--secondary {
    background-color: var(--secondary-color);
  }

  .button--warning {
    background-color: var(--warning-color);
  }
`;
