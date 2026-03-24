import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDK Configuration

This page provides details of the SDK / Web Component JSON configuration. Configuration is stored under the `data-bikematrix-config` script.

:::info

The SDK web components are built to support Shopify and other non-Shopify e-commerce platforms and websites. Some configuration is specific to Shopify, to help overcome limitations of that platform.

Our goal with this documentation is to simplify and explain the configuration as clearly as possible.

:::

## Configuration Implementation

BikeMatrix is configured using a JSON configuration block in your HTML.

The configuration block can be used multiple times throughout your HTML, with options merged together sequentially.

Some configuration will be site-wide and should be placed at the top level of your HTML. Some web component specific configuration must be set per page where the component is used.

### Core Configuration

This configuration should be placed at the top level of your HTML.

<Tabs>
<TabItem value="definition" label="Configuration Definition">

This is the **site-wide core configuration** definition for the SDK:

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": string,
    "apiKey": string,
    "apiToken": string,
    "categories": [
      {
        "title": string,
        "text_id": string,
        "collection": string
      }
    ],
    "collections": [
      {
        "title": string,
        "handle": string,
        "url": string
      }
    ],
    "bikeSelectorBrands": string,
    "logLevel": "none" | "verbose",
    "virtualWorkshop": boolean,
    "pageType": "collection" | "product" | "index" | "search"
    ,
    "showBrowseCategoryButtons": boolean,
    "browseCompatibilityUrl": string
  }
</script>
```

</TabItem>
<TabItem value="example" label="Configuration Example">

This is an example of the **site-wide core configuration** for the SDK:

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": "https://api.bikematrix.io/proxy/v3/",
    "apiToken": "appname|012345678912345|abcdefghijklmnopqrstuvwxyz=",
    "categories": [
      {
        "title": "Brake Pads",
        "text_id": "category_brakepads",
        "collection": "Brake pads"
      }
    ],
    "collections": [
      {
        "title": "Brake pads",
        "handle": "brake-pads",
        "url": "/collections/brake-pads"
      }
    ],
    "pageType": "collection"
    ,
    "showBrowseCategoryButtons": true,
    "browseCompatibilityUrl": "/collections/compatibility"
  }
</script>
```

Note that **bikeSelectorBrands**, **logLevel**, and **virtualWorkshop** are optional.

</TabItem>
</Tabs>

### Web Component Specific Configuration

The following sections are for **web component specific configuration**:

<details>
  <summary><strong>Collection Result Component Configuration</strong></summary>
  <div>
    This should be set on each web page where the Collection Result web component is used.

    <Tabs>
      <TabItem value="definition" label="Configuration Definition">

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": string
  }
</script>
```

      </TabItem>
      <TabItem value="example" label="Configuration Example">

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": "brake-pads"
  }
</script>
```

      </TabItem>
    </Tabs>
  </div>
</details>

<details>
  <summary><strong>Product Result Component Configuration</strong></summary>
  <div>
    This should be set on each web page where the Product Result web component is used.

    <Tabs>
      <TabItem value="definition" label="Configuration Definition">

```html
<script type="application/json" data-bikematrix-config>
  {
    "productCollections": string[]
  }
</script>
```

      </TabItem>
      <TabItem value="example" label="Configuration Example">

```html
<script type="application/json" data-bikematrix-config>
  {
    "productCollections": ["brake-pads", "brake-rotors"]
  }
</script>
```

      </TabItem>
    </Tabs>
  </div>
</details>

<details>
  <summary><strong>Variant Selector Component Configuration</strong></summary>
  <div>
    This should be set on each web page where the Variant Selector web component is used.

    <Tabs>
      <TabItem value="definition" label="Configuration Definition">

```html
<script type="application/json" data-bikematrix-config>
  {
    "productCollections": string[]
  }
</script>
```

      </TabItem>
      <TabItem value="example" label="Configuration Example">

```html
<script type="application/json" data-bikematrix-config>
  {
    "productCollections": ["brake-pads", "brake-rotors"]
  }
</script>
```

      </TabItem>
    </Tabs>
  </div>
</details>

<details>
  <summary><strong>Compatible List Component Configuration</strong></summary>
  <div>
    This should be set on each web page where the Compatible List web component is used.

    <Tabs>
      <TabItem value="definition" label="Configuration Definition">

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": string,
    "products": {
      [key: string]: {
        "skus": string[],
        "productUrl": string,
        "productTitle": string,
        "featuredImage": string,
        "price": string,
        "priceFrom": string,
        [key: string]: any
      }
    },
    "collectionUrl": string,
    "compatiblityListCurrentPage": number,
    "showCompatibleList": boolean,
    "delayCompatibleListInitialization": boolean
  }
</script>
```

      </TabItem>
      <TabItem value="example" label="Configuration Example">

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": "brake-pads",
    "products": {
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
  }
</script>
```

Note that **collectionUrl**, **compatiblityListCurrentPage**, **showCompatibleList**, and **delayCompatibleListInitialization** are optional.

      </TabItem>
    </Tabs>

    ### SDK / Client-Side Rendering (v1.3+)

    For SDK-based implementations where products are loaded dynamically (for example via JavaScript), the Compatible List can now be initialised in a wait state and populated after page load.

    This avoids needing to include all product data in the initial HTML.

    #### Example

```html
<script type="application/json" data-bikematrix-config>
  {
    "currentCollectionHandle": "brake-pads",
    "delayCompatibleListInitialization": true
  }
</script>

<script type="text/javascript">

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

</script>


```

Products can then be added to the config client-side, then calling the `updateCompatibleList()` method to show the compatible products. See the [Compatible List documentation](/docs/sdk-integration/web-components/compatibility-indicators/compatible-list) for more details.

  </div>
</details>

---

## Configuration Options Detailed

### Core Configuration Options

These options are set for the entire site:

| Option               | Type                                                          | Required | Description                                                                                                                          | Example                                                                                  |
| -------------------- | ------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `apiUrl`             | string                                                        | Yes      | The BikeMatrix API endpoint URL.                                                                                                     | `"https://api.bikematrix.io/proxy/v3/"`                                                  |
| `apiKey`             | string                                                        | Maybe    | Your BikeMatrix API key. See ['apiKey' and 'apiToken' explained](#apikey-and-apitoken-explained).                                  | `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`                                                           |
| `apiToken`           | string                                                        | Maybe    | An HMAC signature for secure API requests. See ['apiKey' and 'apiToken' explained](#apikey-and-apitoken-explained).                | `"sitename|012345678912345|abcdefghijklmnopqrstuvwxyz="`                                 |
| `categories`         | Array\<\{title: string, text_id: string, collection: string}> | Yes      | List of product categories. See ['categories' and 'collections' explained](#categories-and-collections-explained).                  | `[{"title": "Brake Pads", "text_id": "category_brakepads", "collection": "Brake pads"}]` |
| `collections`        | Array\<\{title: string, handle: string, url: string}>         | Yes      | List of collections. See ['categories' and 'collections' explained](#categories-and-collections-explained).                         | `[{"title": "Brake pads", "handle": "brake-pads", "url": "/collections/brake-pads"}]`    |
| `bikeSelectorBrands` | string                                                        | No       | Comma separated list of bike brand IDs to include. An empty string includes all bike brands. Default is an empty string.            | `""`                                                                                     |
| `logLevel`           | `"none"` \| `"verbose"`                                       | No       | Logging verbosity level. Default is `"none"`.                                                                                        | `"verbose"`                                                                              |
| `virtualWorkshop`    | boolean                                                       | No       | Enables the Virtual Workshop functionality.                                                                                          | `true`                                                                                   |
| `pageType`           | `"collection"` \| `"product"` \| `"index"` \| `"search"`     | Yes      | The page type for the current page.                                                                                                  | `"collection"`                                                                           |
| `showBrowseCategoryButtons`  | boolean | No | Show or hide the built-in Browse Category buttons. If false, you can use your own button or link by setting `browseCompatibilityUrl`. Default is `true`. v1.3.3+ | `true` |
| `browseCompatibilityUrl`     | string  | No | URL to direct users to your own "Shop by Bike" or compatibility page. If set, and the showBrowseCategoryButtons is `true`, the built-in Browse Compatibility button will use this URL. v1.3.3+ | `"/collections/compatibility"` |

#### 'apiKey' and 'apiToken' explained

Only one of `apiKey` or `apiToken` should be set.

- `apiKey` should not be used outside of trusted environments. It should only be used for internal systems, or for test environments.
- When getting ready to go live, you will need to switch to using `apiToken` so that the `apiKey` is not exposed publicly.
- `apiToken` should be generated on page request and set in the config for the user to authenticate with our API.

Details on how to generate the `apiToken` can be found in our [Security Documentation](security.md).

#### 'categories' and 'collections' explained

[Categories](https://help.shopify.com/en/manual/products/details/product-category) and [collections](https://help.shopify.com/en/manual/products/collections) are Shopify concepts for grouping [products](https://help.shopify.com/en/manual/products). Each product belongs to a single product category. A product can also be part of many collections, and a category can map to many collections.

From a non-Shopify perspective, collections map to your store's component groupings (e.g. Brakes, Tyres, Tubes), while categories map directly to Bike Matrix component groupings. The available Bike Matrix groups are detailed [below](#bike-matrix-categories).

The `collections` array uses objects of the following structure:

```javascript
{
  title: string,
  handle: string,
  url: string
}
```

- `title` is the collection name. This must match a name in the comma separated list defined under the `collection` variable inside the `categories` object.
  - e.g. `"Brake pads"`
- `handle` is an internal identifier used to refer to this collection inside the web components.
  - e.g. `"brake-pads"`
- `url` is the URL for this collection.
  - This is used by the Bike Selector to direct users to the chosen product category after a bike has been selected in the Bike Selector.
  - e.g. `"/collections/brake-pads"`

The `categories` array uses objects of the following structure:

```javascript
{
  title: string,
  text_id: string,
  collection: string
}
```

- `title` is the name of the product category. As this maps directly to Bike Matrix product categories, this value must match one of the available Bike Matrix product categories listed [below](#bike-matrix-categories).
  - e.g. `"Brake Pads"`
- `text_id` is an internal identifier used for translation. Like `title`, this must match one of the available Bike Matrix values listed [below](#bike-matrix-categories).
  - e.g. `"category_brakepads"`
- `collection` is a comma separated list of collections included in this product category. Each item in the list must match the `title` of a collection.
  - e.g. `"Brake pads"`

<details>
  <summary><strong>Available Bike Matrix Product Categories</strong></summary>
  <div>

##### Bike Matrix Categories

The following are the available options for the categories list. The values for `title` and `text_id` must be copied exactly.

The `collection` value can contain a comma separated list of collection titles. This is primarily used for Shopify integration where a store has multiple markets. The first available collection is used in the Bike Selector to link to the collection for that category.

```javascript
"categories": [
  {
    "title":"Brake Pads",
    "text_id":"category_brakepads",
    "collection": "{{brake_padsCollectionTitle}}"
  },
  {
    "title":"Brake Rotor",
    "text_id":"category_brakerotor",
    "collection": "{{brake_rotorCollectionTitle}}"
  },
  {
    "title":"Brake Lever",
    "text_id":"category_brakelever",
    "collection": "{{brake_leverCollectionTitle}}"
  },
  {
    "title":"Brake Caliper",
    "text_id":"category_brakecaliper",
    "collection": "{{brake_caliperCollectionTitle}}"
  },
  {
    "title":"Brake System",
    "text_id":"category_brakesystem",
    "collection": "{{brake_systemCollectionTitle}}"
  },
  {
    "title":"Front Wheel",
    "text_id":"category_frontwheel",
    "collection": "{{front_wheelCollectionTitle}}"
  },
  {
    "title":"Rear Wheel",
    "text_id":"category_rearwheel",
    "collection": "{{rear_wheelCollectionTitle}}"
  },
  {
    "title":"Wheelset",
    "text_id":"category_wheelset",
    "collection": "{{wheelsetCollectionTitle}}"
  },
  {
    "title":"Tyre",
    "text_id":"category_tyre",
    "collection": "{{tyreCollectionTitle}}"
  },
  {
    "title":"Tube",
    "text_id":"category_tube",
    "collection": "{{tubeCollectionTitle}}"
  },
  {
    "title":"Chain",
    "text_id":"category_chain",
    "collection": "{{chainCollectionTitle}}"
  },
  {
    "title":"Cassette",
    "text_id":"category_cassette",
    "collection": "{{cassetteCollectionTitle}}"
  },
  {
    "title":"Headset",
    "text_id":"category_headset",
    "collection": "{{headsetCollectionTitle}}"
  },
  {
    "title":"Bottom Bracket",
    "text_id":"category_bottombracket",
    "collection": "{{bottomBracketCollectionTitle}}"
  },
  {
    "title":"Crankset",
    "text_id":"category_crankset",
    "collection": "{{cranksetCollectionTitle}}"
  },
  {
    "title":"Chainring",
    "text_id":"category_chainring",
    "collection": "{{chainringCollectionTitle}}"
  },
  {
    "title":"Front Axle",
    "text_id":"category_frontaxle",
    "collection": "{{frontAxleCollectionTitle}}"
  },
  {
    "title":"Rear Axle",
    "text_id":"category_rearaxle",
    "collection": "{{rearAxleCollectionTitle}}"
  }
]
```

  </div>
</details>

### Web Component Specific Configuration Options

The following sections are for **web component specific configuration options**:

#### Collection Result Configuration

These options are set on a per-page basis:

| Option                    | Type   | Required | Description                                                                                        | Example        |
| ------------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `currentCollectionHandle` | string | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`. | `"brake-pads"` |

#### Product Result Configuration

These options are set on a per-page basis:

| Option               | Type     | Required | Description                                                                                                       | Example                           |
| -------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `productCollections` | string[] | Yes      | List of collections the product belongs to. Each value in the list should match a `handle` in `collections`.     | `["brake-pads", "brake-rotors"]` |

#### Variant Selector Configuration

These options are set on a per-page basis:

| Option               | Type     | Required | Description                                                                                                       | Example                           |
| -------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `productCollections` | string[] | Yes      | List of collections the product belongs to. Each value in the list should match a `handle` in `collections`.     | `["brake-pads", "brake-rotors"]` |

#### Compatible List Configuration

These options are set on a per-page basis:

| Option                              | Type                          | Required | Description                                                                                                                             | Example                                                  |
| ----------------------------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `currentCollectionHandle`           | string                        | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`.                                     | `"brake-pads"`                                           |
| `products`                          | \{[key: string]: ProductInfo} | No       | Information for all products to check compatibility on. See the ['products' explained](#products-explained) section.                   | See ['products' explained](#products-explained) section. |
| `collectionUrl`                     | string                        | No       | URL for the current collection, used to link back to the first page of the collection. Default is empty.                               | `"/collections/brake-pads"`                              |
| `compatiblityListCurrentPage`       | number                        | No       | Current page number of the collection. After page 1, the component links back to the first page for compatible results. Default is 0. | `1`                                                      |
| `showCompatibleList`                | boolean                       | No       | Whether to show the Compatible List component. Default is `true`.                                                                       | `true`                                                   |
| `delayCompatibleListInitialization` | boolean                       | No       | If `true`, delays Compatible List rendering until `updateCompatibleList()` is called.                                                  | `true`                                                   |

##### 'products' explained

> Note: As of v1.3+, `products` is optional when using SDK-based implementations. Products can instead be added client-side using then calling `updateCompatibleList()`.

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
- `skus` should be a list of all SKUs for the product, as the product may have multiple variants.

All other product fields are available for use in the injected HTML for the web component. This HTML is used to display the product card, so the exact fields used will vary depending on your product card template.

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
