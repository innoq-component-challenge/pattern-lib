import Card from "./card.js";
import Badge from "./badge.js";
import { Button } from "./button.js";
import { html } from "./util.js";
import render from "preact-render-to-string";

// eslint-disable-next-line no-console
console.log(render(html`
<${Card} hLevel=2 title="Hello World">
	<${Button} ...${{ cta: true }}>
		lorem ipsum
		<${Badge} type="important" caption="new" />
		${" "}
		dolor sit amet
	<//>
<//>
`));
