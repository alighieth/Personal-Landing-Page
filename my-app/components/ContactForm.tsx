"use client";

import React, { useEffect, useRef } from "react";
import { useScopedI18n } from "@/locales/client";

const ContactForm = () => {
  const t = useScopedI18n("contact");
  const containerRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full h-[100vh] text-white flex flex-col justify-center"
    >
      <h2
        id="h2-1"
        className={`text-[20vw] self-end uppercase leading-none whitespace-nowrap`}
      >
        {t("getIn")}
      </h2>

      <h2 id="h2-2" className={`text-[20vw] self-start uppercase leading-none`}>
        {t("touch")}
      </h2>
    </section>
  );
};

export default ContactForm;
