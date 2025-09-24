# Bike Selector

The core component for selecting a bike.

#### Basic Button

```html
<button id="bm_selectBikeButton">Select Bike</button>
<bikematrix-bikeselector></bikematrix-bikeselector>
```

#### Button with Bike Icon

```html
<bikematrix-bikon data-color='#000'></bikematrix-bikon>
<bikematrix-bikeselector></bikematrix-bikeselector>
```

[Configuration options](/docs/configuration#bike-selector-configuration)

#### Change Bike Event

A javascript 'BikeChanged' event will fire when the user selects or deselects a bike. You can listen for this event, and check the window.BikeMatrix.getCurrentBike() to see if it has a value or not (to determine selected/deselected). If there is a value, you can also use the 'name' parameter to get the Bike Name, and 'key' to get the Bike Matrix ID.

```javascript
document.addEventListener('BikeChanged', () => {
  const bike = window.BikeMatrix?.getCurrentBike();
  console.log('[BikeChanged] new bike:', bike);
  if (bike) {
    console.log('[BikeChanged] Bike Matrix ID:', bike.key);
    console.log('[BikeChanged] Bike Name:', bike.name);
  }
});
```