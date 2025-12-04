# Collection Result

<div className="image-wrapper">
  <img
    src="/img/web-components/collection-result.png"
    alt="Collection Result Component"
    className="image-with-border"
  />
</div>

Shows compatibility status for a product.

Designed to be added on a product card.

## Component Details

```html
<bikematrix-collectionresult data-product-skus="SKU1,SKU2">
</bikematrix-collectionresult>
```

### Attributes

| Attribute           | Default | Required | Description                                                                                                                                                         | Example                  |
| ------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `data-product-skus` | `""`    | Yes      | A comma separated list of SKUs to check compatibility for. A '*' can be passed in to indicate a 'Blacklisted' product, where no compatibility status will be shown. | `"123456890,0987654321"` |

### Example

```html
<bikematrix-collectionresult data-product-skus="123456890,0987654321">
</bikematrix-collectionresult>
```

## Configuration

A more detailed overview of configuration can be found in the [Configuration section](/docs/configuration).

These options are to be set on a per web page basis:

| Option                    | Type   | Required | Description                                                                                        | Example        |
| ------------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `currentCollectionHandle` | string | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`. | `"brake-pads"` |
