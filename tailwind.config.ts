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
        bg_dark: "#1B1B1D",
        text_light: "#FFFCFA",
        blue: "#015EA7",
      },
    },
  },
  plugins: [],
};
export default config;
