import { css } from 'lit';

export const tableStyles = css`
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 30%;
    background-color: #4fc3f7;
  }

  th {
    text-align: center;
    padding: 10px;
  }

  td {
    text-align: center;
    padding: 10px;
    font-weight: normal;
  }

  tbody tr:nth-child(odd) {
    background-color: #b3e5fc;
  }
`;
