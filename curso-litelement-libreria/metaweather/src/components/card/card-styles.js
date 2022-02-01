import { css } from 'lit';

export const cardStyles = css`
  .card {
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  }

  .card__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    max-width: 50%;
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
    display: grid;
    grid-template-columns: auto auto;
  }

  .card__item--title {
    font-weight: 500;
  }

  .card__item--data {
    text-align: right;
  }
`;
