import React from "react";
import s from "./styles.module.css";

export const MenuItem = ({
  title,
  link,
  external
}: {
  title: string;
  link: string;
  external?: boolean;
}) => {
  return (
    <a
      className={s.menuItem}
      href={link}
      target={external ? "_blank" : "_self"}
    >
      {title}
    </a>
  );
};
