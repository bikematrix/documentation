# HTML Events

Bike Matrix emits the following events which can be listened to:

| Event                                | Bubbles | Composed | Cancelable | Description                                                   |
| ------------------------------------ | ------- | -------- | ---------- | ------------------------------------------------------------- |
| BM:Initialized                       | no      | no       | no         | After Bike Matrix SDK / Web Components have been initialized. |
| RefreshCompatibility                 | yes     | yes      | no         | When the compatibility on a page requires refreshing.         |
| [BikeChanged](#bikechanged-detailed) | yes     | yes      | no         | When the selected bike has changed.                           |
| BikeChanging                         | yes     | yes      | no         | Just before bike has changed.                                 |
| BmToggleModal                        | yes     | yes      | no         | Toggle the Bike Selector visibility.                          |

The following sections go into more detail for **some** events on how they can be used:

## 'BikeChanged' Detailed

A HTML 'BikeChanged' event will fire when the user selects or deselects a bike.

You can listen for this event, and then check the window.BikeMatrix.getCurrentBike() to see if it has a value or not (to determine selected/deselected). If there is a value, you can also use the 'name' parameter to get the Bike Name, and 'key' to get the Bike Matrix ID.

```javascript
document.addEventListener("BikeChanged", () => {
  const bike = window.BikeMatrix?.getCurrentBike();
  console.log("[BikeChanged] new bike:", bike);
  if (bike) {
    console.log("[BikeChanged] Bike Matrix ID:", bike.key);
    console.log("[BikeChanged] Bike Name:", bike.name);
  }
});
```
