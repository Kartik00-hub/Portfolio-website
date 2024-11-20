import Hero from "./Hero.jsx";
import React from "react";
import Skills from "./skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
