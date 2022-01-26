import { css } from 'lit';

export const cardStyles = css`
  .card {
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
  }

  .card__image {
    width: 100%;
  }

  .card__body {
    padding: 15px;
  }

  .card__title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  .card__item {
    margin: 0;
  }

  .card__item--title {
    display: inline-block;
    font-weight: 500;
    width: 30%;
  }

  .card__item--data {
    display: inline-block;
    text-align: right;
    width: 65%;
  }
`;
