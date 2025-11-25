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
        Feel free to reach out if you'd like to collaborate, talk about a
        project, or just say hello!
      </p>

      <div className="space-y-4 text-center">
        <p className="text-gray-800 font-medium">
          📧 Email:{" "}
          <a
            href="mailto:kavya@example.com"
            className="text-pink-500 hover:underline"
          >
            kavya@example.com
          </a>
        </p>

        <div className="flex gap-6 justify-center mt-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            Twitter
          </a>
        </div>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kavya. All rights reserved.
      </footer>
    </SectionWrapper>
  );
};

export default Contact;
