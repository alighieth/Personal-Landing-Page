"use client";
import React, { useEffect } from "react";

const skills: string[] = [
  "Python",
  "Javascript",
  "Java",
  "Typescript",
  "SQL",
  "NoSQL",
  "FastAPI",
  "MongoDB",
  "Node.js",
  "React.js",
  "Next.js",
  "AWS",
  "Azure",
  "Firebase",
  "SSE",
  "Websockets",
  "Push Notifications",
  "Redis",
  "Celery",
  "Salesforce",
  "Apex",
  "SOQL",
];

const Skills = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <section
      id="skills"
      data-direction="right"
      data-speed="slow"
      className="scroller max-w-maxScreen m-auto w-full h-[20vh] flex flex-row justify-start items-center gap-5 text-3xl overflow-hidden "
    >
      <ul className="tag-list scroller__inner flex flex-wrap gap-4">
        {skills.map((skill) => (
          <li key={skill} className="">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
