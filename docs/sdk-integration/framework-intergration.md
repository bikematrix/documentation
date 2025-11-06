# Framework Integration

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

- [HTML](https://github.com/bikematrix/web-components/tree/main/examples/basic)
- [NextJS](https://github.com/bikematrix/web-components/tree/main/examples/nextjs)
- [PHP](https://github.com/bikematrix/web-components/tree/main/examples/php)
- [React](https://github.com/bikematrix/web-components/tree/main/examples/react)
- [Vue](https://github.com/bikematrix/web-components/tree/main/examples/vue)

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
  }
});
```

### Updating product SKU when switching between product variants on a product page

```javascript
function onSelectVariant(sku) {
  // Variant selection logic here...

  BikeMatrix.updateSku(sku);
}
```
