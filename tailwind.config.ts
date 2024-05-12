import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#212A3E" ,
        "navy": "#394867",
        "white" : "#F1F6F9",
        "grey": "#9BA4B5"
      }
    },
  },
  plugins: [],
};
export default config;
