/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9a8d4", // pastel pink
        secondary: "#f472b6", // soft rose
      },
    },
  },
  plugins: [],
};