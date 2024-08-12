"use client";
import React, { ReactNode, useState } from "react";
import Projects from "./Projects";

interface TabItemProps {
  key: string;
  label: ReactNode;
  content: ReactNode;
}

interface LanguageItemProps {
  name: string;
  level: number;
}

const tabs: TabItemProps[] = [
  {
    key: "Languages",
    label: "Languages",
    content: (
      <section className="">
        <h3>Arabic</h3>
        <h3>English</h3>
        <h3>German</h3>
      </section>
    ),
  },
  {
    key: "Projects",
    label: "Projects",
    content: (
      <div className="w-full h-full flex flex-col justify-evenly items-start overflow-auto">
        <Projects />
      </div>
    ),
  },
  {
    key: "Knowledge",
    label: "Knowledge",
    content: (
      <section className="">
        <h3>Responsive and Mobile Ready</h3>
        <h3>Full-stack web app</h3>
        <h3>API Integration</h3>
        <h3>Database Integration</h3>
        <h3>CMS Development</h3>
      </section>
    ),
  },
  {
    key: "Quote",
    label: "Quote",
    content: (
      <section className="">
        <h3>
          Do not go where the path may lead, go instead where there is no path
          and leave a trail. -Ralph Waldo Emerson
        </h3>
      </section>
    ),
  },
];

const languages: LanguageItemProps[] = [
  {
    name: "English",
    level: 8,
  },
  {
    name: "Arabic",
    level: 10,
  },
  {
    name: "German",
    level: 2,
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (key: number) => {
    setActiveTab(key);
  };

  return (
    <section className="w-full h-full grid grid-flow-col grid-cols-3">
      <div className="col-span-2 w-full h-full flex justify-center items-center pl-5">
        {tabs[activeTab].content}
      </div>
      <div className="col-span-1 h-full flex flex-col justify-center items-end fixed right-0 bottom-1">
        {tabs.map((tab, index) => (
          <button
            onClick={() => handleTabClick(index)}
            key={tab.key}
            className={`p-5 border-r-2 ${
              activeTab === index
                ? "border-mainBlue text-mainBlue"
                : "text-white border-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AboutTabs;
