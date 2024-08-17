import React from "react";
import Link from "next/link";

export interface EmploymentWrapperProps {
  employmentInfo: EmploymentCompanyProps;
}

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
    companyLocation: "Cairo, Egypt",
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
const Employment = () =>
  EmploymentList.map((item) => (
    <EmploymentComponent key={item.companyName} employmentInfo={item} />
  ));

const EmploymentComponent = (props: EmploymentWrapperProps) => {
  const { employmentInfo } = props;

  return (
    <div className={`relative w-full h-[10vh] overflow-hidden p-5 `}>
      <div
        id={`${employmentInfo.companyName}-info`}
        className="w-full flex flex-row justify-between items-center"
      >
        <div className="text-left">
          <Link
            href={employmentInfo.website}
            className="text-3xl hover:text-mainBlue transition-colors delay-75"
          >
            {employmentInfo.companyName}
          </Link>
          <h6 className="font-thin">{employmentInfo.position}</h6>
        </div>

        <div className="text-right">
          <span>
            {employmentInfo.startDate} - {employmentInfo.endDate}
          </span>
          <h6 className="font-thin">{employmentInfo.companyLocation}</h6>
        </div>
      </div>
    </div>
  );
};

export default Employment;
