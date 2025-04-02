import React, { ReactNode, useRef, useState } from "react";
import s from "./styles.module.css";
import gsap from "gsap";
import Chevron from "../../../../../static/img/chevron.svg";

export const LinkSection = ({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const drop = () => {
    if (!isOpen) {
      gsap.to(mobileRef.current, {
        height: "auto",
        opacity: 1,
        onComplete: () => setIsOpen(true)
      });
    } else {
      gsap.to(mobileRef.current, {
        height: 0,
        opacity: 0,
        onComplete: () => setIsOpen(false)
      });
    }
  };

  return (
    <div className={s.linkSectionWrapper}>
      <div className={s.title} onClick={() => drop()}>
        {title}
        <Chevron fill="#fff" height={15} width={15} className={s.chevron} />
      </div>

      <div className={s.line}></div>

      <div className={s.children}>{children}</div>
      <div className={s.mobileChildren} ref={mobileRef}>
        <div className={s.mobileWrapper}>{children}</div>
      </div>
    </div>
  );
};
