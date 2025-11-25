import React from "react";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  const experience = [
    {
      role: "Software Developer Intern",
      company: "ABC Tech",
      period: "2024 — Present",
      desc: "Working on building responsive user interfaces and improving frontend performance using React, TypeScript, and Tailwind CSS.",
    },
    {
      role: "Web Development Intern",
      company: "NextGen Web Solutions",
      period: "2023 — 2024",
      desc: "Developed reusable UI components, optimized page layouts, and assisted in backend integration using REST APIs.",
    },
    {
      role: "Computer Science Student",
      company: "University Project Work",
      period: "2021 — 2023",
      desc: "Built academic projects including task manager apps, portfolio designs, and full-stack prototypes using React and Java.",
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-pink-50"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Experience</h2>

      <div className="relative border-l-4 border-pink-300 max-w-3xl w-full pl-6 space-y-10">
        {experience.map((exp, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl border border-pink-200">
            <h3 className="text-xl font-semibold text-pink-700">{exp.role}</h3>
            <p className="text-gray-800 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
            <p className="text-gray-700 leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
