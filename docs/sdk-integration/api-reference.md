# API Reference

The BikeMatrix global object provides several methods:

```javascript
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

// Get subscription status
BikeMatrix.getActiveSubscription();

// Update product result SKU
BikeMatrix.updateSku(sku);
```
