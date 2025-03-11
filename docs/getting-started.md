# Getting Started

Follow these steps to quickly integrate BikeMatrix into your website:

### 1. Add the Script

Choose one of these options to add BikeMatrix to your project:

#### Option A: NPM Installation

```bash
npm install @bikematrix/web-components
```

Then import it in your JavaScript/TypeScript file:

```javascript
import BikeMatrix from "@bikematrix/web-components";
```

#### Option B: CDN Installation

Include the script directly in your HTML:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.1/dist/bm_core.js"
></script>
```

Note: Replace version `1.1` in the above URL with the latest version number, or the specific version you want to use.

### 2. Configure BikeMatrix

Add the core configuration block to your HTML:

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

### 3. Add Basic Components

Add these components to your HTML:

```html
<!-- Header or navigation -->
<button id="bm_selectBikeButton">Select Bike</button>
<bikematrix-bikeselector></bikematrix-bikeselector>

<!-- Detailed product page -->
<bikematrix-productresult data-sku="PRODUCT_SKU"></bikematrix-productresult>

<!-- Product cards on collection pages -->
<bikematrix-collectionresult
  data-product-id="PRODUCT_ID"
  data-product-skus="PRODUCT_SKU1,PRODUCT_SKU2"
></bikematrix-collectionresult>
```

### 4. Initialize BikeMatrix

The initialization step depends on your installation method:

#### When using NPM

Add the initialization code where appropriate in your application's lifecycle:

```javascript
BikeMatrix.init();
```

#### When using CDN

The initialization happens automatically when you import the package, so no additional initialization code is needed.

### 5. Test the Integration

1. Open your webpage
2. Click the "Select Bike" button
3. Choose a bike from the selector
4. Check that both the product result and collection result components display the correct compatibility information

For more advanced configurations and component options, see the sections below.
