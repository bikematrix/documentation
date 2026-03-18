# Product Endpoints

Under [available endpoints](#available-endpoints) is the list of available product endpoints.

## Available Endpoints

### Get Product

You can check if a product is in the Bike Matrix Database by calling **GetProduct** and passing in the **SKU** (EAN, UPC or Original Manufacturers Part Number).
Ie. passing a **sku** of 4550170639464 will return Brake Pad Shimano D02S-MX D Type Disc Pads Sintered Metallic Compound.

### Get Products With Results

You can check if a number of products are in the Bike Matrix Database by calling **GetProductsWithResults** and passing in an array of **SKUs** (EAN, UPC or Original Manufacturers Part Number) added to the body.

The result is an array, where for each SKU passed to the API, information on if it is supported and the product category will be provided.
