"use strict";

exports.title = "Example Styleguide";
exports.language = "en";

exports.snippetAssets = {
	sass: [{
		source: "bootstrap/scss/bootstrap.scss",
		target: "./bootstrap.css"
	}],
};

exports.pages = {
	".": "./README.md",
	badge: "./badge.md",
	button: "./button.md",
	card: "./card.md",
	field_group: "./field-group.md",
	list: "./list.md",
	magic_headers: "./magic_headers.md",
};
