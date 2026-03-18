# Bike Selector

<div className="image-wrapper">
  <img
    src="/img/web-components/bike-selector.png"
    alt="Bike Selector Component"
    className="image-with-border"
  />
</div>

The core component required for all SDK implementations.

This is an overlay which allows for selecting bikes, modifying bikes in the workshop and choosing product categories to find compatibility with.

## Component Details

The bike selector component needs to be added somewhere in your HTML. It has no attributes.

```html
<bikematrix-bikeselector></bikematrix-bikeselector>
```

A button will then be needed to open the bike selector, these are detailed on the [Bike Selector Buttons page](docs/sdk-integration/web-components/bike-selector-buttons/overview.md).

## Configuration

This component can use some core configuration. A detailed overview of configuration can be found in the [Configuration section](/docs/sdk-integration/configuration.md).

| Option               | Type    | Required | Description                                                                                                              | Example       |
| -------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `bikeSelectorBrands` | string  | No       | Comma separated list of bike brands to include. Empty string includes all bike brands. Default value is an empty string. | `"Trek,Cube"` |
| `virtualWorkshop`    | boolean | No       | Whether to enable virtualWorkshop. True by default.                                                                      | `true`        |
