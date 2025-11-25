// import React from "react";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-6">About Me</h2>

      <p className="max-w-3xl text-gray-700 leading-relaxed text-center">
        I’m Kavya Sudhakara Naidu, a passionate Software Developer who enjoys
        building responsive, modern, and user-friendly web applications.  
        I love solving problems using clean code, intuitive UI design, and
        modern frameworks like React, TypeScript, and Tailwind CSS.
      </p>
    </SectionWrapper>
  );
};

export default About;
