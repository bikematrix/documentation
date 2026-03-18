import React from "react";
import s from "./styles.module.css";
import { MenuItem } from "../MenuItem";
import { LinkSection } from "./LinkSection";

export const Links = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.internalPages}>
        <LinkSection title="Documentation">
          <MenuItem title={"Overview"} link="/docs/overview" />
          <MenuItem title={"Quick Start - SDK"} link="/docs/quick-start" />
          <MenuItem title={"Security"} link="/docs/security" />
          <MenuItem title={"Multilingual Support"} link="/docs/multilingual" />
          <MenuItem
            title={"Shopify Integration"}
            link="/docs/shopify-integration/introduction"
          />
          <MenuItem
            title={"SDK Integration"}
            link="/docs/sdk-integration/introduction"
          />
          <MenuItem
            title={"API Intergration"}
            link="/docs/api-integration/introduction"
          />
        </LinkSection>
      </div>
      <div className={s.externalPages}>
        <LinkSection title="Bike Matrix">
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
          {/* <MenuItem title={"SLA"} link="/sla" /> */}
        </LinkSection>
      </div>
    </div>
  );
};
