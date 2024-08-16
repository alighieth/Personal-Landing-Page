import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="relative w-full h-[50vh] grid grid-flow-row grid-cols-3 gap-5"
    >
      {/* my image */}
      <div className="relative col-span-1 h-full flex flex-row justify-center items-center gap-5">
        <Image src="/me.png" alt="me" width={200} height={200} />
      </div>

      {/* about me text */}
      <div className="col-span-2 overflow-scroll">
        <h6 className="font-bold text-lg">I am Ali Ghieth</h6>

        {/* stats divs */}
        <div className="w-full h-1/4 flex flex-row justify-start items-center gap-5">
          <div className="flex-1 h-full bg-gradient-to-r from-mainBlue to-indigo-300 rounded-lg flex flex-col justify-center items-center">
            <span className="font-bold text-2xl">3</span>
            <span className="font-thin">Years Experience</span>
          </div>
          <div className="flex-1 h-full bg-gradient-to-r from-mainBlue to-indigo-300 rounded-lg flex flex-col justify-center items-center">
            <span className="font-bold text-2xl">60</span>
            <span className="font-thin">
              Whimsically Extraordinary Projects
            </span>
          </div>
        </div>

        {/* linkedin about me */}
        <p>
          As a passionate Full Stack Engineer, I specialize in delivering
          impactful software solutions by leveraging cutting-edge technologies.
          With a Bachelor's degree in Computer Science and Engineering from the
          German University in Cairo, I bring a diverse background and
          international experience to every project.
        </p>

        <br />
        <p>
          I have a proven track record of optimizing infrastructure using AWS
          services like EC2 and S3, conducting performance evaluations of large
          language models (LLMs) from leading AI providers, and integrating
          user-facing elements with server-side logic for seamless
          functionality. My experience with Salesforce includes developing and
          customizing applications using Apex, Visualforce, and Lightning Web
          Components, as well as designing workflows and process automation to
          significantly increase efficiency and productivity.
        </p>
        <br />
        <p>
          I have successfully deployed and managed full-stack applications on
          Microsoft Azure, achieving faster app load times through advanced
          optimization techniques. My expertise extends to implementing and
          managing asynchronous task queues with Celery, enhancing the
          efficiency and scalability of background job processing.
        </p>
        <br />
        <p>
          In addition to my technical skills, I excel in collaborating with
          cross-functional teams to gather requirements, troubleshoot issues,
          and deliver solutions that align with business objectives. My ability
          to translate design mockups into responsive front-end solutions,
          coupled with my experience in creating and maintaining documentation,
          ensures that projects are both aesthetically pleasing and functionally
          robust.
        </p>
        <br />
        <p>
          With proficiency in languages such as Typescript, JavaScript, Python,
          Apex, SQL, and frameworks like React, Next.js, Node.js, and more, I am
          well-equipped to tackle complex challenges and drive innovation in any
          development environment. Let's connect and explore how I can
          contribute to your next big project!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
