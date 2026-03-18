import { SidebarConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

export const apiSidebar: SidebarConfig = [
  {
    type: "doc",
    id: "api-integration/introduction",
    label: "Introduction",
  },
  {
    type: "doc",
    id: "api-integration/authentication",
    label: "Authentication",
  },
  {
    type: "category",
    label: "Endpoints",
    items: [
      {
        type: "doc",
        id: "api-integration/endpoints/overview",
        label: "Overview",
      },
      {
        type: "category",
        label: "Bike",
        items: [
          {
            type: "doc",
            id: "api-integration/endpoints/bike/overview",
            label: "Overview",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-brands",
            label: "Retrieve bike brands",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-models",
            label: "Retrieve bike brand models",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-frame-series",
            label: "Retrieve frame series",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-specification-specs",
            label: "Retrieve bike specification specs",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-specification-years",
            label: "Retrieve bike specification years",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-specification-sizes",
            label: "Retrieve bike specification sizes",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-specification-bikes",
            label: "Retrieve bike specification bikes",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bikes-by-data-reference",
            label: "Retrieve bikes by data reference",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/bike/get-bike-brand-product-categories",
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
            id: "api-integration/endpoints/compatibility/overview",
            label: "Overview",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/compatibility/check-sku",
            label: "Check bikes compatibility with SKU",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/compatibility/check-sku-language",
            label: "Check bikes compatibility with SKU - Language",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/compatibility/check-skus-with-results",
            label: "Check bikes compatibility with SKUs with results",
            className: "api-method post",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/compatibility/check-skus-with-results-language",
            label:
              "Check bikes compatibility with SKUs with results - Language",
            className: "api-method post",
          },
        ],
      },
      {
        type: "category",
        label: "Product",
        items: [
          {
            type: "doc",
            id: "api-integration/endpoints/product/overview",
            label: "Overview",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/product/get-product",
            label: "Retrieve product by SKU",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "api-integration/endpoints/product/get-products-with-results",
            label: "Retrieve product by SKU with results",
            className: "api-method post",
          },
        ],
      },
    ],
  },
];
