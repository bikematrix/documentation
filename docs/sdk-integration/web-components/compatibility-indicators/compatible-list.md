# Compatible List

<div className="image-wrapper">
  <img
    src="/img/web-components/compatible-list.png"
    alt="Compatible List Component"
    className="image-with-border"
  />
</div>

Displays a list of all compatible products from the current collection.

This is designed to be used at the top of a collection page or as part of a 'Shop by Bike' page where users can browse products compatible with their chosen bike.

## Component Details

The web component takes a child template element for use when displaying product cards. This allows you to customise the design of your product cards displayed inside the Compatible List component.

```html
<bikematrix-compatiblelist data-title="Compatible List">
  <!-- Product Card Template (optional) -->
  <template slot="product-card">
    <!-- Product Card HTML -->
  </template>
  <!-- End of Product Card Template -->
</bikematrix-compatiblelist>
```

### Product Card Template

To customise your product card, you can provide HTML inside the `<template slot="product-card">` element.

You can use product data inside this template, as shown in the [example](#example).

This product data is set in the `products` variable in the [configuration](#configuration).

### Attributes

| Attribute    | Default                              | Required | Description                            | Example                 |
| ------------ | ------------------------------------ | -------- | -------------------------------------- | ----------------------- |
| `data-title` | `"Compatible Products"` (translated) | No       | Text shown at the top of the component. | `"Compatible Products"` |

## Dynamic / SDK Usage (v1.3+)

The Compatible List supports client-side rendering for SDK-based implementations.

This allows you to:
- initialise the component in a loading / wait state
- load products dynamically, for example from your own APIs
- render or update the Compatible List after products are available

### Initialisation

Set `delayCompatibleListInitialization` to `true` in your configuration:

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": "brake-pads",
    "delayCompatibleListInitialization": true
  }
</script>
```

### Updating the Compatible List

Once products are available, call:

```javascript

  // fetch products for the current collection via your API
  let collectionProducts = ... 

  let updatedConfig = {
    products: collectionProducts,
  }

  const scriptTag = document.createElement('script')
  scriptTag.type = 'application/json'
  scriptTag.setAttribute('data-bikematrix-config', '')
  scriptTag.textContent = JSON.stringify(updatedConfig)
  document.body.appendChild(scriptTag)
  window.BikeMatrix.updateCompatibleList(true)

```

Where `products` follows the same structure as defined in the [configuration](#configuration).

### Wait State (Loading UI)

You can optionally provide progress information whilst fetching products from your API using the following attributes on the component:

| Attribute            | Type   | Description                                           |
| -------------------- | ------ | ----------------------------------------------------- |
| `data-current-count` | number | Number of products currently loaded                   |
| `data-total-count`   | number | Total number of products expected                     |

Example:

```html
<bikematrix-compatiblelist
  data-title="Compatible Products"
  data-current-count="12"
  data-total-count="100"
></bikematrix-compatiblelist>
```

This can be updated dynamically whilst products are being loaded:

```javascript
const component = document.querySelector('bikematrix-compatiblelist')
component.setAttribute('data-current-count', currentCount)
component.setAttribute('data-total-count', totalCount)
```

When these values are provided, the Compatible List will display a wait state message (including translation for multiple languages) while products are being loaded and checked for compatibility.

### When to use this approach

This method is recommended when:
- products are loaded dynamically
- you cannot access all products server side at page load
- you want better control over loading states and UX

## Example

```html
<bikematrix-compatiblelist data-title="Compatible Products">
  <!-- Product Card Template (optional) -->
  <template slot="product-card">
    <div class="bm-compatible-product-wrapper">
      <div class="bm-compatible-product-image">
        <a href="{{productUrl}}">
          <img src="{{featuredImage}}" width="80px" alt="" loading="lazy" />
        </a>
      </div>
      <div class="bm-compatible-product-title">
        <a href="{{productUrl}}">{{ productTitle }}</a>
      </div>
      <div class="bm-compatible-product-price">
        <a href="{{productUrl}}">
          <p><strong>{{ price }}</strong></p>
        </a>
      </div>
      {{ compatibility }}
    </div>
  </template>
  <!-- End of Product Card Template -->
</bikematrix-compatiblelist>
```

## Configuration

A more detailed overview of configuration can be found in the [Configuration section](/docs/sdk-integration/configuration.md).

These options are set on a per-page basis:

| Option                              | Type                          | Required | Description                                                                                                                             | Example                                                  |
| ----------------------------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `currentCollectionHandle`           | string                        | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`.                                     | `"brake-pads"`                                           |
| `products`                          | \{[key: string]: ProductInfo} | No       | Information for all products to check compatibility on. See the ['products' explained](#products-explained) section.                   | See ['products' explained](#products-explained) section. |
| `collectionUrl`                     | string                        | No       | URL for the current collection, used to link back to the first page of the collection. Default is empty.                               | `"/collections/brake-pads"`                              |
| `compatiblityListCurrentPage`       | number                        | No       | Current page number of the collection. After page 1, the component links back to the first page for compatible results. Default is 0. | `1`                                                      |
| `showCompatibleList`                | boolean                       | No       | Whether to show the Compatible List component. Default is `true`.                                                                       | `true`                                                   |
| `delayCompatibleListInitialization` | boolean                       | No       | If `true`, delays Compatible List rendering until `updateCompatibleList()` is called.                                                  | `true`                                                   |

> Note: As of v1.3+, the `products` field can be omitted when using client-side rendering with `delayCompatibleListInitialization` set to `true` and calling `updateCompatibleList()`.

#### 'products' explained

`products` is defined as:

```javascript
{
  [key: string]: {
    "skus": string[],
    "productUrl": string,
    "productTitle": string,
    "featuredImage": string,
    "price": string,
    "priceFrom": string,
    [key: string]: any
  }
}
```

This is a keyed list of all products to include as part of the Compatible List check.

- The first `key` value should be your product ID.
- The `skus` value should be a list of all SKUs for the product, as the product may have multiple variants.

All other product fields are available for use in the injected HTML into the web component. This HTML is used to display the product card, so usage will vary depending on your product card.

An example of the `products` configuration option is:

```javascript
{
  "123": {
    "productUrl": "/product",
    "productTitle": "SRAM Large Disc Brake Pads",
    "featuredImage":
      "https://www.biketart.com/cdn/shop/files/HeavyDuteSintered.jpg?v=1714977245&width=1950",
    "price": "$40.00",
    "skus": ["710845642012"]
  },
  "124": {
    "productUrl": "/product",
    "productTitle": "Jagwire Pro E-Bike Disc Pad - SRAM Code",
    "featuredImage":
      "https://www.biketart.com/cdn/shop/files/39869-pm.jpg?v=1692603872&width=750",
    "price": "$34.00",
    "skus": ["4715910041895"]
  }
}
```
