
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        background: "#C2D2F2",
        lightblue: "#203359",
        blackish: "#0A1626",
        lightgreen: "#79F297",
        darkgreen: "#60BF78",
      },
    },
  fontFamily:{
    'serif': ["Times New Roman", Times, serif]
  },
  fontSize: {
    sm: ['14px', '20px'],
    base: ['16px', '24px'],
    lg: ['20px', '28px'],
    xl: ['24px', '32px'],
  },
  borderRadius: {
    15: "15px",
  },
  width: {
    20: "20px",
  },
  height: {
    20: "20px",
  },
},
  plugins: [],
};