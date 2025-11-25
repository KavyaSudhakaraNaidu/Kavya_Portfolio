// import React from "react";
import SectionWrapper from "./SectionWrapper";

const Education = () => {
  const education = [
    {
      degree: "Masters in Information Systems",
      school: "Saint Louis University",
      location: "Saint Louis, Missouri, USA",
      period: "August 2023 — May 2025",
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      school: "K S School of Engineering and Management",
      location: "Bengaluru, Karnataka, India",
      period: "2017 — 2019",
    },
  ];

  return (
    <SectionWrapper
      id="education"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 sm:py-20 bg-white"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-pink-50 border border-pink-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-pink-700">{edu.degree}</h3>
            <p className="text-gray-800 font-medium">{edu.school}</p>
            <p className="text-gray-700 leading-relaxed">{edu.location}</p>
            <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
