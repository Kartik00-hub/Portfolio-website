import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrResume } from "react-icons/gr";

const Hero = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:saxenakartik190@gmail.com?subject=Let's Connect!";
  };

  return (
    <div className="h-auto w-full relative text-white p-8">
      <section className="relative mx-auto mb-5 pt-10 lg:p-10">
        <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto items-center md:items-start gap-10">
          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-violet-600"></div>
            <div className="w-1 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-black via-purple-400 to-black"></div>
          </div>

          {/* Text and Image Container */}
          <div className="flex flex-col-reverse md:flex-row gap-10 w-full">
            {/* Text Section */}
            <div className="flex flex-col md:mx-0 lg:ml-16">
              <h1 className="text-white text-center md:text-left lg:text-6xl text-5xl font-archivo">
                Hi, I'm
                <span className="text-5xl lg:text-6xl text-violet-400 font-archivo">
                  {" "}
                  Kartik
                </span>
              </h1>

              <p className="text-white text-center md:text-left lg:max-w-2xl tracking-normal leading-normal text-xl font-archivo mt-10 md:mt-10 lg:mt-12">
                I develop attractive User interfaces, web applications, and
                Backend APIs. With expertise in modern web technologies like
                React, Node.js, and Tailwind CSS, I excel at building
                responsive, scalable, and visually stunning applications.
              </p>

              <div className="w-full flex justify-center md:justify-start mt-12 md:mt-16">
                <button
                  onClick={handleClick}
                  className="px-8 py-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 bg-violet-500 text-white font-bold rounded-lg transition duration-500 ease-in-out transform hover:bg-violet-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-400/50 focus:outline-none"
                >
                  Contact me
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/3 lg:w-1/3 flex justify-center md:justify-end items-center">
              <img
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-violet-600 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                src="src/WhatsApp Image 2024-10-10 at 19.50.21.jpeg"
                alt="dp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links with Animation */}
      <div className="absolute top-60 left-0">
        <ul className="flex flex-col justify-center items-center gap-2">
          {/* LinkedIn Icon */}
          <li className="animate-slide-in-left">
            <a
              href="https://www.linkedin.com/in/kartik-saxena-6aa21121b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-transform duration-500 ease-in-out transform hover:translate-x-0"
            >
              <FaLinkedin size={40} />
            </a>
          </li>

          {/* Resume Icon */}
          <li className="animate-slide-in-left">
            <a
              className="hover:text-gray-400"
              href="/path-to-resume/Kartik_saxena_resume.pdf" // Correct the path
              download="Kartik_Saxena_Resume.pdf"
              aria-label="Resume"
            >
              <GrResume className="h-10 w-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
