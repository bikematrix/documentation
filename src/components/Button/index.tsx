import React from "react";
import s from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export const Button = ({
  text,
  secondary,
  onClick,
  link,
  blank
}: {
  text: string;
  secondary?: boolean;
  onClick?: () => void;
  link?: string;
  blank?: boolean;
}) => {
  return (
    <>
      {onClick && !link && (
        <button
          className={clsx(s.button, secondary && s.secondary)}
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {!onClick && link && (
        <Link
          className={clsx(s.button, secondary && s.secondary)}
          href={link}
          target={blank ? "_blank" : "_parent"}
        >
          {text}
        </Link>
      )}
    </>
  );
};
