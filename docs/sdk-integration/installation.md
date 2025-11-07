import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDK Installation

You can install the Bike Matrix SDK through two methods: CDN or NPM.

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
