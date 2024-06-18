"use client";

import { useScopedI18n } from "@/locales/client";
import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const t = useScopedI18n("contact");
  const [scrollY, setScrollY] = useState(0);
  const [fixed, setFixed] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    // if (containerRef.current) {
    //   const { top, bottom } = containerRef.current.getBoundingClientRect();
    //   const isFixed = top <= 0 && bottom >= window.innerHeight;
    //   setFixed(isFixed);
    //   setScrollY(top);
    //   console.log("ccc", top, bottom);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full h-[100vh] overflow-visible text-white flex flex-col justify-center"
    >
      <h2
        className={`text-[20vw] self-end uppercase leading-none whitespace-nowrap`}
        style={{
          transform: `translateY(${-scrollY}px)`,
        }}
      >
        {t("getIn")}
      </h2>

      <h2
        className={`text-[20vw] self-start uppercase leading-none`}
        style={{
          transform: fixed ? `translateX(${-scrollY * 0.25}px)` : "none",
          transition: "transform 0.3s ease-out",
        }}
      >
        {t("touch")}
      </h2>
    </section>
  );
};
export default ContactForm;
