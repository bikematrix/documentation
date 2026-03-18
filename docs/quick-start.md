import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start - SDK

Follow these steps to quickly see our solution in action with our staging API, checking compatibility with some brake pads.

This covers a simple SDK integration using either NPM installation or including the script from the CDN.

## 1. Add the Script

Adding the BikeMatrix scripts varies by installation method.

<Tabs>
<TabItem value="cdn" label="CDN Installation">

Include the script directly in your HTML:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.3/dist/bm_core.js"
></script>
```

Note: Replace version `1.3` in the URL above with the latest version number, or the specific version you want to use.

</TabItem>
<TabItem value="npm" label="NPM Installation">

Install our SDK web components package:

```bash
npm install @bikematrix/web-components
```

Then import it in your JavaScript / TypeScript file:

```javascript
import BikeMatrix from "@bikematrix/web-components";
```

</TabItem>
</Tabs>

## 2. Configure BikeMatrix

Add the core configuration JSON block to your HTML.

Bike Matrix will send you an API key to test the solution. Please get in contact with us.

<Tabs>
<TabItem value="cdn" label="CDN Installation">

The following configuration can be copied into your HTML file.

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": "https://api-staging.bikematrix.io/bike/v3/",
    "apiKey": "YOUR_API_KEY",
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
    ],
    "currentCollectionHandle": "brake-pads",
    "collectionUrl": "/collections/brake-pads",
    "productCollections": ["brake-pads"],
    "delayCompatibleListInitialization": false,
    "products": {
      "123": {
        "productUrl": "/product",
        "productTitle": "SRAM Large Disc Brake Pads",
        "featuredImage": "https://www.biketart.com/cdn/shop/files/HeavyDuteSintered.jpg?v=1714977245&width=1950",
        "price": "$40.00",
        "skus": ["710845642012"]
      },
      "124": {
        "productUrl": "/product",
        "productTitle": "Jagwire Pro E-Bike Disc Pad - SRAM Code",
        "featuredImage": "https://www.biketart.com/cdn/shop/files/39869-pm.jpg?v=1692603872&width=750",
        "price": "$34.00",
        "skus": ["4715910041895"]
      }
    }
  }
</script>
```

</TabItem>
<TabItem value="npm" label="NPM Installation">

If using a React-based framework, the following configuration can be copied into your app.

```javascript
<script type="application/json" data-bikematrix-config>
  {`
  {
    "apiUrl": "https://api-staging.bikematrix.io/bike/v3/",
    "apiKey": "YOUR_API_KEY",
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
    ],
    "currentCollectionHandle": "brake-pads",
    "collectionUrl": "/collections/brake-pads",
    "productCollections": ["brake-pads"],
    "delayCompatibleListInitialization": false,
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
  }`}
</script>
```

</TabItem>
</Tabs>

## 3. Initialize BikeMatrix

Initialize the BikeMatrix script on your site.

<Tabs>
<TabItem value="cdn" label="CDN Installation">

Initialization happens automatically when you include the script, so no additional initialization code is needed.

</TabItem>
<TabItem value="npm" label="NPM Installation">

Add the initialization code where appropriate in your application's lifecycle:

```javascript
BikeMatrix.init();
```

More detailed initialization code can be found in the initialize web components section.

</TabItem>
</Tabs>

## 4. Add Web Components

Here are the web components you can add and see in action:

```html
<!-- Main web component for the Bike Selector / Bike Lounge - must be on the page once -->
<bikematrix-bikeselector></bikematrix-bikeselector>

<!-- Header or navigation button to trigger the Bike Selector -->
<button id="bm_selectBikeButton">Select Bike</button>

<!-- Or use our Bikon to trigger the Bike Selector -->
<bikematrix-bikon></bikematrix-bikon>

<!-- Or use our banner to trigger the Bike Selector. Often used on PLP pages -->
<bikematrix-bikeselectorbanner
  data-title="Bike Selector Banner"
  data-color="#000000"
  data-full-width="false"
  data-font-color="#ffffff"
  data-show="true"
></bikematrix-bikeselectorbanner>

<!-- Product Result web component - often used on product / PDP pages -->
<bikematrix-productresult data-sku="710845642012"></bikematrix-productresult>

<!-- Product cards for use on collection / PLP pages -->
<bikematrix-collectionresult
  data-product-skus="710845642012,4715910041895"
></bikematrix-collectionresult>

<!-- Compatible variants on a PDP page where there are multiple variants available -->
<bikematrix-variantselector
  data-title="Compatible Variants"
  data-override="true"
  data-showall="true"
  data-variants="-|SRAM Bottom Bracket GXP Team Cups English MTB & Road 73 / 68|45546911891733|1~-|SRAM Bottom Bracket GXP Team Cups English 83|45546911990037|2~-|SRAM Bottom Bracket GXP Team Cups English 100 for GXP Fat Bike Crank|48195360456981|3"
  data-clickable="true"
></bikematrix-variantselector>
```

Implementation of the Compatible List component varies by installation method:

<Tabs>
<TabItem value="cdn" label="CDN Installation">

```html
<!-- List of all compatible results for the configured products in this collection, for the selected bike -->
<bikematrix-compatiblelist data-title="Compatible Products">

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
        <a href="{{productUrl}}" style="text-decoration: none">
          <p>
            <strong>{{ price }}</strong>
          </p>
        </a>
      </div>
      {{ compatibility }}
    </div>
  </template>
</bikematrix-compatiblelist>
```

</TabItem>
<TabItem value="npm" label="NPM Installation">

```javascript
// List of all compatible results for the configured products in this collection, for the selected bike
<bikematrix-compatiblelist data-title="Compatible Products">

  <template
    slot="product-card"
    dangerouslySetInnerHTML={{
      __html: `
        <div class="bm-compatible-product-wrapper">
          <div class="bm-compatible-product-image">
            <a href="{{productUrl}}">
              <img
                src="{{featuredImage}}"
                width="80px"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
          <div class="bm-compatible-product-title">
            <a href="{{productUrl}}">{{ productTitle }}</a>
          </div>
          <div class="bm-compatible-product-price">
            <a href="{{productUrl}}" style="text-decoration: none">
              <p>
                <strong>{{ price }}</strong>
              </p>
            </a>
          </div>
          {{ compatibility }}
        </div>
      `,
    }}
  ></template>
</bikematrix-compatiblelist>
```

</TabItem>
</Tabs>

## 5. Test the Integration

1. Open your webpage
2. Click the "Select Bike" button, or click the Bikon / Bike Banner.
3. Choose a bike from the selector.
4. Check that the other components display the correct compatibility information.

## Complete Examples

We have complete examples for different SDK integrations. See them at the [SDK Examples Page](docs/sdk-integration/examples.md).
