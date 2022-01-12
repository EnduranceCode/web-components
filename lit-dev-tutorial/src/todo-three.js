import { LitElement, html, css } from 'lit';
class TodoThree extends LitElement {
  static properties = {
    listItems: {},
    hideCompleted: {},
  };

  static styles = css`
    .completed {
      color: #777;
      text-decoration-line: line-through;
    }
  `;

  constructor() {
    super();
    this.listItems = [
      { text: 'Start Lit tutorial', completed: true },
      { text: 'Make to-do list', completed: false },
    ];
  }

  render() {
    const items = this.hideCompleted
      ? this.listItems.filter((item) => {
          return !item.completed;
        })
      : this.listItems;

    const todos = html`<ul>
      ${items.map((item) => {
        return html`<li
          @click=${() => {
            this.toggleCompleted(item);
          }}
          class=${item.completed ? 'completed' : ''}
        >
          ${item.text}
        </li>`;
      })}
    </ul>`;

    const caughtUpMessage = html`<p>You're all cught up!</p>`;

    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addTodo}>Add</button>
      <label><input type="checkbox" @change=${this.setHideCompleted} />Hide completed</label>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(event) {
    this.hideCompleted = event.target.checked;
  }

  addTodo() {
    this.listItems.push({ text: this.input.value, completed: false });
    this.input.value = '';
    this.requestUpdate();
  }
}
customElements.define('todo-three', TodoThree);
