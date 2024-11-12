/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#C2D2F2",
        background: "#203359",
        blackish: "#0A1626",
        lightgreen: "#79F297",
        darkgreen: "#60BF78",
        purple: "#9A82E0",
      },
      height: {
        150: "150px",
        250: "250px",
        400: "400px",
        350: "350px",
      },
      width: {
        250: "250px",
        300: "300px",
        75: "75%",
      },
      borderRadius: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
