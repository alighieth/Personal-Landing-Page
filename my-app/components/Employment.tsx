import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  img: string;
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
    img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Logo_Yassir_2023.png",
  },
  {
    companyName: "Koncile SAS",
    companyLocation: "Paris, Ile-de-France",
    companyField: "Financial",
    position: "Full Stack Engineer",
    startDate: "MAR 2024",
    endDate: "AUG 2024",
    website: "https://www.koncile.ai/",
    img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/f3v9unebsnak4dxpkdpx",
  },
  {
    companyName: "Syntilio",
    companyLocation: "Amsterdam, Netherlands",
    companyField: "Healthcare",
    position: "Software/Salesforce Engineer",
    startDate: "JUL 2022",
    endDate: "MAR 2024",
    website: "https://syntilio.com/",
    img: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F31462453-d9d5-4899-9934-2a292e953cc3%2F514edd11-b06f-4b80-a97b-233ac379d35a%2Ff7f2472d-2e1c-4c13-87af-40c9c17d705a.png?table=block&id=8f444a6d-160c-4444-867c-268997c95a64&cache=v2",
  },
  {
    companyName: "Tekunda",
    companyLocation: "Cairo, Egypt",
    companyField: "SaaS, DevOps",
    position: "Full Stack Engineer 2 and Founding Team Member",
    startDate: "JUL 2022",
    endDate: "MAR 2024",
    website: "https://tekunda.com/",
    img: "https://tekunda.com/_next/image?url=https%3A%2F%2Fbeck.tekunda.com%2Fassets%2Fc222832c-2cd4-4fd4-a5c2-9cdc8d0daa94&w=384&q=75",
  },
  {
    companyName: "Bynar Systems",
    companyLocation: "Cairo, Egypt",
    companyField: "Human Resources",
    position: "Full Stack Intern",
    startDate: "FEB 2022",
    endDate: "JUL 2022",
    website: "https://bynar.systems/",
    img: "https://bynar.systems/92dfe2f78c099557d956.svg",
  },
  {
    companyName: "German University in Cairo",
    companyLocation: "Cairo, Egypt",
    companyField: "",
    position: "Student",
    startDate: "SEP 2019",
    endDate: "SEP 2024",
    website: "https://www.guc.edu.eg/",
    img: "https://cdn.localized.world/organizations/27/b32c8b55-4d7d-4d68-9674-923b66fdd632.png",
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
        className="w-full flex flex-row justify-between items-start gap-5"
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
