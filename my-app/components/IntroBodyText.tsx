"use client";

import { useScopedI18n } from "@/locales/client";
import React, { useEffect } from "react";

const IntroBodyText = () => {
  const t = useScopedI18n("home");

  useEffect(() => {}, []);

  return (
    <>
      <h1 className="text-[30vw] tracking-widest">{t("Hello")}</h1>
      <h3 className="font-thin">{t("intro")}</h3>
    </>
  );
};

export default IntroBodyText;
