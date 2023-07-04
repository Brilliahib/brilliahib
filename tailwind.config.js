/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "about.html", "project.html", "contact.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        h1color: "#3d535f",
        maincolor: "hsl(250, 69%, 61%)",
        bgcolor: "#fff",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
