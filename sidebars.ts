import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  documentationSidebar: [
    "intro",
    { type: "doc", id: "installation", label: "Installation" },
    { type: "doc", id: "getting-started", label: "Getting Started" },
    {
      type: "doc",
      id: "configuration",
      label: "Configuration"
    },
    {
      type: "doc",
      id: "security",
      label: "Security"
    },
    {
      type: "doc",
      id: "multilingual",
      label: "Multilingual Support"
    },
    {
      type: "category",
      label: "Web Components",
      items: [
        "web-components/bike-selector",
        "web-components/bike-selector-banner",
        "web-components/product-result",
        "web-components/collection-result",
        "web-components/compatible-list"
      ]
    },
    {
      type: "category",
      label: "Shopify",
      items: [
        "shopify/shopify-intro",
        "shopify/bike-selector-app-embed",
        "shopify/bike-icon",
        "shopify/product-check-panel",
        "shopify/bike-compatibility-list-panel",
        "shopify/product-collection-compatibility-result",
        "shopify/configure-app-proxy"
      ]
    },
    {
      type: "doc",
      id: "framework-intergration",
      label: "Framework Intergration"
    },
    {
      type: "category",
      label: "API",
      items: [
        "api-endpoints/bike-api",
        "api-endpoints/get-bike-brands",
        "api-endpoints/get-bike-models",
        "api-endpoints/get-bike-frame-series",
        "api-endpoints/get-bike-spec-specs",
        "api-endpoints/get-bike-spec-years",
        "api-endpoints/get-bike-spec-sizes",
        "api-endpoints/get-bike-spec-bikes",
        "api-endpoints/get-bike-brand-product-categories",
        "api-endpoints/compatibility-check-sku",
        "api-endpoints/compatibility-check-sku-language",
        "api-endpoints/compatibility-check-skus",
        "api-endpoints/compatibility-check-skus-language",
        "api-endpoints/compatibility-check-skus-with-results",
        "api-endpoints/compatibility-check-skus-with-results-language",
        "api-endpoints/get-product",
        "api-endpoints/get-products"
      ]
    }
  ]
};

export default sidebars;
