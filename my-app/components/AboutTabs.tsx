"use client";
import React, { ReactNode, useState } from "react";
import Employment from "./Employment";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

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
    key: "positions",
    label: "Positions",
    content: <Employment />,
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
  {
    key: "AboutMe",
    label: "About Me",
    content: <AboutMe />,
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (key: number) => {
    setActiveTab(key);
  };

  return (
    <section className="w-full">
      <div id="about__employment_tabs" className="w-full">
        {tabs.map((tab, index) => (
          <button
            onClick={() => handleTabClick(index)}
            key={tab.key}
            className={`p-5 border-b-2 text-xl ${
              activeTab === index
                ? "border-mainBlue text-mainBlue"
                : "text-white border-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="about__employment_content"
        className="min-h-[40vh] max-h-[60vh] overflow-scroll"
      >
        {tabs[activeTab].content}
      </div>
    </section>
  );
};

export default AboutTabs;
