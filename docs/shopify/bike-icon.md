# Bike Icon in Header

To allow customers to select their bike, you need to add the Bike Matrix Bike Icon to the Header:

![Image of Bike Icon in a Shopify website's header](https://ecommerce.bikematrix.io/build/_assets/Header-Bike-Icon-WXE4X6CC.png)

Clicking this will bring up the Bike Selector/Bike Lounge:

![Image of the Bike Matrix Bike Lounge](https://ecommerce.bikematrix.io/build/_assets/Bike-Selector-QPXPV3IQ.png)

### If your Theme supports adding App Blocks to the Header, follow these steps.

Add the Bike Matrix ‘Bike Header’ App Block.

1. From your Shopify admin, go to Online Store > Themes.
2. Find the theme that you want to edit, and then click Customise.
3. On the sidebar, click the Sections icon.
4. On the Home Page templage, under the 'Header' section, click 'Add block' to add the Bike Header block from the Apps tab:
   ![Image showing how to add the Bike Icon to a website's header](https://ecommerce.bikematrix.io/build/_assets/Theme-Header-Bike-Icon-OH4TFBQM.png)
5. In the settings panel for the Bike Header, Tick the 'Show Custom Icon?' check box if you want to add custom configuration of the Icon including Width, Height, SVG Icon and Colour.

### If your Theme does not support adding an App Block to the header, follow these steps to edit the Theme code.

Note: you may need a Shopify Partner to help edit the code. Get in touch with us and we can help.

1. From your Shopify admin, go to Online Store > Themes.
2. Click ... > Edit code.

Find the location of the header code (ie. header.liquid or header-icons.liquid) and in the appropriate location add the following html block:

```html
<a
  class="header__icon relative text-current bm-bike-select-icon bm-wrapper"
  id="bm_selectBikeButton"
  href="#"
>
  <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 48 48">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787l.575 1.915Zm-13.662 9.89l1.972 5.52l4.23-8.784l-6.202 3.264Zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z"
      clip-rule="evenodd"
    />
  </svg>
</a>
```
