# Product Result

<div className="image-wrapper">
  <img
    src="/img/web-components/product-result.png"
    alt="Product Result Component"
    className="image-with-border"
  />
</div>

Shows compatibility for a single product.

Designed to be used on a product's page.

## Component Details

```html
<bikematrix-productresult
  data-sku="PRODUCT_SKU"
  data-padding-top="Number of Pixels"
  data-padding-bottom="Number of Pixels"
>
</bikematrix-productresult>
```

### Attributes

| Attribute             | Default | Required | Description                                                                                                                                            | Example       |
| --------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `data-sku`            | `""`    | Yes      | A SKU to check compatibility with. A '*' can be passed in to indicate a 'Blacklisted' product, where no compatibility status will be shown.            | `"123456890"` |
| `data-padding-top`    | `"0"`   | No       | Padding above the element in number of pixels.                                                                                                         | `"10"`        |
| `data-padding-bottom` | `"0"`   | No       | Padding below the element in number of pixels.                                                                                                         | `"10"`        |

### Example

```html
<bikematrix-productresult
  data-sku="1234567890"
  data-padding-top="10"
  data-padding-bottom="10"
>
</bikematrix-productresult>
```

## Configuration

A more detailed overview of configuration can be found in the [Configuration section](/docs/configuration).

These options are to be set on a per web page basis:

| Option               | Type     | Required | Description                                                                                                      | Example                         |
| -------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `productCollections` | string[] | Yes      | List of collections the product belongs to. Each value of the list should match a `handle` in the `collections`. | `["brake-pads","brake-rotors"]` |
