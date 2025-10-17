# Overview

This documentation is designed to allow you to quickly understand and integrate Bike Matrix into your ecommerce website, dealer portal, workshop software or any other system that needs bike part compatibility checks.

Please [contact us](https://www.bikematrix.io/contact) with any feedback or questions you may have.

### How Bike Matrix works?

Bike Matrix has a large database of bikes and products, and algorithms to determine which parts are compatible with a chosen bike based on detailed attributes of the bike and of the product. We provide an API which gives the ability to check if a product (based on SKU EAN/UPC or Manufacturer Part Number) is compatible with a specific bike. Each bike in our database has a unique Bike Matrix ID, therefore before checking SKU compatibility a bike selection process needs to take place.

For fast and simple integration of our solution into your software we have created a Software Development Kit (SDK) with a number of pre-built Web Components for customers to use. These Web Components provide the ability for the user to select a bike (with the Bike Matrix ID being saved into session storage), which is then used by other Web Components for running compatibility checks on the Products available on your website.

### How to integrate Bike Matrix?

There are currently 3 integration methods for Bike Matrix.

- **Shopify**
- **SDK**
- **API**

#### Shopify

We have a [Shopify App](https://apps.shopify.com/bike-matrix) which includes our Web Components, allowing for fast and smooth integration into Shopify stores.

Find out more in the [Shopify Integration section](shopify/shopify-intro).

#### SDK

Our SDK (with Web Components) are available through [NPM](https://www.npmjs.com/package/@bikematrix/web-components/). These can be used on your website to allow for fast and customised integration.

You can integrate with both our SDK and our API in one solution allowing for stores to create additional capabilities if the SDK does not currently offer what you need.

Find out more in the [SDK Integration section](quick-start).

#### API

Our APIs can be integrated directly into your software, allowing for full customisation of the bike selection and compatibility checking process.

Find out more in the [API Integration section](api-endpoints/bikematrixserver).
