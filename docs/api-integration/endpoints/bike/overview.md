# Bike Endpoints

Under [available endpoints](#available-endpoints) is the list of available bike endpoints.

Endpoints providing bike keys will also provide bike image information, handling this is detailed in the [bike images section](#bike-images).

## Available Endpoints

### Brand

You can get the list of Bike Brands by calling **GetBikeBrands**. This will return the available bike brands providing the bike_Brand_ID for each.

### Model Families

With a given **bike_Brand_ID**, you can get the available Bike Models by calling **GetBikeModels** passing in the **bike_Brand_ID**. This will return the available Model Families providing the **model_Family_ID**.
Ie, passing in a **bike_Brand_ID** of 6 will return the Trek Model Families.

### Model Specs

With a given **model_Family_ID**, you can get the available Model Specs by calling **GetBikeFrameSeries** passing in the **model_Family_ID**. This will return the available Model Specs providing the **model_Spec_ID**.
Ie. passing a **model_Family_ID** of 87 will return a Trek, Fuel Ex.

### Bike Specs

With a given **model_Spec_ID** and an optional **year**, you can get a list of the available Bike Specs by calling **GetBikeSpecSpecs** passing in the **model_Spec_ID** and optional **year**. This will return the available Bike Specs.
Ie. **model_Spec_ID** of 237 and year of 2022 for Trek, Fuel EX 9.7 (and Trek, Fuel EX 9.5, Trek, Fuel EX 9.6, Trek, Fuel EX 9.8 and Trek, Fuel EX 9.9).

### Years

With a given **model_Spec_ID** and an optional **bike_Spec**, you can get a list of the available Years by calling **GetBikeSpecYears** passing in the **model_Spec_ID** and optional **bike_Spec**. This will return the available years.
Ie. **model_Spec_ID** of 237**bike_Spec** of 'Fuel EX 9.7' for 2023, 2022, 2021, 2020, 2019 and 2018.

### Sizes

With a given **model_Spec_ID**, **bike_Spec** and **year**, you can get a list of the available Bike Sizes by calling **GetBikeSpecSizes** passing in the **model_Spec_ID**, **bike_Spec** and **year**. This will return the available Bike Size Ids corresponding to relevant Bike Sizes.
Ie. **model_Spec_ID** of 237**bike_Spec** of 'Fuel EX 9.7', **year** of 2022 for sizes of 14", 15.5", 17.5", 18.5" (**bike_Size_ID** of 29), 19.5" and 21.5".

### Bikes

And finally, with a given **model_Spec_ID**, **bike_Spec** (optional), **year** (optional) and **bike_Size_ID** (optional), you can get one or more available Bikes by calling **GetBikeSpecBikes**. This will return one or more of the available Bikes.
Ie. passing **model_Spec_ID** of 237, **bike_Spec** of 'Fuel EX 9.7', **year** of 2022 and **bike_Size_ID** of 29 will return a 2022 Trek Fuel Ex 9.7 18.5" with a **Bike_Key** of '8a113328-a512-4b14-8f31-711259d9c4c8'.

### Bikes By Data Reference

Some Bikes have a Data Reference field (for a specific bike Brand, Model, Spec and Year). You can get all sizes for a specific Data Reference by calling **GetBikesByDataReference** passing in the specific **dataReference** parameter. By passing a Data Reference of 'trek-fuel-ex-9.7-2022' you return a list of bike sizes for the 'Trek 2022 Fuel EX 9.7'. Note, you will need to know the Data Reference of the bikes to use this functionality. It does not match the bike_reference field as this has special characters stripped out. Get in touch with us to find out more.

### Bike Brand Product Category

As we continue to roll-out compatibility for new product categories and increase the number of bikes for which we have enriched the bike spec data, not all bikes have the same ability to process compatibility assessment, so we need to identify which product categories are available for each brand of bikes. We use this information in our Bike Selector to guide the customer to the available product categories for the selected brand.
With a given **bike_Brand_ID** you can get a list of available **product_Category_IDs** corresponding to a list of Product Categories using **GetBikeBrandProductCategories** call.
Ie. passing in a **bike_Brand_ID** of 6 (Trek) will return Brake Pads, Brake Rotor, Front Wheel, Rear Wheel, Wheelset, Tyre and Tube.

## Bike Images

For each bike there is a **bike_Thumbnail** and there may be additional **bike_Images**. The bike_Images field is a comma separated list of additional images. Each available colour is represented for a given bike to assist in the visual identification of the bike selection process.
To display the bike image from the **Bike** that comes back from **GetBikeSpecBikes** you can get the image from the following URL template:
https://imagestore.bikematrix.io/[bike_Reference]/400-[thumbnail/image name]
Ie. https://imagestore.bikematrix.io/cube-ams-one11-c68x-tm-29-2022/400-4a1c9.jpeg
