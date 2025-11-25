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
        I’m a Software Development Engineer with experience building scalable backend systems, microservices, and web applications using Java, Spring Boot, REST APIs, MySQL, and React. I’ve worked on enterprise-grade projects as a contingent developer with Goldman Sachs – AM Public Division, contributing to system performance improvements, user-facing features, debugging, cloud migration support, and CI/CD automation.

        I recently completed my Master’s in Information Systems at Saint Louis University, where I focused on cloud computing, data analytics, and enterprise technologies. I enjoy solving problems through clean, maintainable code and designing systems that scale with business needs. I’m passionate about learning, building, and bringing ideas to life through code — and I’m actively looking for full-time software development roles.
      </p>
    </SectionWrapper>
  );
};

export default About;
