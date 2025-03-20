import React from "react";

export const CompatibleList = () => {
  // Custom compatible list product card template
  const productCardHtml = `
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
  </div>`;

  return (
    <>
      {/* Bike Matrix Web Component - Compatible List */}
      {/* @ts-ignore */}
      <bikematrix-compatiblelist data-title="Compatible products in collection">
        {/* OPTIONAL: Custom compatible list product card template */}
        <template
          slot="product-card"
          dangerouslySetInnerHTML={{
            __html: productCardHtml
          }}
        ></template>
        {/* @ts-ignore */}
      </bikematrix-compatiblelist>

      {/* Bike Matrix Config - Compatible List */}
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify({
          currentCollectionHandle: "brake-pads",
          collectionUrl: "/collection/brake-pads",
          products: {
            123: {
              productUrl: "/product",
              productTitle: "Disc Resin Brake Pad 1-Pair",
              featuredImage:
                "http://cycleways.co.nz/cdn/shop/products/nzfguo0fiv4gexir5uub.jpg?v=1687794103",
              price: "$50.00",
              skus: ["8022530035613"]
            }
            // ... All products in the collection
          }
        })}
      </script>
    </>
  );
};
