import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "GitHub",
    "Java",
    "SQL",
  ];

  return (
    <SectionWrapper
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-pink-50"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-white shadow-md px-6 py-3 rounded-full text-gray-700 font-medium
                       border border-pink-200 hover:bg-pink-100 transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
