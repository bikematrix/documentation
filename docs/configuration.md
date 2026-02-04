import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDK Configuration

This provides details of the SDK / Web Component JSON configuration required. It is  all stored under the object `data-bikematrix-config`.

:::info

The SDK web components are built to support Shopify and other e-commerce platforms and websites. There is some configuration that is specific to Shopify to allow us to overcome limitations of that platform.

Our goal for this documentation is to simplify and explain the configuration as much as possible.

:::

## Configuration Implementation

BikeMatrix is configured using a JSON configuration block in your HTML.

The configuration block can be used multiple times throughout your HTML, with the options being merged together sequentially.

Some configuration will be site-wide to be places at the top level HTML. Some web component specific configuration must be set per page where the component is used.

### Core Configuration

This configuration is to be placed at the top level of your HTML.

<Tabs>
<TabItem value="definition" label="Configuration Defintion">

This is the **site-wide core configuration** definitions for the SDK:

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
    "logLevel": 'none' | 'verbose',
    "virtualWorkshop": boolean,
    "pageType": 'collection'
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
  }
</script>
```

Note the configuration options of: **bikeSelectorBrands**, **logLevel** and **virtualWorkshop** are optional.

</TabItem>
</Tabs>

### Web Component Specific Configuration

The following drop downs are for **web component specific configurations**:

<details>
  <summary>**Collection Result Component Configuration**</summary>
  <div>
    This is to be set on each web page where the Collection Result web component is used.
    <Tabs>
      <TabItem value="definition" label="Configuration Defintion">

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
            "currentCollectionHandle": 'brake-pads'
          }
        </script>
        ```

      </TabItem>
    </Tabs>

  </div>
</details>

<details>
  <summary>**Product Result Component Configuration**</summary>
  <div>
    This is to be set on each web page where the Product Result web component is used.
    <Tabs>
      <TabItem value="definition" label="Configuration Defintion">

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
            "productCollections": "brake-pads,brake-rotors"
          }
        </script>
        ```

      </TabItem>
    </Tabs>

  </div>
</details>

<details>
  <summary>**Variant Selector Component Configuration**</summary>
  <div>
    This is to be set on each web page where the Variant Selector web component is used.
    <Tabs>
      <TabItem value="definition" label="Configuration Defintion">

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
            "productCollections": "brake-pads,brake-rotors"
          }
        </script>
        ```

      </TabItem>
    </Tabs>

  </div>
</details>

<details>
  <summary>**Compatible List Component Configuration**</summary>
  <div>
    This is to be set on each web page where the Compatible List web component is used.
    <Tabs>
      <TabItem value="definition" label="Configuration Defintion">

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
            "showCompatibleList": boolean
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

        Note the configuration options of: **collectionUrl**, **compatiblityListCurrentPage** and **showCompatibleList** are optional.

      </TabItem>
    </Tabs>

  </div>
</details>

---

## Configuration Options Detailed

### Core Configuration Options

These options are to be set for the entire site:

| Option               | Type                                                          | Required | Description                                                                                                                        | Example                                                                                  |
| -------------------- | ------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiUrl`             | string                                                        | Yes      | The BikeMatrix API endpoint URL.                                                                                                   | `"https://api.bikematrix.io/proxy/v3/"`                                                  |
| `apiKey`             | string                                                        | Maybe    | Your BikeMatrix API key. Detailed further at ['apiKey' and 'apiToken' explained](#apikey-and-apitoken-explained).                  | `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`                                                           |
| `apiToken`           | string                                                        | Maybe    | An HMAC signature for secure API request. Detailed further at ['apiKey' and 'apiToken' explained](#apikey-and-apitoken-explained). | `"sitename\| 012345678912345\|abcdefghijklmnopqrstuvwxyz="`                              |
| `categories`         | Array\<\{title: string, text_id: string, collection: string}> | Yes      | List of product categories. Detailed further at ['categories' and 'collections' explained](#categories-and-collections-explained). | `[{"title": "Brake Pads", "text_id": "category_brakepads", "collection": "Brake pads"}]` |
| `collections`        | Array\<\{title: string, handle: string, url: string}>         | Yes      | List of collections. Detailed further at ['categories' and 'collections' explained](#categories-and-collections-explained).        | `[{"title": "Brake pads", "handle": "brake-pads", "url": "/collections/brake-pads"}]`    |
| `bikeSelectorBrands` | string                                                        | No       | Comma separated list of bike brand IDs to include. Empty string includes all bike brands. Default value is an empty string.           | `""`                                                                            |
| `logLevel`           | "none" \| "verbose"                                           | No       | Logging verbosity level. Default is "none".                                                                                        | `"verbose"`                                                                              |
| `pageType`           | "collection" \| "product" \| "index" \| "search"                                                  | Yes      |                                     | `"collection"`                                                                           |

#### 'apiKey' and 'apiToken' explained

Only either the `apiKey` or the `apiToken` should be set.

- The `apiKey` should not be used outside of trusted spaces. Therefore you should only be used for internal purposes such as testing.

When getting ready to go live, you will need to switch to using the 'apiToken' in order to not leak the 'apiKey' publicly.

- The `apiToken` should be generated on page request and set in the config for the user to authenticate with our API.

Details on how to generate the `apiToken` can be found in our [Security Documentation](security.md).

#### 'categories' and 'collections' explained

[Categories](https://help.shopify.com/en/manual/products/details/product-category) and [collections](https://help.shopify.com/en/manual/products/collections) are Shopify concepts for grouping [products](https://help.shopify.com/en/manual/products). Each product belongs to a single product category. Then each product can also be part of many collections, equally a category can be part of many collections.

For a non-shopify perspective, collections map to your store's component groupings (E.G. Brakes,Tyres, Tubes) to categories which directly map to the Bike Matrix component groupings. The available Bike Matrix groups are detailed [below](#bike-matrix-categories).

The `collections` array uses objects of the following structure:

```javscript
{
  title: string
  handle: string
  url: string
}
```

- `title` is the collection name. This must match the name under the comma separated list defined under the variable `collection` inside the `categories` object (Explained next).
  - E.G. `"Brake pads"`
- `handle` is just an internal identifier used to refer to this collection inside the web components.
  - E.G. `"brake-pads"`
- `url` is the URL for this collection. (This will be used by the bike selector to direct users to the chosen product category after a bike has been selected)
  - E.G. `"/collections/brake-pads"`

The `categories` array uses objects of the following structure:

```javscript
{
  title: string
  text_id: string
  collection: string
}
```

- `title` is the name of the product category. As this maps directly to Bike Matrix product categories. This value must match one of the available Bike Matrix product categories. The list of available Bike Matrix product categories can be found [below](#bike-matrix-categories).
  - E.G. `"Brake Pads"`
- `text_id` is just an internal identifier used for translation. Similar to `title` this has a small list of available values. Again please find the available values [below](#bike-matrix-categories) with the product categories.
  - E.G. `"category_brakepads"`
- `collection` is a comma separated list of collections which are included with this product categories. Each item in the comma separated list must match a `title` of a collection.
  - E.G. `"Brake pads"`

<details>
  <summary>**Available Bike Matrix Product Categories**</summary>
  <div>

    ##### Bike Matrix Categories

    The following are the available options for the categories list. The values for `title` and `text_id` must be copied exactly.
    The collection value can contain a comma separated list of collection titles. This is primarily used for Shopify integration where a store has multiple markets. The first available collection is used in the Bike Selector to link to the collection for that category.

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

The following drop downs are for **web component specific configuration options**:

#### Collection Result Configuration

These options are to be set on a per web page basis:

| Option                    | Type   | Required | Description                                                                                        | Example        |
| ------------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `currentCollectionHandle` | string | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`. | `"brake-pads"` |

#### Product Result Configuration

These options are to be set on a per web page basis:

| Option               | Type     | Required | Description                                                                                                      | Example                         |
| -------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `productCollections` | string[] | Yes      | List of collections the product belongs to. Each value of the list should match a `handle` in the `collections`. | `["brake-pads","brake-rotors"]` |

#### Variant Selector

These options are to be set on a per web page basis:

| Option               | Type     | Required | Description                                                                                                      | Example                         |
| -------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `productCollections` | string[] | Yes      | List of collections the product belongs to. Each value of the list should match a `handle` in the `collections`. | `["brake-pads","brake-rotors"]` |

#### Compatible List Configuration

These options are to be set on a per web page basis:

| Option                        | Type                          | Required | Description                                                                                                                               | Example                                                  |
| ----------------------------- | ----------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `currentCollectionHandle`     | string                        | Yes      | The collection handle of the current page. This must match a `handle` defined under `collections`.                                        | `"brake-pads"`                                           |
| `products`                    | \{[key: string]: ProductInfo} | Yes      | Information for all products to check compatibility on. Find more information in the ['products' explained](#products-explained) section. | See ['products' explained](#products-explained) section. |
| `collectionUrl`               | string                        | No       | URL for the current collection, used to link back to the first page of the collection. Default is empty.                                  | `"/collections/brake-pads"`                              |
| `compatiblityListCurrentPage` | number                        | No       | Current page number of the collection. After 1st page we link back to the first page for the compatible results. Default is 0.            | `1`                                                      |
| `showCompatibleList`          | boolean                       | No       | Whether to show compatible list component. Default is true.                                                                               | `true`                                                   |

##### 'products' explained

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

Therefore this is a keyed list of all the products to include as part of the compatible list check.

- The first `key` value should be your product ID.
- The `skus` value should be a list of all the SKUs for the product. (As the product may have multiple variants)

All other variables for the product are there to be used as part of the injected HTML into the web component. This HTML is for displaying the product card therefore will need to use some of this information, but usage will vary on your product card.

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
