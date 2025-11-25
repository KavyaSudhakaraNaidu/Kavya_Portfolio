import React from "react";
import SectionWrapper from "./SectionWrapper";

const Certifications = () => {
  const certs = [
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "JavaScript Essentials",
      provider: "Cisco Networking Academy",
      year: "2023",
    },
    {
      title: "React Frontend Developer",
      provider: "Meta Coursera",
      year: "2023",
    },
  ];

  return (
    <SectionWrapper
      id="certifications"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-pink-50"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-10">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-pink-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-800 font-medium">{cert.provider}</p>
            <p className="text-sm text-gray-500">{cert.year}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
