title: List

This component is meant to demonstrate the transformation of complex parameters (like a Map).

Ideally the `items` parameter should be an object of your host language and be transformed into
`dt` and `dd` elements by your component's implementation. How to deal with HTML data inside one of this
objects is an interesting case of black- or whitelisting HTML in host language Strings.

The `ratio` parameter should be parsed by your implementation and be used to determine the `col-sm-x` classes
for the `dt` and `dd` elements.

Parameter:
* ratio: `"1:3"`
* items: a Map of items (e.g. in JavaScript `{'Type': 'Car', 'Foo': '<span lang="de">Etwas</span text'}`)

```html
<dl class="row">
  <dt class="col-sm-3">Type</dt>
  <dd class="col-sm-9">Car</dd>
  <dt class="col-sm-3">Foo</dt>
  <dd class="col-sm-9"><span lang="de">Etwas</span text</dd>
</dl>
```
