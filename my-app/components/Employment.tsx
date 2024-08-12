import React from "react";
import { EmploymentCompanyProps } from "./About";
import Link from "next/link";

export interface EmploymentWrapperProps {
  employmentInfo: EmploymentCompanyProps;
}

const Employment = (props: EmploymentWrapperProps) => {
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
