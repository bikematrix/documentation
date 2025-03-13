import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-endpoints/bike-api",
    },
    {
      type: "category",
      label: "Bike",
      items: [
        {
          type: "doc",
          id: "api-endpoints/get-bike-brands",
          label: "Retrieve bike brands",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-models",
          label: "Retrieve bike brand models",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-frame-series",
          label: "Retrieve frame series",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-spec-specs",
          label: "Retrieve bike specification specs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-spec-years",
          label: "Retrieve bike specification years",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-spec-sizes",
          label: "Retrieve bike specification sizes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-spec-bikes",
          label: "Retrieve bike specification bikes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-bike-brand-product-categories",
          label: "Retrieve bike's product categories",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Compatibility",
      items: [
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-sku",
          label: "Check bikes compatibility with SKU",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-sku-language",
          label: "Check bikes compatibility with SKU - Language",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus",
          label: "Check bikes compatibility with SKUs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus-language",
          label: "Check bikes compatibility with SKUs - Language",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus-with-results",
          label: "Check bikes compatibility with SKUs with results",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus-with-results-language",
          label: "Check bikes compatibility with SKUs with results - Language",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus-with-results",
          label: "Check bikes compatibility with SKUs with results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/compatibility-check-skus-with-results-language",
          label: "Check bikes compatibility with SKUs with results - Language",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Product",
      items: [
        {
          type: "doc",
          id: "api-endpoints/get-product",
          label: "Retrieve product by SKU",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-endpoints/get-products",
          label: "Get products by SKUs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
