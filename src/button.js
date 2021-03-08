import { html } from "./util.js";

export function Button({ children }) {
	return html`<button>${children}</button>`;
}
