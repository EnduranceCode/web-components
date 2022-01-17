import { css } from 'lit';

export const cardStyles = css`
  img {
    width: 100%;
  }

  .card {
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    width: 80%;
  }
  .card-album {
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    margin: auto auto 60px auto;
    max-width: 300px;
    text-align: center;
  }

  .title {
    color: gray;
    font-size: 22px;
  }
`;
