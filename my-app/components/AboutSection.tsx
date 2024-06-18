import { getScopedI18n } from "@/locales/server";
import React from "react";
import Employment from "./Employment";

export interface EmploymentCompanyProps {
  companyName: string;
  companyField: string;
  companyLocation: string;
  position: string;
  startDate: string;
  endDate: string | "Present";
  website: string;
}

const EmploymentList: EmploymentCompanyProps[] = [
  {
    companyName: "Koncile SAS",
    companyLocation: "Paris, Ile-de-France, France, Remote",
    companyField: "Financial",
    position: "Full Stack Developer",
    startDate: new Date("01/05/2024").toDateString(),
    endDate: "Present",
    website: "https://www.koncile.ai/",
  },
  {
    companyName: "Syntilio",
    companyLocation: "Amsterdam, Netherlands, Remote",
    companyField: "Healthcare",
    position: "Software/Salesforce Engineer",
    startDate: new Date("1 July 2022").toDateString(),
    endDate: new Date("01/05/2024").toDateString(),
    website: "https://syntilio.com/",
  },
  {
    companyName: "Tekunda",
    companyLocation: "Cairo, Egypt, Remote",
    companyField: "SaaS, DevOps",
    position: "Full Stack Engineer 2 and Founding Team Member2",
    startDate: new Date("1 July 2022").toDateString(),
    endDate: new Date("01/05/2024").toDateString(),
    website: "https://tekunda.com/",
  },
  {
    companyName: "Bynar Systems",
    companyLocation: "Cairo, Egypt",
    companyField: "Human Resources",
    position: "Full Stack Intern",
    startDate: new Date("01/02/2022").toDateString(),
    endDate: new Date("01/07/2022").toDateString(),
    website: "https://bynar.systems/",
  },
];

const x = {
  0: "border-b-2 border-mainBlue",
  1: "border-t-2 border-r-2 border-mainBlue",
  2: "border-t-2 border-l-2 border-mainBlue",
  3: "border-t-2 border-mainBlue",
};

const AboutSection = async () => {
  const t = await getScopedI18n("about");
  return (
    <section
      id="about"
      className="w-full mt-[80vh] flex flex-col justify-start items-center"
    >
      {EmploymentList.map((item, index) => (
        <Employment
          index={index + 1}
          borderStyle={x[index] as string}
          employmentInfo={item}
        />
      ))}
    </section>
  );
};

export default AboutSection;
