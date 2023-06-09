/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
      },
      boxShadow: {
        input: "0 0 0 1px #FF385C",
      },
    },
  },
  plugins: [],
};
