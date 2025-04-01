import React, { type ReactNode } from "react";
import s from "./styles.module.css";
import { MenuItem } from "./MenuItem";
import { Branding } from "./Branding";
import { Links } from "./Links";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerContainer}>
        <Links />
        <Branding />
      </div>
    </div>
  );
};

export default React.memo(Footer);
