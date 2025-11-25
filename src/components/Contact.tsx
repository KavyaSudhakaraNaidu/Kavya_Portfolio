// import React from "react";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 bg-white"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-8">Contact</h2>

      <p className="text-gray-700 text-sm sm:text-base max-w-xl text-center">
        Feel free to reach out if you'd like to discuss about a job opportunity, talk about a
        project, or just say hello!
      </p>

      <div className="space-y-4 text-center">
        <p className="text-gray-800 font-medium">
          📧 Email:{" "}
          <a
            href="kavya.sudhakaranaidu14@gmail.com"
            className="text-pink-500 hover:underline"
          >
            kavya.sudhakaranaidu14@gmail.com
          </a>
        </p>

        <div className="flex gap-6 justify-center mt-4">
          <a
            href="https://github.com/KavyaSudhakaraNaidu"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kavya-sudhakara-naidu-3797b2398"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            LinkedIn
          </a>

        </div>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kavya Sudhakara Naidu's Portfolio.
      </footer>
    </SectionWrapper>
  );
};

export default Contact;
