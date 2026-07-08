# UAT Checklist

Run these checks before go-live. Each item is a quick check with the result you should expect. If you don't get the expected result, the note points to the likely cause.

## Selecting a bike

- [ ] Every page that shows Bike Matrix has a way to open the Bike Selector (Bikon, Bike Selector Banner or custom button), and it opens when clicked. If clicking one of the openers does not work, it's likely you have a JavaScript error on the page or the config is not set up correctly. Docs: [Bike Selector Buttons](docs/sdk-integration/web-components/bike-selector-buttons/overview.md)
- [ ] After selecting a bike, the selection persists as you move between pages.

## Where Bike Matrix should appear

- [ ] Select a bike, then browse each collection (PLP) you expect Bike Matrix on. Compatibility indicators appear on those pages. If they don't appear, the collection likely has mapping issues, the handle doesn't match, or the SDK hasn't initialised on that page. Docs: [Configuration](docs/sdk-integration/configuration.md)
- [ ] Browse the collections (PLPs) you do NOT expect Bike Matrix on (saddles, grips, clothing, accessories). No compatibility indicators appear. If one does, that category is mapped when it shouldn't be, or `currentCollectionHandle` is set to a collection where it shouldn't be.
- [ ] Open a supported product page (PDP). The Product Result shows a compatibility result. If nothing shows, confirm the Product Result component is present and `productCollections` includes a mapped collection handle. Docs: [Product Result](docs/sdk-integration/web-components/compatibility-indicators/product-result.md)
- [ ] Open an unsupported product page (PDP). Confirm no Bike Matrix compatibility indicator shows. If it does show, then `productCollections` is incorrectly set to a mapped collection for this product.
- [ ] On a mixed-category page (PLP, e.g. "Bike Parts"), supported products show a result and unsupported ones do not.

## Compatibility results

- [ ] Spot-check a few products you know are compatible. They show as compatible. If a known-compatible product shows no result, the identifier being sent (EAN/UPC/MPN) probably doesn't match our database, for example an extra suffix like `-PAR` or the wrong barcode.
- [ ] On a product (PDP) with variants, changing the variant updates the compatibility result. If it doesn't change, you need to implement `updateSku()` on variant selection. Docs: [Updating product SKU on variant switch](docs/sdk-integration/integration.md#updating-product-sku-when-switching-between-product-variants-on-a-product-page)

## Errors and loading

- [ ] Check that no "400 Malformed or missing bm-app-token" API errors appear while using the site (opening the Bike Selector, loading pages, or opening a product in a new tab). If it does, the `bm-app-token` isn't being supplied correctly (or supplied in time). Confirm it is generated server-side and added to the config before the components initialise. Docs: [Authentication](docs/sdk-integration/authentication.md)
- [ ] On a Shop-by-Bike page or collection (PLP) where products load dynamically, confirm the Compatible List shows the compatible products and is not stuck on "No compatible products found" after products have loaded. If it stays empty, set `delayCompatibleListInitialization=true` and call `updateCompatibleList()` once products have loaded. Docs: [Compatible List (dynamic / SDK usage)](docs/sdk-integration/web-components/compatibility-indicators/compatible-list.md#dynamic--sdk-usage-v13)

## Category and collection mapping

How the pieces fit together:

- **Bike Matrix categories** are a fixed set of supported component types, currently 18 in total: Brake Pads, Brake Rotors, Brake Levers, Brake Calipers, Brake Systems, Front/Rear Wheels, Wheelsets, Tyres/Tires, Tubes, Chains, Cassettes, Headsets, Bottom Brackets, Cranksets, Chainrings, and Front/Rear Axles. You can't add to this list.
- **Your collections** are your own store's product groupings (e.g. "Disk Brake Pads", "MTB tyres"). You name and structure these however suits your store.
- The `categories` block maps Bike Matrix categories onto your collections. The `collections` block defines your collections and gives each a `handle`, the identifier the web components reference everywhere else (`currentCollectionHandle`, `productCollections`).

- [ ] Open the Bike Selector and confirm the categories offered are the ones you expect. A category only appears if its `collection` matches one of your collection titles.
- [ ] Confirm that for each mapped collection page (PLP), the results shown are for the correct product category (for example, a brake pads collection returns brake pad compatibility). If results are for the wrong category, or nothing shows on a collection you expect, the mapping is not correct. Check the category title and `text_id` match the Bike Matrix defined values exactly, and that the collection handle lines up between the `categories` and `collections` config. Docs: [Available Bike Matrix product categories](docs/sdk-integration/configuration.md#available-bike-matrix-product-categories)

## Version

- [ ] The store is on the latest SDK version (v1.3 or later). If on an older version, update the version in your CDN script URL or your npm package. Docs: [Changelog](docs/sdk-integration/changelog.md)
