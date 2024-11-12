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
        background: "#C2D2F2",
        lightblue: "#203359",
        blackish: "#0A1626",
        lightgreen: "#79F297",
        darkgreen: "#60BF78",
      },
    },
  },
  plugins: [],
};
