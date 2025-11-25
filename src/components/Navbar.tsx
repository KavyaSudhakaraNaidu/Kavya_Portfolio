import React from "react";

const Navbar = () => {
  const sections = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-100/70 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-lg font-bold text-pink-600 tracking-wide">
          Kavya Sudhakara Naidu
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
