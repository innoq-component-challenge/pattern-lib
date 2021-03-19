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
	button: "./button.md",
	card: "./card.md",
	forms: "./field-group.md",
	badge: "./badge.md",
	list: "./list.md",
	magic_headers: "./magic_headers.md",
};
