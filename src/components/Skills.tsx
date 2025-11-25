// import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Java 8/11",
    "Python",
    "C",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "JDBC",
    "RESTful APIs",
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "RDBMS",
    "Oracle", 
    "AWS Lambda", "AWS", "Amazon EC2", "Amazon S3",
    "Git", "Linux", "Jenkins", 
    "GitHub",
    "Agile/Scrun Methodologies",
    "Algorithms", "Data Structures", "System Design", "SDLC",
  ];

  return (
    <SectionWrapper
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-pink-50"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
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
