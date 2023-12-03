/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins"],
        special: ["Averia Serif Libre"],
      },
      colors: {
        background: "#f5f5f5",
        primary: "#656EAF",
        primaryDark: "#4C5594",
        accent: "#FABC2A",
      },
    },
  },
  plugins: [],
};
