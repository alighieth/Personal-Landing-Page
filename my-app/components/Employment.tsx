import React from "react";
import { EmploymentCompanyProps } from "./AboutSection";
import Link from "next/link";

export interface EmploymentWrapperProps {
  index: number;
  borderStyle: string;
  employmentInfo: EmploymentCompanyProps;
}

const Employment = (props: EmploymentWrapperProps) => {
  const { index, borderStyle, employmentInfo } = props;
  console.log(employmentInfo.startDate);
  return (
    <div
      className={`relative w-full h-[10vh] overflow-hidden p-5 ${borderStyle}`}
    >
      <div className="absolute bottom-0 left-0 w-[5rem] h-[5rem] rounded-full flex justify-center items-center">
        <span className="text-black text-4xl font-bold">{index}</span>
      </div>

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
