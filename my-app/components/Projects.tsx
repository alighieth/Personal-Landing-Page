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

const Projects = () =>
  ProjectList.map((project) => (
    <ProjectsComponent key={project.name} projectInfo={project} />
  ));

const ProjectsComponent = (props: { projectInfo: ProjectItemProps }) => {
  const { projectInfo } = props;

  return (
    <div className={`relative w-full overflow-hidden p-5 `}>
      <div
        id={`${projectInfo.name}-info`}
        className="w-full flex flex-row justify-between items-center"
      >
        <div className="text-left">
          <div className="flex flex-row justify-start items-end gap-2">
            <h4 className="text-3xl">{projectInfo.name}</h4>
            <h6 className="font-thin">| {projectInfo.techStack}</h6>
          </div>

          <ul className="project__description">
            <li>{projectInfo.about}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
