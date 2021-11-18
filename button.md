title: Button

The button component is used to demonstrate complex attributes like `data-` or `aria-` attributes which are provided by
the "outside" and not by the component itself. It should also be possible to provide custom `class` entries.

## Very simple form

Parameters:
* content: "Hello World"

```html
<button class="btn btn-secondary">Hello World</button>
```

## Simple attributes with custom `class`

Parameters:
* content: "Hello World"
* cta: true
* additional classes: text-uppercase

```html
<button class="btn btn-primary text-uppercase">Hello World</button>
```

## Complex additional attributes

Parameters:
* content: "Hello World"
* additional attributes: `{ "data-foo": "bar", "aria-live": "polite" }`

```html
<button class="btn btn-secondary" data-foo="bar" aria-live="polite">Hello World</button>
```

## Button standard attributes

Parameters:
* content: "Hello World"
* type: button
* name: action
* value: delete

```html
<button class="btn btn-secondary" type="button" name="action" value="delete">Hello World</button>
```
