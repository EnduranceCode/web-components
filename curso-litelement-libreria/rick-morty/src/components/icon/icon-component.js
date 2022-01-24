import { LitElement, html } from 'lit';
import { iconStyles } from './icon-styles';

class IconComponent extends LitElement {
  static styles = [iconStyles];

  static properties = {
    iconName: { attribute: 'icon-name' },
    iconType: { attribute: 'icon-type' },
  };

  constructor() {
    super();
    this.iconName = '';
    this.iconType = '';
  }

  render() {
    return html` <span class="${this.getIconClass()}">${this.getSvg(this.iconName)}</span> `;
  }

  getSvg(iconName) {
    switch (iconName) {
      case 'edit':
        return html`
          <svg viewBox="0 0 32 32">
            <path
              d="M4.002 22.998v5h5l14.753-14.753-5-5zM27.608 9.392c.52-.52.52-1.367 0-1.887l-3.113-3.113a1.336 1.336 0 0 0-1.887 0l-2.44 2.44 5 5z"
            />
          </svg>
        `;
      case 'home':
        return html`
          <svg viewBox="0 0 32 32">
            <path
              d="M30.854 16.548A2.216 2.216 0 0 1 28.764 18H28v11a1 1 0 0 1-1 1h-6v-7c0-2.757-2.243-5-5-5s-5 2.243-5 5v7H5a1 1 0 0 1-1-1V18h-.765a2.215 2.215 0 0 1-2.09-1.451 2.218 2.218 0 0 1 .62-2.47l11.679-11.06a3.718 3.718 0 0 1 5.112 0l11.707 11.086c.678.591.922 1.561.591 2.443z"
            />
          </svg>
        `;
      case 'search':
        return html`
          <svg viewBox="0 0 32 32">
            <path
              d="m27.414 24.586-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"
            />
          </svg>
        `;
      case 'trash':
        return html`
          <svg viewBox="0 0 32 32">
            <path
              d="M6 12v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V12H6zm6 13a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zm5 0a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zm5 0a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zM27 6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v1H5c-1.103 0-2 .897-2 2v1a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8c0-1.103-.897-2-2-2zM13 5c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1h-6V5z"
            />
          </svg>
        `;
      default:
        return html``;
    }
  }

  getIconClass() {
    switch (this.iconType) {
      case 'primary':
        return 'icon icon--primary';
      case 'secondary':
        return 'icon icon--secondary';
      case 'warning':
        return 'icon icon--warning';
      case 'default':
      default:
        return 'icon icon--default';
    }
  }
}

customElements.define('icon-componet', IconComponent);
