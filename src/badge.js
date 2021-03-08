import { html } from "./util.js";
import classNames from "classNames";

let TYPES = {
	important: "bg-danger"
};

export default function Badge({ type, caption }) {
	let cls = classNames("badge", TYPES[type]);
	return html`<span class="${cls}">${caption}</span>`;
}
