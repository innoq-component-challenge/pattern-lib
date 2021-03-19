title: Card

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
