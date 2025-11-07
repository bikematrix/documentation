import { SidebarConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

export const sdkSidebar: SidebarConfig = [
  {
    type: "doc",
    id: "sdk-integration/introduction",
    label: "Introduction",
  },
  {
    type: "doc",
    id: "sdk-integration/installation",
    label: "Installation",
  },
  {
    type: "doc",
    id: "sdk-integration/configuration",
    label: "Configuration",
  },
  {
    type: "doc",
    id: "sdk-integration/authentication",
    label: "Authentication",
  },
  {
    type: "doc",
    id: "sdk-integration/integration",
    label: "Integration",
  },
  {
    type: "category",
    label: "Web Components",
    items: [
      {
        type: "doc",
        id: "sdk-integration/web-components/overview",
        label: "Overview",
      },
      {
        type: "doc",
        id: "sdk-integration/web-components/bike-selector",
        label: "Bike Selector",
      },
      {
        type: "category",
        label: "Bike Selector Buttons",
        items: [
          {
            type: "doc",
            id: "sdk-integration/web-components/bike-selector-buttons/overview",
            label: "Overview",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/bike-selector-buttons/bikon",
            label: "Bikon",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/bike-selector-buttons/bike-selector-banner",
            label: "Bike Selector Banner",
          },
        ],
      },
      {
        type: "category",
        label: "Compatibility Indicators",
        items: [
          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/overview",
            label: "Overview",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/compatibility-label",
            label: "Compatibility Label",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/collection-result",
            label: "Collection Result",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/compatible-list",
            label: "Compatible List",
          },
          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/product-result",
            label: "Product Result",
          },

          {
            type: "doc",
            id: "sdk-integration/web-components/compatibility-indicators/variant-selector",
            label: "Variant Selector",
          },
        ],
      },
    ],
  },
  {
    type: "doc",
    id: "sdk-integration/html-events",
    label: "HTML Events",
  },
  {
    type: "doc",
    id: "sdk-integration/examples",
    label: "Examples",
  },
];
