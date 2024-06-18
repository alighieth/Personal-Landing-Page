import React, { ReactNode } from "react";

interface ValueProps {
  name: string;
  description: string;
  icon?: ReactNode;
}

const skills: string[] = [
  "Frontend Development",
  "Backend Development",
  "FullStack Development",
  "Salesforce CMS Development",
  "Salesforce CMS Architecture",
  "System Design",
  "Leadership and Mentorship",
];
const Values = () => {
  return (
    <section id="products" className="grid grid-cols-2">
      <div className="skills font-bold">
        <h4 className="mb-2">Skills</h4>
        <ol className="font-thin">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ol>
      </div>
      <div className="passion font-bold">
        <h4 className="mb-2">Passion</h4>
        <p className="font-thin">
          As a software engineer, my passion extends beyond the lines of code
          and innovative solutions I craft daily. Financial freedom fuels my
          drive, empowering me to shape a life where possibilities are
          limitless. I am captivated by the synergy between technology and
          financial autonomy, where each project and investment brings me a step
          closer to a future unbound by constraints. This pursuit is not just
          about wealth; it’s about the freedom to create, explore, and make
          impactful choices on my terms. With every keystroke and strategic
          decision, I am architecting a life of boundless opportunities and
          enduring fulfillment.
        </p>
      </div>
    </section>
  );
};

const JobComponent = (props: { name: string }) => {
  return <div></div>;
};

export default Values;
