# Configuration Options

BikeMatrix is configured using a JSON configuration block in your HTML:

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": "https://api-staging.bikematrix.io/bike/v2/",
    "apiKey": "YOUR_API_KEY",
    "pageType": "collection",
    "currentCollectionHandle": "brake-pads",
    "collections": [
      {
        "title": "Brake pads",
        "handle": "brake-pads",
        "url": "/collections/brake-pads"
      }
    ],
    "categories": [
      {
        "title": "Brake Pads",
        "text_id": "category_brakepads",
        "collection": "Brake pads"
      }
    ]
  }
</script>
```

These can be used multiple times throughout your HTML, with the configuration options being merged together sequentially.

#### Configuration options for BikeMatrix components, organized by feature area.

#### Core Configuration

| Option                    | Type                                                          | Default      | Description                                      |
| ------------------------- | ------------------------------------------------------------- | ------------ | ------------------------------------------------ |
| `apiUrl`                  | string                                                        | _(Required)_ | Your BikeMatrix API endpoint URL                 |
| `apiKey`                  | string                                                        | _(Required)_ | Your BikeMatrix API key                          |
| `pageType`                | "collection" \| "product" \| "index" \| "search"              | "index"      | Current page type                                |
| `currentCollectionHandle` | string                                                        | ""           | Handle of the current collection                 |
| `collections`             | Array\<\{title: string, handle: string, url: string}>         | []           | List of available collections with their details |
| `categories`              | Array\<\{title: string, text_id: string, collection: string}> | []           | List of product categories and their mappings    |
| `isHomePage`              | boolean                                                       | false        | Whether current page is home page                |
| `isSearchPage`            | boolean                                                       | false        | Whether current page is search page              |
| `logLevel`                | "none" \| "verbose"                                           | "none"       | Logging verbosity level                          |

#### Bike Selector Configuration

| Option               | Type   | Default | Description                                                   |
| -------------------- | ------ | ------- | ------------------------------------------------------------- |
| `bikeSelectorBrands` | string | ""      | Comma separated string of specific brands to show in selector |

#### Compatible List Configuration

| Option                        | Type                          | Default | Description                        |
| ----------------------------- | ----------------------------- | ------- | ---------------------------------- |
| `products`                    | \{[key: string]: ProductInfo} | {}      | Detailed product information       |
| `collectionUrl`               | string                        | ""      | URL for the current collection     |
| `compatiblityListCurrentPage` | number                        | 0       | Current page in compatibility list |
| `showCompatibleList`          | boolean                       | true    | Whether to show compatibility list |

#### Collection Result Configuration

| Option                     | Type                       | Default | Description                                |
| -------------------------- | -------------------------- | ------- | ------------------------------------------ |
| `productsCollections`      | \{[key: string]: string[]} | {}      | Mapping of products to collections         |
| `showHomePageCollection`   | boolean                    | false   | Whether to show collections on home page   |
| `showSearchPageCollection` | boolean                    | false   | Whether to show collections on search page |

#### Product Result Configuration

| Option               | Type     | Default | Description                        |
| -------------------- | -------- | ------- | ---------------------------------- |
| `productCollections` | string[] | []      | Collections the product belongs to |
