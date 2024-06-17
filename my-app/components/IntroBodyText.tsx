"use client";

import { useScopedI18n } from "@/locales/client";
import React, { useEffect, useState } from "react";

const IntroBodyText = () => {
  const t = useScopedI18n("home");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <h1
        style={{ transform: `translateY(${-scrollY * 0.75}px)` }}
        className="text-[30vw] tracking-widest"
      >
        {t("Hello")}
      </h1>
      <h3
        style={{ transform: `translateY(${-scrollY * 0.75}px)` }}
        className="font-thin text-6xl transition-transform delay-75"
      >
        {t("intro")}
      </h3>
    </>
  );
};

export default IntroBodyText;
