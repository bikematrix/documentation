# SDK Integration

Integrating the Bike Matrix SDK required integrating numerous methods into your solution in order to initialise Bike Matrix.

## SDK Methods

```jsx
// Initialize BikeMatrix (config is optional)
BikeMatrix.init(config);

// Check initialization status
BikeMatrix.isInitialized();

// Refresh compatibility data
BikeMatrix.refresh();

// Reset to initial state
BikeMatrix.reset();

// Reload components
BikeMatrix.reload();

// Clean up BikeMatrix
BikeMatrix.destroy();

// Update configuration
BikeMatrix.updateConfig(config);

// Get current configuration
BikeMatrix.getConfig();

// Get current bike
BikeMatrix.getCurrentBike();

// Update product result SKU
BikeMatrix.updateSku(sku);
```

## SDK Method Integrations

The following are some integrations for common frameworks.

### React Snippet

```jsx
import { useEffect } from "react";
import BikeMatrix from "@bikematrix/web-components";

function BikeMatrixCore() {
  useEffect(() => {
    BikeMatrix.init();
    return () => BikeMatrix.destroy();
  }, []);

  return null;
}
```

### Vue Snippet

```html
<script setup>
  import { onMounted, onBeforeUnmount } from "vue";
  import BikeMatrix from "@bikematrix/web-components";

  onMounted(() => {
    BikeMatrix.init();
  });

  onBeforeUnmount(() => {
    BikeMatrix.destroy();
  });
</script>
```

### Complete Examples

Please check out our full list of example integrations available on the [example page](docs/sdk-integration/examples.md)

## Common Scenarios

### Reloading components after route change or dynamic content updates

```javascript
// After route change or dynamic content updates
BikeMatrix.reload();
```

### Updating collection data when switching between collections

```javascript
// After switching between collections
BikeMatrix.updateConfig({
  currentCollectionHandle: "new-collection",
  products: {
    // Updated collection products
  },
});
```

### Updating product SKU when switching between product variants on a product page

```javascript
function onSelectVariant(sku) {
  // Variant selection logic here...

  BikeMatrix.updateSku(sku);
}
```
