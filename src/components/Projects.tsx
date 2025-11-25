// import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "A modern, responsive portfolio built using React, TypeScript, and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce UI Design",
      desc: "A clean and mobile-friendly e-commerce interface with reusable components.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager App",
      desc: "A simple task management tool with CRUD features and localStorage support.",
      tech: ["React", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-white"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-pink-50 border border-pink-200 shadow-md rounded-xl p-4 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-700 mb-4">{project.desc}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white border border-pink-200 px-3 py-1 rounded-full text-sm text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="bg-pink-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-500 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="bg-pink-200 text-pink-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-300 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
