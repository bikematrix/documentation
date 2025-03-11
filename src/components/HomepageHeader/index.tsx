import React from "react";
import s from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Heading from "@theme/Heading";

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", s.heroBanner)}>
      <div className={clsx("container", s.heroContainer)}>
        <div className={s.leftSection}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={s.rightSection}>
          <img src={require("@site/static/img/main-page.png").default} />
        </div>
      </div>
    </header>
  );
};
