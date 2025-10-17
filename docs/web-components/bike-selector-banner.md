# Bike Selector Banner

<div className="image-wrapper">
  <img
    src="/img/web-components/bike-selector-banner.png"
    alt="Bike Selector Banner Component"
    className="image-with-border"
  />
</div>

A page banner button for opening the [Bike Selector](/docs/web-components/bike-selector).

This is designed to be used at the top of a web page.

## Component Details

```html
<bikematrix-bikeselectorbanner
  data-title="Bike Selector Title"
  data-mobile-title="Bike Selector Mobile Title"
  data-color="Background CSS Color"
  data-full-width="true"
  data-font-color="Text CSS Color"
  data-show="true"
></bikematrix-bikeselectorbanner>
```

### Attributes

| Attribute           | Default                                                  | Required | Description                                                 | Example                         |
| ------------------- | -------------------------------------------------------- | -------- | ----------------------------------------------------------- | ------------------------------- |
| `data-title`        | `"Select Your Bike To Check Compatibility"` (Translated) | No       | The text inside the banner on a computer.                   | `"Bike Selector Banner"`        |
| `data-mobile-title` | `"Check Compatibility"` (Translated)                     | No       | The text inside the banner on a mobile phone.               | `"Bike Selector Banner Mobile"` |
| `data-color`        | `"#000"`                                                 | No       | The background color of the banner.                         | `"#000"`                        |
| `data-full-width`   | `"true"`                                                 | No       | Whether to make the banner take the full width or floating. | `"true"`                        |
| `data-font-color`   | `"#fff"`                                                 | No       | The color of the text and icon.                             | `"#fff"`                        |
| `data-show`         | `"false"`                                                | Yes      | Whether to show the component.                              | `"true"`                        |

### Example

```html
<bikematrix-bikeselectorbanner
  data-title="Bike Selector Banner"
  data-mobile-title="Bike Selector"
  data-color="#000000"
  data-full-width="false"
  data-font-color="#ffffff"
  data-show="true"
></bikematrix-bikeselectorbanner>
```
