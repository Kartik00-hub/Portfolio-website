const Projects = () => {
  const projects = [
    {
      head: "Job Listing Portal",
      para: "A full-stack application designed for job seekers and recruiters, offering real-time search, advanced filtering, and secure authentication features",
    },
    {
      head: "MAUSAM-Wheather app",
      para: "A responsive web app that provides real-time weather updates, hourly forecasts, and weekly summaries for cities across the world.",
    },
    {
      head: "MAUSAM-Wheather app",
      para: "A responsive web app that provides real-time weather updates, hourly forecasts, and weekly summaries for cities across the world.",
    },
    {
      head: "MAUSAM-Wheather app",
      para: "A responsive web app that provides real-time weather updates, hourly forecasts, and weekly summaries for cities across the world.",
    },
  ];
  return (
    <section className=" text-white py-12 px-8 mx-auto">
      <h2 className="text-4xl font-archivo mb-8 text-center">
        Featured Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-10  lg:gap-24">
        {projects.map((project) => (
          <div className="project-card lg:w-80 bg-white bg-opacity-20 backdrop-blur-md p-6 transition transform hover:translate-y-1  hover:border-blue-900 border-b-4  rounded-lg shadow-lg">
            <h3 className="text-2xl font-archivo mb-3">{project.head}</h3>
            <p className="mb-5 font-caveat text-xl">{project.para}</p>
            <h3 className="text-white font-serif mb-5">Status : Working</h3>
            <a href="#" className="text-violet-500">
              View Project
            </a>
          </div>
        ))}

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
