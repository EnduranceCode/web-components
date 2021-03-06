import { html } from "lit-html";
import { connect } from "pwa-helpers";
import { store } from "../redux/store";
import { BaseView } from "./base-view";
import { statsSelector } from "../redux/reducer";
import '@vaadin/vaadin-charts';

class StatsView extends connect(store)(BaseView) {

    static get properties() {
        return {
            chartConfig: {type: Object}
        };
    }

    stateChanged(state) {
        const stats = statsSelector(state);
        this.chartConfig = [
            {name: 'Completed', y: stats.completed},
            {name: 'Active', y: stats.active}
        ]

        this.hasTodos = state.todos.length > 0;
    }

    render() {
        return html `
            <style>
                stats-view {
                    display: block;
                }
            </style>

            ${this.getChart()}
        `;
    }

    getChart() {
        if(this.hasTodos) {
            return html `
            <vaadin-chart type="pie">
                <vaadin-chart-series .values="${this.chartConfig}"></vaadin-chart-series>
             </vaadin-chart>
            `;
        } else {
            return html `
                <p>Nothing to do</p>
            `;
        }
    }
}

customElements.define('stats-view', StatsView);
