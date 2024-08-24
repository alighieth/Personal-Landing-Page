import { getScopedI18n } from "@/locales/server";
import React from "react";

const skills: string[] = [
  "Frontend Development",
  "Backend Development",
  "FullStack Development",
  "Salesforce CMS Development",
  "Salesforce CMS Architecture",
  "System Design",
  "Leadership and Mentorship",
];

const Values = async () => {
  const t = await getScopedI18n("products");
  return (
    <section
      id="products"
      className="p-5 max-w-maxScreen m-auto text-justify md:p-0 md:grid md:grid-cols-2"
    >
      <div className="skills">
        <h4 className="mb-2 font-bold">{t("skills")}</h4>
        <ol className="font-thin">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ol>
      </div>

      <div className="passion mt-5">
        <h4 className="mb-2  font-bold">{t("passion")}</h4>
        <p className="font-thin">{t("passionInfo")}</p>
      </div>
    </section>
  );
};

export default Values;
