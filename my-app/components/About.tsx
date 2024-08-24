import { getScopedI18n } from "@/locales/server";
import React from "react";
import Employment from "./Employment";
import AboutTabs from "./AboutTabs";

const AboutSection = async () => {
  const t = await getScopedI18n("about");
  // TODO create a horizantal tabs for those in aboutTabs and include positions also
  return (
    <section
      id="about"
      className="w-full max-w-maxScreen m-auto flex flex-col justify-start items-center gap-5"
    >
      <AboutTabs />
    </section>
  );
};

export default AboutSection;
