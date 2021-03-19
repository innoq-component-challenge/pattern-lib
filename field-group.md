title: Text Field

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

## With data+validation model and I18n

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
