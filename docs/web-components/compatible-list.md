# Compatible List

Displays a list of compatible products.

An example of the web component:

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

An example of the configuration required and where the products can be passed in:

```html
<script type="application/json" data-bikematrix-config>
  {JSON.stringify({
    currentCollectionHandle: "brake-rotors",
    collectionUrl: "/collection/brake-rotors",
    products: {
      "6960918429875": {
        "productUrl": "/products/hope-floating-disc-rotor",
        "productTitle":"Hope Floating Disc Rotor",
        "featuredImage": "//www.biketart.com/cdn/shop/products/hope-floating-disc-rotor-red-140mm-1135982118.jpg?v=1753214364",
        "price": "From £53.95",
        "skus": ["HBSP3301406FN","HBSP3301406FB","HBSP3301406FC","HBSP3301406FPU","HBSP3301406FR","HBSP3301406FS","HBSP3301606FN","HBSP3301606FB","HBSP3301606FC","HBSP3301606FPU","HBSP3301606FR","HBSP3301606FS","HBSP3301806FN","HBSP3301806FB","HBSP3301806FC","HBSP3301806FPU","HBSP3301806FR","HBSP3301806FS","HBSP3301836FN","HBSP3301836FB","HBSP3301836FC","HBSP3301836FPU","HBSP3301836FR","HBSP3301836FS","HBSP3301856FN","HBSP3301856FB","HBSP3301856FC","HBSP3301856FPU","HBSP3301856FR","HBSP3301856FS","HBSP3302006FN","HBSP3302006FB","HBSP3302006FC","HBSP3302006FPU","HBSP3302006FR","HBSP3302006FS","HBSP3302036FN","HBSP3302036FB","HBSP3302036FC","HBSP3302036FPU","HBSP3302036FR","HBSP3302036FS","HBSP3302056FN","HBSP3302056FB","HBSP3302056FC","HBSP3302056FPU","HBSP3302056FR","HBSP3302056FS","HBSP3302206FN","HBSP3302206FB","HBSP3302206FC","HBSP3302206FPU","HBSP3302206FR","HBSP3302206FS","HBSP3302256FN","HBSP3302036FA","HBSP3301406FK","HBSP3301606FK","HBSP3301806FK","HBSP3301836FK","HBSP3301856FK","HBSP3302006FK","HBSP3302036FK","HBSP3302056FK","HBSP3302206FK"]
      },
      "6961177559219": {
        "productUrl": "/products/shimano-xt-sm-rt86-6-bolt-ice-tech-disc-brake-rotor",
        "productTitle":"Shimano XT SM-RT86 6 Bolt Ice Tech Disc Brake Rotor",
        "featuredImage": "//www.biketart.com/cdn/shop/products/1580135783-63196800.jpg?v=1635604093",
        "price": "From £21.95",
        "skus": ["4524667744672","4524667744702","4524667744689"]
      },
      "6960918790323": {
        "productUrl": "/products/hope-centre-lock-disc-lockring",
        "productTitle":"Hope Centre Lock Disc Lockring",
        "featuredImage": "//www.biketart.com/cdn/shop/products/hope-centre-lock-disc-lockring-blue-1135947456.jpg?v=1753207026",
        "price": "From £10.50",
        "skus": [""]
      },
      "7315048071347": {
        "productUrl": "/products/shimano-rt-mt800-disc-brake-rotor-with-internal-lockring-ice-tech-freeza",
        "productTitle":"Shimano XT RT-MT800 Ice Tech Centre-Lock Disc Brake Rotor",
        "featuredImage": "//www.biketart.com/cdn/shop/products/rtmt800m.jpg?v=1669121057",
        "price": "From £24.95",
        "skus": ["4550170442255","4550170442200","4550170442217","4550170442224"]
      }
    }
  })}
</script>
```

Attributes:

- `data-title`: Allows you to set a title for the component. Defaults to "Compatible Products" (or the equivalent in the current language).

Default template variables:

- `{{productUrl}}`: Product page URL
- `{{featuredImage}}`: Product image URL
- `{{productTitle}}`: Product name
- `{{price}}`: Product price
- `{{compatibility}}`: Compatibility status

[Configuration options](/docs/configuration#compatible-list-configuration)
