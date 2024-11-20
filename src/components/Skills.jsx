import React from "react";

const skills = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Express.js",
  "GraphQL",
  "TypeScript",
  "sql",
  "REST API",
];

const Skills = () => {
  return (
    <div className="mt-20 lg:mt-0 px-10 py-10 font-archivo ">
      {" "}
      <div className="h-0 ">
        <h1 className="text-white text-center  text-3xl">SKILLS</h1>
      </div>
      <div className="relative flex overflow-hidden mt-14 bg-gradient-to-r from-black via-gray-800 to-black py-6">
        <div className="animate-scroll whitespace-nowrap flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="text-white mx-8 text-2xl bg-gradient-to-r from-gray-400 via-purple-400 to-gray-500 rounded-lg p-3"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
