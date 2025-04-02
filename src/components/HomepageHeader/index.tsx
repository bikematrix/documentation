import React from "react";
import s from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { Button } from "../Button";

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(s.heroBanner)}>
      <div className={clsx("container", s.heroContainer)}>
        <div className={s.leftSection}>
          <Heading as="h1" className={s.title}>
            Find the right part for any bicycle.
          </Heading>
          <p className={s.subtitle}>
            Researching and finding the right parts is time-consuming. Bike
            Matrix is a compatibility solution for the entire industry, removing
            confusion for all.
          </p>
          <div className={s.buttonWrapper}>
            <Button text={"Documentation"} link={"/docs/intro"} />
            <Button
              text={"The Solution"}
              link={"https://www.bikematrix.io/see-it-in-action"}
              blank
              secondary
            />
          </div>
        </div>

        <div className={s.rightSection}>
          <img
            src={require("@site/static/img/hero.png").default}
            className={s.main}
          />
        </div>
      </div>
    </header>
  );
};
