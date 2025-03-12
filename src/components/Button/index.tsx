import React from "react";
import s from "./styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

export const Button = ({
  external,
  text,
  secondary,
  onClick
}: {
  external?: boolean;
  text: string;
  secondary?: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      {!external && (
        <button
          className={clsx(s.button, secondary && s.secondary)}
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {external && <Link className={s.button}></Link>}
    </>
  );
};
