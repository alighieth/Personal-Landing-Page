import { getScopedI18n } from "@/locales/server";
import React from "react";
import Employment from "./Employment";
import Image from "next/image";
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

const x = {
  0: "border-b-2 border-mainBlue",
  1: "border-t-2 border-r-2 border-mainBlue",
  2: "border-t-2 border-l-2 border-mainBlue",
  3: "border-t-2 border-r-2 border-mainBlue",
  4: "border-t-2 border-l-2 border-mainBlue",
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

      <div className="w-full rounded-3xl mt-5 grid grid-flow-col grid-cols-5 h-[50vh]">
        <div className="bg-myPhoto bg-cover bg-no-repeat w-full h-full col-span-3"></div>
        <div className="w-full h-full col-span-2 overflow-auto">
          <AboutTabs />
        </div>
        <div className="col-span-1 bg-white"></div>
      </div>
    </section>
  );
};

export default AboutSection;
