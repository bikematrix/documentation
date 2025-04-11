# Bike Matrix

Our Mission is to transform the bicycle industry by offering a comprehensive compatibility solution to all retailers, service providers, manufacturers, and riders, by seamlessly connecting replacement parts to a specific bike.

Using the Bike Matrix Web Components allows any web application to provide its users the accurate selection of a bike from our database of over 65,000 Bikes by Brand, Model, Spec, Year and Size. The web application can then run a series of complex compatibility algorithms over the nominated EAN, UPC or Manufacturer Part Number, returning a Compatibility Result with messages for display to your users for the selected bike and component.

![Bike Matrix Compatibility](/img/compatibility-indicator.png)

Bike Matrix is a compatibility solution that answers the question, which parts fit this bike?
We provide the ability for a user to select a bike and see which parts, from your available products, are suitable replacement or upgrades by processing mechanic-led, component-level compatibility assessment on the products being viewed, searched or filtered.

The Web Components are pre-built Javascript components that can quickly be placed on your website and can provide you with the list of bikes that we have in our database and, along with images, can allow a user to easily select their bike. We have over 65,000 Bikes by Brand, Make, Model, Spec, Year and Size and are currently working to enrich the data of the remaining 100,000+ bikes in our dataset.

We have built up a comprehensive database of components such as Brake Pads, Tyres, Tubes, Brake Rotors, Wheels, Chains, Cassettes, Headsets, Bottom Brackets, Cranksets, Chainrings, Axles, and many more.

As part of the Onboarding process, it is important to talk to us to check that the products on your website that you would like to show compatibility for, are in our database. If the product does not exist in our database just provide us with the information we might need to get the product set up.

We use internationally recognised EAN or UPC barcodes, or the Original Manufacturer’s Part Number to identify products being assessed for compatibility. It is imperative that one of these three product identifiers is used. We use this product SKU to determine the Product Category, and therefore the compatibility logic to apply.

![Product Result](/img/product-image.png)

To check if a product is compatible with a specific Bike we first need to guide the user towards finding the exact bike, via our Bike Selector using the following taxonomy: Brand, Model Family, Model Spec, Bike Spec, Year and Size.

- Brand is the Bike Brand that makes the Bike.
- Model Family refers to the high-level name of the Model within the Brand’s portfolio, such as Domane (Trek), Trance (Giant) or Scultura (Merida).
- Model Spec (sometimes referred to as Frame Spec) is the name for the different frame specifications within a Model Family. It could be that there is only AL(alloy), or perhaps there is Alloy and Carbon or it could be AL, CF, CF SL and CF SLX (eg Canyon).
- Bike Spec is the ‘spec level’ of each specific Models and can take many forms and include groupset names. It usually contains a number such as 3, 2, 1, and 0 or 200, 400, 500 or it can have Comp, Expert, Pro labels depending on the Brand and Model Family.
- Year is an obvious one, but the selection of year can change the list of Bike Spec or Model Spec that were available for a given Model Family.
- Size will depend on the bike brand model and year and can take several forms, S, M, L in some cases, 15”, 16”, 17” in others. Sometimes it’s Short and Long, or S1, S2, S3, S4 (eg Specialized) and for kids bikes we tend to refer to the wheelsize.

![Bike Selector](/img/selector.png)

We’ve put considerable effort into designing a Bike Selector that we think guides the user to the correct bike in an easy to understand manner. Unfortunately, some bikes are just confusing, and some customers don’t immediately know which bike they have.

![Bike Selector](/img/selector-two.png)

The other consideration that is very important to us is our Brand Representation. A condition of signing a licence to use Bike Matrix APIs, is the requirement to incorporate our Compatibility Indicators and the “Powered by Bike Matrix” link.

The Compatibility Indicators are the graphic representations of Green (Compatible), Amber (Compatible with Conditions) and Red (Not Compatible) on both the Collection or Product Landing Page (PLP), and also on the Product Details Page (PDP). Again, these are all built into the Bike Matrix Web Components.

By standardising the look and feel of the compatibility results across all websites, trust is built and confidence is increased, which results in increased conversions. This is also why we recommend locating the Compatibility Indicators close to the Buy Now or Add to Cart buttons, as it will form an important part of the buying journey.

![Compatibility Indicators](/img/indicators.png)
