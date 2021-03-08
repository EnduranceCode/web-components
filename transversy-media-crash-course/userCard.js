class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <style>
            h3 {
                color: coral;
            }
        </style>

        <h3>${this.getAttribute('name')}</h3>
    `;
  }
}

window.customElements.define('user-card', UserCard);
