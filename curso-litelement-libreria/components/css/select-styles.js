import { css } from 'lit';

export const selectStyles = css`
  :host {
    --primary-color: #9ebe1d;
    --default-color: #f3efee;
    --warning-color: #f71906;
    --error-msg: #cd5c5c;
  }

  label {
    display: block;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  select {
    border: none;
    border-bottom: 3px solid #000;
    font-family: 'Lucia Console', 'Courier New', monospace;
    font-size: 16px;
    height: 50px;
    margin-bottom: 10px;
    padding: 8px 10px;
    width: 250px;
  }

  select:focus {
    border: none;
    border-bottom: 3px solid gray;
    outline: none;
  }

  select:disabled,
  select[disabled] {
    background-color: #cccccc;
    border-bottom: 3px solid #f6f6f6;
    color: #f6f6f6;
    pointer-events: none;
  }

  .color-select {
    background-color: var(--primary-color);
  }

  .error-msg {
    color: var(--error-msg);
    font-size: 12px;
  }

  .required::after {
    color: var(--error-msg);
    content: '*';
    font-size: 14px;
    margin-left: 5px;
  }
`;
