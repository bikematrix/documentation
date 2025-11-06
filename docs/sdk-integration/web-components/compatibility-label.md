# Compatibility Label

<div className="image-wrapper">
  <img
    src="/img/web-components/compatibility-label.png"
    alt="Compatibility Label Component"
    className="image-with-border"
  />
</div>

A basic element for showing a product's compatibility status. This is used by the [Collection Result Component](/docs/web-components/collection-result.md).

## Component Details

```html
<bikematrix-compatibilitylabel
  data-type="Compatible Type"
></bikematrix-compatibilitylabel>
```

### Attributes

| Attribute   | Default | Required | Description                                                              | Example        |
| ----------- | ------- | -------- | ------------------------------------------------------------------------ | -------------- |
| `data-type` | `""`    | Yes      | One of `"unavailable"`, `"compatible"`. `"warning"` or `"incompatible"`. | `"compatible"` |

### Example

```html
<bikematrix-compatibilitylabel
  data-type="compatible"
></bikematrix-compatibilitylabel>
```
