title: Field Group

The field group doesn't represent an unique challenge to the template language by itself. 
But it is a very common component which should be implemented by nearly every pattern library
in the real life. So this component is more or less a test how your template language would
perform in a real project with a real component which everybody should have seen before.

## Simple 

Parameter:
* label: Name
* input ID: name
* name: name

```html
<div class="field-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" name="name" class="form-control">
</div>
```

Parameter:
* label: Email
* input ID: email
* type: email
* name: email
* value: bob@example.org

```html
<div class="field-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" name="email" value="bob@example.org" class="form-control">
</div>
```

## With errors

Parameter:
* label: Email
* input ID: email
* type: email
* name: email
* value: halp
* error: Invalid Email Address

```html
<div class="field-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" name="email" value="halp" class="form-control is-invalid">
    <p class="invalid-feedback">Invalid Email Address</p>
</div>
```

## Extended version with data+validation model and I18n

The extended version of this component is meant to deal with "form" and "validation" objects from the respective programming environment. Since it has a very different set of parameters this will be most likely be a different component then the
basic version in your implementation of this pattern library.

Parameter:
* field: email
* type: email
* error: `{email: invalid_address}`
* object: `{email: 'halp'}`
* locale: de
* i18n: `fn(...)`

```html
<div class="field-group">
    <label for="email" class="form-label">E-Mail</label>
    <input type="email" id="email" name="email" value="halp" class="form-control is-invalid">
    <p class="invalid-feedback">Die angegebene E-Mail-Adresse ist ungültig</p>
</div>
```
