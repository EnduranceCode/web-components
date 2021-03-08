import { html } from "lit-html";
import { BaseView } from "./base-view";

class NotFoundView extends BaseView {

    render() {
        return html `
            <h1>Not Found!</h1>

            <p>Please check your URL</p>
        `;
    }
}

customElements.define('not-found-view', NotFoundView);
