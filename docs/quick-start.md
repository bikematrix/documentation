import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start - SDK

Follow these steps to quickly see our solution in action with our staging API, checking compatibility with some brake pads.

This covers simple SDK integration through either NPM installation or including the script from the CDN.

### 1. Add the Script

Adding the BikeMatrix scripts varies on installation method.

<Tabs>
<TabItem value="cdn" label="CDN Installation">

Include the script directly in your HTML:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.1/dist/bm_core.js"
></script>
```

Note: Replace version `1.1` in the above URL with the latest version number, or the specific version you want to use.

</TabItem>
<TabItem value="npm" label="NPM Installation">

Install our SDK web components package:

```bash
npm install @bikematrix/web-components
```

Then import it in your JavaScript/TypeScript file:

```javascript
import BikeMatrix from "@bikematrix/web-components";
```

</TabItem>
</Tabs>

### 2. Configure BikeMatrix

Add the core configuration JSON block to your HTML.

Bike Matrix will send you the API key to test out the solution. Please get in contact with us.

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
    "collectionUrl": "/collection/brake-pads",
    "productCollections": ["brake-pads"],
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

If using a react based framework, the following configuration can be copied into your app.

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
    "productCollections": ["brake-pads"],
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

### 3. Initialize BikeMatrix

Initialize the BikeMatrix script on your site.

<Tabs>
<TabItem value="cdn" label="CDN Installation">

The initialization happens automatically when you import the package, so no additional initialization code is needed.

</TabItem>
<TabItem value="npm" label="NPM Installation">

Add the initialization code where appropriate in your application's lifecycle:

```javascript
BikeMatrix.init();
```

More detailed initialization code can be found in the initialize web components section.

</TabItem>
</Tabs>

### 4. Add Web Components

Here are the web components you can add and see in action:

```html
<!-- Main Web Component for the Bike Selector - must be on the page once -->
<bikematrix-bikeselector></bikematrix-bikeselector>

<!-- Header or navigation to trigger the bike selector -->
<button id="bm_selectBikeButton">Select Bike</button>

<!-- Or use our Bikon for triggering the bike selector -->
<bikematrix-bikon></bikematrix-bikon>

<!-- Or use our banner for triggering the bike selector. Often used on PLP pages -->
<bikematrix-bikeselectorbanner
  data-title="Bike Selector Banner"
  data-color="#000000"
  data-full-width="false"
  data-font-color="#ffffff"
  data-show="true"
></bikematrix-bikeselectorbanner>

<!-- Product Result Web Component - often used on a Product PDP page -->
<bikematrix-productresult data-sku="710845642012"></bikematrix-productresult>

<!-- Product cards for use on product collection or PLP pages -->
<bikematrix-collectionresult
  data-product-skus="710845642012,4715910041895"
></bikematrix-collectionresult>

<!-- Compatible variants on a product PDP page where there are mutliple variants available -->
<bikematrix-variantselector
  data-title="Compatible Variants"
  data-override="true"
  data-showall="true"
  data-variants="-|SRAM Bottom Bracket GXP Team Cups English MTB & Road 73 / 68|45546911891733|1~-|SRAM Bottom Bracket GXP Team Cups English 83|45546911990037|2~-|SRAM Bottom Bracket GXP Team Cups English 100 for GXP Fat Bike Crank|48195360456981|3"
  data-clickable="true"
></bikematrix-variantselector>
```

Implementation of the compatible list component varies on installation method:

<Tabs>
<TabItem value="cdn" label="CDN Installation">

```html
<!-- List of all of the compatible results for the products configured in this collection, for the chosen bike -->
<bikematrix-compatiblelist data-title="Compatible products">
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
// List of all of the compatible results for the products configured in this collection, for the chosen bike
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
                  ></img>
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

### 5. Test the Integration

1. Open your webpage
2. Click the "Select Bike" button (Or click on the Bikon or Bike Banner)
3. Choose a bike from the selector
4. Check that both the other components display the correct compatibility information

### Complete Examples

We have complete examples for different SDK integrations. Check them out on the [SDK Examples Page](docs/sdk-integration/examples.md).
