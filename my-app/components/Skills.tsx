"use client";
import React from "react";

const skills: string[] = [
  "Python",
  "Javascript",
  "Java",
  "Typescript",
  "SQL",
  "NoSql",
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
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-[20vh] flex flex-row justify-start items-center gap-5 text-3xl overflow-hidden"
    >
      {skills.map((skill) => (
        <span className="">{skill}</span>
      ))}
    </section>
  );
};

export default Skills;
