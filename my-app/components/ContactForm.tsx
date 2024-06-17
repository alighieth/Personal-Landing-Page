"use client";

import { useScopedI18n } from "@/locales/client";
import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const t = useScopedI18n("contact");
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //     console.log("container x ", containerRef.current.getBoundingClientRect());
  //     console.log("window", window.scrollY, window.innerHeight);

  //     // const sectionRect = containerRef.current.getBoundingClientRect();
  //     // const sectionTop = sectionRect.top;
  //     // const sectionHeight = sectionRect.height;

  //     // if (sectionTop > window.innerHeight || sectionTop + sectionHeight < 0) {
  //     //   containerRef.current.style.position = "relative";
  //     //   return;
  //     // }
  //     // containerRef.current.style.position = "fixed";
  //     // containerRef.current.style.top = 0;
  //     // containerRef.current.style.left = 0;
  //     // containerRef.current.style.backgroundColor = "#fffff";
  //   };

  //   useEffect(() => {
  //     document.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="outline-dotted relative w-full h-[100vh] overflow-visible text-white flex flex-col justify-center"
    >
      <h2
        // style={{ transform: `translateX(${scrollY * 0.75}px)` }}
        className="text-[20vw] self-start uppercase leading-none whitespace-nowrap"
      >
        {t("getIn")}
      </h2>

      <h2 className="text-[20vw] self-end uppercase leading-none">
        {t("touch")}
      </h2>
    </section>
  );
};

export default ContactForm;
