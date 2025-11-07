# Web Components Overview

The Bike Matrix SDK provides 3 types of web components.

- The **Bike Selector** for selecting bikes.
- The **Bike Selector Buttons** for opening the bike selector.
- The **Compatibility Indicators** for displaying compatibility results.

## Bike Selector

This is the core component required for all SDK implementations. Providing an overlay for selecting bikes and choosing product categories.

<div className="image-wrapper">
  <img
    src="/img/web-components/bike-selector.png"
    alt="Bike Selector Component"
    className="image-with-border"
  />
</div>

This component must always exist in the SDK solution.

Find out more on the [Bike Selector page](docs/sdk-integration/web-components/bike-selector.md).

## Bike Selector Buttons

In order to open the Bike Selector, you must implement one or more Bike Selector Buttons.

Find out more information about the available buttons on the [Bike Selector Buttons Page](docs/sdk-integration/web-components/bike-selector-buttons/overview.md).

## Compatibility Indicators

In order for the user to know about the compatibility status of their bike with products, you should implement some of our compatibility indicators.

Find out more information about the available indicators on the [Compatibility Indicators Page](docs/sdk-integration/web-components/compatibility-indicators/overview.md).
