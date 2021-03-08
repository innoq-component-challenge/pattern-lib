import { html } from "./util.js";

export default function Card({ title, hLevel, children }) {
	let Heading = `h${hLevel}`;
	return html`
<section class="card">
	<div class="card-body">
		<${Heading} class="card-title">${title}<//>
		<p class="card-text">${children}</p>
	</div>
</section>
	`;
}
