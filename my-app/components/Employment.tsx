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
    startDate: "AUG 2024",
    endDate: "Present",
    website: "https://www.koncile.ai/",
  },
  {
    companyName: "Koncile SAS",
    companyLocation: "Paris, Ile-de-France",
    companyField: "Financial",
    position: "Full Stack Engineer",
    startDate: "MAR 2024",
    endDate: "AUG 2024",
    website: "https://www.koncile.ai/",
  },
  {
    companyName: "Syntilio",
    companyLocation: "Amsterdam, Netherlands",
    companyField: "Healthcare",
    position: "Software/Salesforce Engineer",
    startDate: "JUL 2022",
    endDate: "MAR 2024",
    website: "https://syntilio.com/",
  },
  {
    companyName: "Tekunda",
    companyLocation: "Cairo, Egypt",
    companyField: "SaaS, DevOps",
    position: "Full Stack Engineer 2 and Founding Team Member",
    startDate: "JUL 2022",
    endDate: "MAR 2024",
    website: "https://tekunda.com/",
  },
  {
    companyName: "Bynar Systems",
    companyLocation: "Cairo, Egypt",
    companyField: "Human Resources",
    position: "Full Stack Intern",
    startDate: "FEB 2022",
    endDate: "JUL 2022",
    website: "https://bynar.systems/",
  },
  {
    companyName: "German University in Cairo",
    companyLocation: "Cairo, Egypt",
    companyField: "",
    position: "Student",
    startDate: "SEP 2019",
    endDate: "SEP 2024",
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
    <div className="relative w-full h-auto overflow-hidden p-5 text-justify">
      <div
        id={`${employmentInfo.companyName}-info`}
        className="w-full flex flex-row justify-between items-start"
      >
        <div className="text-left flex-1">
          <Link
            href={employmentInfo.website}
            className="text-3xl hover:text-mainBlue transition-colors delay-75"
          >
            {employmentInfo.companyName}
          </Link>
          <h6 className="font-thin">{employmentInfo.position}</h6>
        </div>

        <div className="text-right flex-1">
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
