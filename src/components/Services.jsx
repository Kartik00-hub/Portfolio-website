import React from "react";

const Services = () => {
  const services = [
    {
      head: "Innovative Ideas",
      para: "I am always researching and exploring new tools, frameworks, and methodologies. This helps ensure that my work stays relevant and is at the forefront of innovation in the tech industry.",
    },
    {
      head: "API Development & Integration",
      para: "Building and integrating APIs for seamless communication between different services and platforms is one of my key strengths. I ensure smooth interaction, high performance, and reliability in every project.",
    },
    {
      head: "Problem Solving & Debugging",
      para: "I excel at quickly identifying and resolving issues, whether it's a bug in the code or an optimization challenge. My strong analytical skills and logical approach allow me to tackle complex problems effectively, ensuring smooth and efficient project execution.",
    },
    {
      head: " Version Control & Collaboration",
      para: "Working collaboratively is essential in modern development. I have extensive experience using Git and version control systems to manage projects efficiently, ensuring seamless team collaboration and smooth code integration across various development stages.",
    },
    {
      head: "Full-Stack Web Development",
      para: "As a full-stack developer, I have hands-on experience with both front-end and back-end technologies. From crafting seamless user interfaces to building scalable server-side applications, I deliver comprehensive, end-to-end web solutions that ensure functionality, scalability, and a great user experience.",
    },
    {
      head: "Security Best Practices",
      para: "I prioritize security in every project, ensuring applications are safeguarded against potential vulnerabilities. With expertise in authentication and authorization mechanisms like JWT and OAuth, as well as data encryption and validation, I ensure safe data transfer and secure storage, protecting sensitive information throughout the development lifecycle.",
    },
  ];

  return (
    <section className="h-auto w-auto" id="services">
      <h4 className="text-white font-serif text-center text-2xl mb-5 pt-4">
        What i do?
      </h4>
      <h1 className="text-white text-center text-4xl mb-5 font-archivo ">
        Here are some of my expertise.
      </h1>
      <div className="flex justify-center w-full gap-10 items-center p-10 flex-wrap">
        {services.map((service) => (
          <div className="lg:w-80 bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg transition transform hover:translate-y-1  hover:border-teal-400 border-b-4 shadow-lg">
            <h1 className="text-2xl text-white text-center font-archivo mb-3">
              {service.head}
            </h1>
            <p className="text-white font-sans text-lg">{service.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
