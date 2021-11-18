title: Card

The Card component is used to demonstrate the support of "named blocks". These are HTML snippets which 
are inserted into the component. Nearly every template engine has the ability to do this with one
content block. But the card requires to deal with more then one block containing HTML.

## Basic form with only one block

Parameter:
* heading level: 2
* heading: "Foo"
* body: `Welcome to the <strong>best card</strong>`

```html
<section class="card">
  <div class="card-body">
    <h2 class="card-title">Foo</h2>
    <p class="card-text">Welcome to the <strong>best card</strong></p>
  </div>
</section>
```

## Wrapping html around a named block

This should wrap an `<a>` tag around the `heading` if the parameter `href` is given. 

Parameter:
* heading level: 3
* heading: "Foo"
* href: "#foo"
* body: `Welcome to the <strong>best card</strong>`

```html
<section class="card">
  <div class="card-body">
    <h3 class="card-title"><a href="#foo">Foo</a></h3>
    <p class="card-text">Welcome to the <strong>best card</strong></p>
  </div>
</section>
```

## HTML in named blocks

Parameter:
* heading level: 2
* heading: `<span lang="de">Großartige</span> Card`
* body: `Welcome to the <strong>best card</strong>`

```html
<section class="card">
  <div class="card-body">
    <h2 class="card-title"><span lang="de">Großartige</span> Card</h2>
    <p class="card-text">Welcome to the <strong>best card</strong></p>
  </div>
</section>
```

## Optional elements

Parameter:
* heading level: 2
* heading: `<span lang="de">Großartige</span> Card`
* href: `#foo`
* body: `Welcome to the <strong>best card</strong>`
* footer: `So <strong>strong</strong>`

```html
<section class="card">
  <div class="card-body">
    <h2 class="card-title"><a href="#foo"><span lang="de">Großartige</span> Card</a></h2>
    <p class="card-body">Welcome to the <strong>best card</strong></p>
  </div>
  <div class="card-footer">So <strong>strong</strong></div>
</section>
```
