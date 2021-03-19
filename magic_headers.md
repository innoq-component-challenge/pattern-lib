title: Magic headers

A component to automatically determine the heading's correct level.

Parameter:
* skeleton: `<article><header-slot-placeholder><body-slot-placeholder></article>` 
* header text: `Header Text`
* body: `<p>Foo bar</p>` + Another _Magic headers_ component with
   * skeleton: `<section><header-slot-placeholder><hr><body-slot-placeholder></section>`
   * header text: `Some other header Text`
   * body: `<p>Blah</p>`

Note: The _body_ parameter can contain any composition of HTML elements and other instances of this component. All directly included instances of this component must have a heading level 1 greater than the heading level of the containing component. 

```html
<article>
  <h1>Header Text</h1>
  <p>Foo bar</p>
  <section>
      <h2>Some other header Text</h2>
      <hr>
      <p>Blah</p>
  </section>    
</article>
```
