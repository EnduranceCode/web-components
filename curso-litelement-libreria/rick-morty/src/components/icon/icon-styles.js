import { css } from 'lit';

export const iconStyles = css`
  :host {
    --default-color: #f3efee;
    --primary-color: #9ebe1d;
    --secondary-color: #73d0fb;
    --warning-color: #f71906;
  }

  .icon svg {
    max-height: 40px !important;
  }

  .icon--primary {
    fill: var(--primary-color);
  }

  .icon--secondary {
    fill: var(--secondary-color);
  }

  .icon--default {
    fill: var(--default-color);
  }

  .icon--warning {
    fill: var(--warning-color);
  }
`;
