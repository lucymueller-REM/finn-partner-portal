import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-suisse)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Primary Colors
        finn: {
          black: "#1A1A1A",
          blue: "#0072EA",
          blueHover: "#0167D4",
          white: "#FFFFFF",
        },
        // Background Colors
        snow: "#F8F8F8",
        cotton: "#F3F3F3",
        pearl: "#E9EAEC",
        pewter: "#D7D7D7",
        steel: "#979797",
        iron: "#707070",
        // Status Colors
        status: {
          lightBlue: "#DBEBFC",
          green: "#26BC58",
          lightGreen: "#DEF5E6",
          orange: "#E88F3D",
          lightOrange: "#FCEEE2",
          red: "#E71D3F",
          lightRed: "#FCDFE4",
        },
      },
      boxShadow: {
        finn: "0px 0px 15px 0px rgba(25, 25, 25, 0.08)",
      },
      dropShadow: {
        finn: "0px 0px 15px rgba(25, 25, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
