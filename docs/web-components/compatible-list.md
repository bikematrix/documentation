# Compatible List

Displays a list of compatible products.

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

Attributes:

- `data-title`: Allows you to set a title for the component. Defaults to "Compatible Products" (or the equivalent in the current language).

Default template variables:

- `{{productUrl}}`: Product page URL
- `{{featuredImage}}`: Product image URL
- `{{productTitle}}`: Product name
- `{{price}}`: Product price
- `{{compatibility}}`: Compatibility status

[Configuration options](/docs/configuration#compatible-list-configuration)
