import { getScopedI18n } from "@/locales/server";
import React from "react";
import Employment from "./Employment";
import AboutTabs from "./AboutTabs";

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
    companyName: "Yassir",
    companyLocation: "Palo Alto, CA, Remote",
    companyField: "Daily Services",
    position: "Full Stack Engineer",
    startDate: new Date("08/01/2024").toDateString(),
    endDate: "Present",
    website: "https://www.koncile.ai/",
  },
  {
    companyName: "Koncile SAS",
    companyLocation: "Paris, Ile-de-France, France, Remote",
    companyField: "Financial",
    position: "Full Stack Engineer",
    startDate: new Date("05/01/2024").toDateString(),
    endDate: new Date("08/01/2024").toDateString(),
    website: "https://www.koncile.ai/",
  },
  {
    companyName: "Syntilio",
    companyLocation: "Amsterdam, Netherlands, Remote",
    companyField: "Healthcare",
    position: "Software/Salesforce Engineer",
    startDate: new Date("1 July 2022").toDateString(),
    endDate: new Date("05/01/2024").toDateString(),
    website: "https://syntilio.com/",
  },
  {
    companyName: "Tekunda",
    companyLocation: "Cairo, Egypt, Remote",
    companyField: "SaaS, DevOps",
    position: "Full Stack Engineer 2 and Founding Team Member",
    startDate: new Date("1 July 2022").toDateString(),
    endDate: new Date("05/01/2024").toDateString(),
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
  {
    companyName: "German University in Cairo",
    companyLocation: "Cairo, Egypt",
    companyField: "",
    position: "Student",
    startDate: new Date("01/09/2019").toDateString(),
    endDate: new Date("01/07/2024").toDateString(),
    website: "https://www.guc.edu.eg/",
  },
];

const AboutSection = async () => {
  const t = await getScopedI18n("about");
  // TODO create a horizantal tabs for those in aboutTabs and include positions also
  return (
    <>
      <section
        id="about"
        className="w-full mt-[80vh] flex flex-col justify-start items-center gap-5"
      >
        <h1 className="text-4xl self-start">{t("positions")}</h1>

        <div className="w-full border-l-4 border-mainBlue">
          {EmploymentList.map((item) => (
            <Employment key={item.companyName} employmentInfo={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
