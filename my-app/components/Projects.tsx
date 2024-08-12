import React from "react";

interface ProjectItemProps {
  name: string;
  about: string;
  techStack: string;
}

const ProjectList: ProjectItemProps[] = [
  {
    name: "Roboadvisor",
    about:
      "Developed and implemented machine learning algorithms for a roboadvisor platform, improving investment decision-making and portfolio performance.",
    techStack: "Typescript, Python, Next.js, FastAPI, Scikit-Learn",
  },
  {
    name: "Courser Replica",
    about:
      "Built a full online learning system using the Scrum Agile Methodology and the MERN stack (MongoDB, Express, React, Node).",
    techStack: "JavaScript, React, Node.js, MongoDB, MUI, ANTD",
  },
  {
    name: "Hospital Appointment Managment System",
    about:
      "Led the development of an online appointment management system, prioritizing user privacy, data security, and performance optimization.",
    techStack:
      "Typescript, JavaScript, Next.js, Node.js, MongoDB, ANTD, TailwindCSS",
  },
  {
    name: "Roboadvisor",
    about:
      "Developed and implemented machine learning algorithms for a roboadvisor platform, improving investment decision-making and portfolio performance.",
    techStack: "Typescript, Python, Next.js, FastAPI, Scikit-Learn",
  },
  {
    name: "Courser Replica",
    about:
      "Built a full online learning system using the Scrum Agile Methodology and the MERN stack (MongoDB, Express, React, Node).",
    techStack: "JavaScript, React, Node.js, MongoDB, MUI, ANTD",
  },
  {
    name: "Hospital Appointment Managment System",
    about:
      "Led the development of an online appointment management system, prioritizing user privacy, data security, and performance optimization.",
    techStack:
      "Typescript, JavaScript, Next.js, Node.js, MongoDB, ANTD, TailwindCSS",
  },
];

const Projects = () => {
  return (
    <>
      {ProjectList.map((project) => (
        <div className="w-full border p-1">
          <p>
            <span className="font-bold mr-1">{project.name}</span> |
            <span className="font-thin ml-1">{project.techStack}</span>
          </p>

          <p>{project.about}</p>
        </div>
      ))}
    </>
  );
};

export default Projects;
