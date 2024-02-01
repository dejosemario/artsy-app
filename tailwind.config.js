/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
    {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "0",
          lg: "0",
          xl: "0",
          "2xl": "0",
        },
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1260px",
          "3xl": "1560",
        },
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        "2xl": "1440px",
      },
      colors: {
        grey: "#333333",
        blue: "#3341C1",
        "grey-light": "#888888",
        "grey-dark": "#292929",
        green: "#3EA03B",
        "grey-999": "#999EA5",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        stix: ["STIX Two Text", "serif"],
        bellefair: ["Bellefair", "serif"],
        poppin: ["Poppins", "sans-serif"],
        baskerville: ["Baskervville", "serif"],
        rubik: ["Rubik", "sans-serif"],
        cardo: ["Cardo", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
