// import React from "react";
import SectionWrapper from "./SectionWrapper";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Your University Name",
      period: "2019 — 2023",
      desc: "Gained strong foundations in software development, data structures, algorithms, and computer science fundamentals.",
    },
    {
      degree: "High School Diploma",
      school: "Your High School Name",
      period: "2017 — 2019",
      desc: "Completed coursework in mathematics, sciences, and computer fundamentals.",
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
            <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
            <p className="text-gray-700 leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
