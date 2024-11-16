import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#9D174D",

      },
      textColor: {
        base: "#9D174D", // Adding primary text color (optional, if not using colors directly)
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        jost: ['var(--font-jost)'],
        rubik: ['var(--font-rubik)'],
        poppins: ['Poppins', 'sans-serif'],  // Added Poppins font
        baskervville: ['Baskervville', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
