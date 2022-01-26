import { css } from 'lit';

export const generalStyles = css`
  .container {
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
  }

  .grid-column {
    column-gap: 20px;
    display: grid;
    margin-bottom: 10px;
  }

  .grid-column--12 {
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  }

  .grid-column--8 {
    grid-template-columns: auto auto auto auto auto auto auto auto;
  }

  .grid-column--6 {
    grid-template-columns: auto auto auto auto auto auto;
  }

  .grid-column--4 {
    grid-template-columns: auto auto auto auto;
  }

  .grid-column--2 {
    grid-template-columns: auto auto;
  }

  .grid-column--1 {
    grid-template-columns: auto;
  }

  #icon {
    text-align: center;
  }
`;
