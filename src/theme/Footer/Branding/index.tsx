import React from "react";
import s from "./styles.module.css";
import Link from "@docusaurus/Link";

export const Branding = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <div className={s.logo}>
          <img src={require("@site/static/img/white-logo.png").default} />
        </div>
        <div className={s.socials}>
          <Link href="https://www.linkedin.com/company/bike-matrix-ltd/">
            <img
              src={require("@site/static/img/linked.png").default}
              alt="LinkedIn Logo"
              className={s.logo}
            />
          </Link>
          <Link href="https://www.facebook.com/BikeMatrixLtd">
            <img
              src={require("@site/static/img/fb.png").default}
              alt="Facebook Logo"
              className={s.logo}
            />
          </Link>
          <Link href="https://www.instagram.com/bike_matrix/">
            <img
              src={require("@site/static/img/insta.png").default}
              alt="Instagram Logo Logo"
              className={s.logo}
            />
          </Link>
        </div>
      </div>
      <div className={s.copyright}>Copyright Bike Matrix 2025</div>
    </div>
  );
};
