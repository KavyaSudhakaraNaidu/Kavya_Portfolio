// import React from "react";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  const experience = [
    {
      role: "Senior Systems Engineer",
      company: "Infosys Ltd., India (Client: Goldman Sachs - AM Public Division",
      period: "March 2021 — August 2023",
      desc: "During my time at Infosys, I worked as a contingent developer for the Goldman Sachs Asset Management Public Division, where I contributed to building reliable, scalable backend services. I designed and developed microservices using Java, Spring Boot, and RESTful APIs, enhancing core system performance by nearly 30%. I also worked on improving user-facing interfaces with React.js, which helped reduce interaction latency and improve client experience. A major part of my role involved automating deployment pipelines using CI/CD tools and Git, which reduced manual deployment effort by 40% and made releases more consistent. I collaborated closely with product owners, developers, and stakeholders to refine requirements and deliver solutions that improved efficiency and accelerated timelines. Additionally, I supported AWS compute services integration work that reduced infrastructure costs by 25% while improving deployment scalability. My experience at Infosys strengthened my technical skills while helping me grow into a more structured, responsible, and user-focused engineer.",
    },
    {
      role: "Software Development Intern",
      company: "Laboratory of Electro-Optic Systes(LEOS), ISRO, India",
      period: "January 2020 — February 2020",
      desc: "I interned at the Laboratory for Electro-Optics Systems (LEOS), a research center under the Indian Space Research Organization (ISRO). My primary contribution was developing a custom Leave Management System using an open-source tech stack. I managed the entire development cycle—from gathering requirements to testing and deployment—reducing HR’s manual workloads by 40%. I also built automated testing scripts to verify features and improve adoption efficiency by 35%. This experience taught me how to approach systems from an end-to-end perspective and deliver practical solutions for real users.",
    },
    {
      role: "IoT & Machine Learning Intern",
      company: "CISCO - RV College of Engineering Centre of Excellence in IoT, India",
      period: "July 2019 — August 2019",
      desc: "At CISCO-RVCE Centre of Excellence in Internet of Things(IoT), I worked on IoT sensor calibration using machine learning techniques. I implemented Python-based ML models that improved sensor accuracy by 20% and created workflows to streamline data capture and validation. I also practiced version control using Git, which helped our team collaborate more efficiently and track changes more effectively. This internship gave me exposure to the intersection of hardware, software, and data, and helped strengthen my programming and analytical abilities.",
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 sm:py-20 bg-pink-50"
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
