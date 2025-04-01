import React from "react";
import s from "./styles.module.css";
import { MenuItem } from "../MenuItem";

export const Links = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.internalPages}>
        <div className={s.title}>Documentation</div>
        <MenuItem title={"Installation"} link="/docs/installation" />
        <MenuItem title={"Getting Started"} link="/docs/getting-started" />
        <MenuItem title={"Configuration"} link="/docs/configuration" />
        <MenuItem
          title={"Web Components"}
          link="/docs/web-components/bike-selector"
        />
        <MenuItem title={"Shopify"} link="/docs/shopify/shopify-intro" />
        <MenuItem
          title={"Framework Intergration"}
          link="/docs/framework-intergration"
        />
        <MenuItem title={"API"} link="/docs/api-endpoints/get-bike-brands" />
      </div>
      <div className={s.externalPages}>
        <div className={s.title}>Bike Matrix</div>
        <MenuItem
          title={"About Us"}
          link="https://bikematrix.io/about"
          external
        />
        <MenuItem
          title={"Retailers"}
          link="https://bikematrix.io/retailers"
          external
        />
        <MenuItem
          title={"Parts Manufacturers"}
          link="https://bikematrix.io/parts-manufacturers"
          external
        />
        <MenuItem
          title={"Bicycle Manufacturers"}
          link="https://bikematrix.io/bicycle-manufacturers"
          external
        />
        <MenuItem title={"Riders"} link="https://bikematrix.io/riders" />
        <MenuItem title={"FAQs"} link="https://www.bikematrix.io/faq" />
      </div>
    </div>
  );
};
