import { css } from 'lit';

export const buttonStyles = css`
  .button {
    border: none;
    border-radius: 5px;
    color: white;
    display: inline-block;
    font-size: 14px;
    margin-right: 15px;
    padding: 10px 10px;
    text-decoration: none;
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

  .button--primary {
    background-color: #9ebe1d;
  }

  .button--secondary {
    background-color: #f71906;
  }
`;
