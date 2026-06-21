import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        cyanSoft: "#e8fbff",
        greenSoft: "#e9fff4"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(5, 18, 36, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
