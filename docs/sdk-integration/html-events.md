# HTML Events

Bike Matrix emits the following events which can be listened to:

| Event                                | Bubbles | Composed | Cancelable | Description                                                   |
| ------------------------------------ | ------- | -------- | ---------- | ------------------------------------------------------------- |
| BM:Initialized                       | no      | no       | no         | After Bike Matrix SDK / Web Components have been initialized. |
| RefreshCompatibility                 | yes     | yes      | no         | When the compatibility on a page requires refreshing.         |
| [BikeChanged](#bikechanged-detailed) | yes     | yes      | no         | When the selected bike has changed.                           |
| BikeChanging                         | yes     | yes      | no         | Just before bike has changed.                                 |
| [BikeAdded](#bikeadded-detailed)     | yes     | yes      | no         | Fires after a bike is added to the Bike Lounge. v1.3.17+      |
| [BikeRemoved](#bikeremoved-detailed) | yes     | yes      | no         | Fires after a bike is removed from the Bike Lounge. v1.3.17+  |
| BmToggleModal                        | yes     | yes      | no         | Toggle the Bike Selector visibility.                          |

The following section provides additional detail for **some** events:

## `BikeChanged` Detailed

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

## `BikeAdded` Detailed

Fired immediately after a **new** bike is added to the Bike Lounge — whether the
user confirms a bike in the Bike Selector, builds a custom bike in the Virtual
Workshop, or a bike is added via a deep-linked Bike Matrix ID. It does **not** fire
when re-saving or renaming a bike that is already in the lounge.

The event's `detail` object carries the added bike under `detail.bike`, with enough
information that you don't need a follow-up API call:

```javascript
document.addEventListener("BikeAdded", (event) => {
  const { bike } = event.detail;
  console.log("[BikeAdded] Bike Matrix ID:", bike.key);
  console.log("[BikeAdded] Bike Name:", bike.name);
});
```

`detail.bike` contains:

| Field | Description |
| --- | --- |
| `key` | The bike's Bike Matrix ID |
| `name` | Bike name |
| `brand` | Brand name |
| `model` | Model name |
| `frameSeries` | Frame series (spec) |
| `frameSize` | Frame size |
| `year` | Model year |
| `variant` | Variant, if any |
| `image` | Thumbnail image URL |
| `isCustomBike` | `true` for a custom build — whether owned by the user or shared with them |
| `isSharedCustomBike` | `true` when the custom bike was shared with the user (read-only) |

:::note
Read the added bike from `event.detail`, **not**
`window.BikeMatrix?.getCurrentBike()`. When `BikeAdded` fires the current bike
has not yet been updated — it only syncs on the subsequent `BikeChanged` event.
If you need to react to the newly-selected current bike, listen for
`BikeChanged` instead.
:::

:::note
Available from v1.3.17+.
:::

## `BikeRemoved` Detailed

Fired immediately after a bike is removed from the Bike Lounge. The event's
`detail` object carries the removed bike's key (its Bike Matrix ID) and name:

```javascript
document.addEventListener("BikeRemoved", (event) => {
  const { bikeKey, bikeName } = event.detail;
  console.log("[BikeRemoved] Bike Matrix ID:", bikeKey);
  console.log("[BikeRemoved] Bike Name:", bikeName);
});
```

:::note
Read the removed bike from `event.detail` rather than
`window.BikeMatrix?.getCurrentBike()`. The removed bike is only the current bike
if it happened to be selected — removing a non-selected bike leaves the current
bike unchanged.
:::

:::note
Available from v1.3.17+.
:::
