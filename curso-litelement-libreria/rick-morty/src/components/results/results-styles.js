import { css } from 'lit';

export const resultsStyles = css`
  :host {
    --default-color: #f3efee;
    --primary-color: #9ebe1d;
    --secondary-color: #73d0fb;
    --warning-color: #f71906;
    --focus-color: #cd5c5c;
  }

  .error {
    color: var(--warning-color);
  }
`;
