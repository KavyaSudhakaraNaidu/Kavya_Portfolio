// import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import SectionWrapper from "./components/SectionWrapper";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <SectionWrapper
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-6 pt-24"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-pink-600">Kavya Sudhakara Naidu</span>
        </h1>
        <h2 className="text-md sm:text-lg text-gray-800 mt-3">Software Developer</h2>
        <p className="max-w-2xl text-gray-700 leading-relaxed">
          I’m passionate about building modern, responsive, and meaningful web
          experiences using cutting-edge technologies like React, TypeScript,
          and Tailwind CSS.
        </p>
        <motion.a
          href="/Kavya_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-pink-500 text-white
            px-5 py-2 sm:px-6 sm:py-3
            rounded-full text-sm sm:text-base font-semibold"
        >
          Download Resume
        </motion.a>
      </SectionWrapper>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
