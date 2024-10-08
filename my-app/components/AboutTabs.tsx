"use client";
import React, { ReactNode, useState } from "react";
import Employment from "./Employment";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Quote from "./Quote";

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
    key: "AboutMe",
    label: "About Me",
    content: <AboutMe />,
  },
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
    key: "Quote",
    label: "Quote",
    content: <Quote />,
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
        className="min-h-[40vh] max-h-[80vh] md:max-h-[60vh] overflow-scroll p-5 box-border"
      >
        {tabs[activeTab].content}
      </div>
    </section>
  );
};

export default AboutTabs;
