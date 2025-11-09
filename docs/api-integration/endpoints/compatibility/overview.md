# Compatibility Endpoints

Under [available endpoints](#available-endpoints) is the list of available compatibility endpoints.

For each endpoint there is the option to use a specific language endpoint option. The language options are detailed in the [multilingual section](docs/multilingual.md).

## Available Endpoints

### Check Single SKU Compatibility

With a **bike_Key** and a **sku**, you can call **Compatibility_CheckSku** to determine if the specific part (by SKU EAN, UPC or Manufacturer Part Number) is compatible with the selected Bike.
Ie. passing **bike_Key** '8a113328-a512-4b14-8f31-711259d9c4c8' and **sku** of 4550170639464 will return a Compatibility Result of 'Compatible with Front and Rear Brake'.

### Check Batch SKU Compatibility With Results

With a **bike_Key** it is possible to send batches of SKUs by calling **Compatibility_CheckSkus** for bulk compatibility assessment. This is currently limited to batches of 50 SKUs and will return a result for every SKU that is passed in (not just a comma separated list of compatible SKUs). This allows detailed messages and warning indicators to be used.
