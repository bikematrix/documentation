# Product Collection Compatibility Result

On a Collection page, you can add the Compatibility results indicator on each product shown on the screen.

![Image of compatibility results indicator on the product collection page](https://ecommerce.bikematrix.io/build/_assets/Collection-Result-54SFKM6C.png)

To add the Compatibility Results to a Collection page (which includes it on the Home page or Search Results page if turned on in the Bike Matrix App Embed section):

Unfortunately, right now the only way to add this is to edit your Theme Code. Follow these steps to edit the Theme code.
Note: you may need a Shopify Partner to help edit the code. Get in touch with us and we can help.

1. From your Shopify admin, go to Online Store > Themes.
2. Click ... > Edit code.

Find the location of the collection product card code (ie. in the Dawn Theme, it is placed at Snippets > card-product.liquid file at line 204) and in the appropriate location add the following liquid code and html:

```html
{%- liquid 
    if card_product.has_only_default_variant == true 
        assign bm_variantSkus = card_product.selected_or_first_available_variant.sku 
        assign bm_variantBarcodes = card_product.selected_or_first_available_variant.barcode
        assign bm_variantMetafields = card_product.selected_or_first_available_variant.metafields.bike_matrix.sku 
    else
        for variant in card_product.variants 
            assign bm_variantSkus = bm_variantSkus | append: variant.sku 
            assign bm_variantBarcodes = bm_variantBarcodes | append: variant.barcode 
            assign bm_variantMetafields = bm_variantMetafields | append: variant.metafields.bike_matrix.sku 
            if forloop.last == false 
            if variant.sku != "" and bm_variantSkus != "" 
                assign bm_variantSkus = bm_variantSkus | append: ","
            endif
            if variant.barcode != "" and bm_variantBarcodes != "" 
                assign bm_variantBarcodes = bm_variantBarcodes | append: "," 
            endif 
            if variant.metafields.bike_matrix.sku != "" and bm_variantMetafields != "" 
                assign bm_variantMetafields = bm_variantMetafields | append: "," 
            endif 
            endif 
        endfor
    endif 
-%}

<bikematrix-collectionresult
  class="bm-collection-result-wrapper bm-wrapper"
  bm_product_id="{{ product.id }}"
  bm_product_variants_skus="{{ bm_variantSkus }}"
  bm_product_variants_barcodes="{{ bm_variantBarcodes }}"
  bm_product_variants_metafields="{{ bm_variantMetafields }}"
></bikematrix-collectionresult>
```

Note: your theme may use 'product' or 'card_product' to reference the product in this liquid file (in the Dawn Theme, it uses 'card_product'). Replace 'card_product' with the appropriate variable name for the Product in the snippet above if required.
