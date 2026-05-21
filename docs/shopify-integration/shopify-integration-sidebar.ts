import { SidebarConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const shopifySidebar: SidebarConfig = [
  {
    type: 'doc',
    id: 'shopify-integration/introduction',
    label: 'Introduction',
  },
  {
    type: 'category',
    label: 'Installation',
    items: [
      {
        type: 'doc',
        id: 'shopify-integration/installation/introduction',
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/bike-matrix-metafield',
        label: 'Bike Matrix Metafield',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/bike-selector-app-embed',
        label: 'Bike Selector App Embed',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/bike-icon',
        label: 'Add Bike Icon',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/compatibility-list-panel',
        label: 'Add Compatibility List Panel',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/product-check-panel',
        label: 'Add Product Check Panel',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/product-collection-compatibility-result',
        label: 'Add Product Collection Compatibility Results',
      },
      {
        type: 'doc',
        id: 'shopify-integration/installation/configure-app-proxy',
        label: 'Configure App Proxy',
      },
    ],
  },
];
