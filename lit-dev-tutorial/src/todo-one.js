import { LitElement, html } from 'lit';
class TodoOne extends LitElement {
  static properties = {
    listItems: {},
  };

  constructor() {
    super();
    this.listItems = [
      { text: 'Start Lit tutorial', completed: true },
      { text: 'Make to-do list', completed: false },
    ];
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this.listItems.map((item) => {
          return html`<li>${item.text}</li>`;
        })}
      </ul>
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addTodo}>Add</button>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addTodo() {
    this.listItems.push({ text: this.input.value, completed: false });
    this.input.value = '';
    this.requestUpdate();
  }
}
customElements.define('todo-one', TodoOne);
