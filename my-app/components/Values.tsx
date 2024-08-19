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
    <section id="products" className="grid grid-cols-2">
      <div className="skills font-bold">
        <h4 className="mb-2">{t("skills")}</h4>
        <ol className="font-thin">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ol>
      </div>
      <div className="passion font-bold">
        <h4 className="mb-2">{t("passion")}</h4>
        <p className="font-thin text-justify">{t("passionInfo")}</p>
      </div>
    </section>
  );
};

const JobComponent = (props: { name: string }) => {
  return <div></div>;
};

export default Values;
