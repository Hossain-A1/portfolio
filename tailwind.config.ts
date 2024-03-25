import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container:{
center:true,
padding:"2rem",
screens:{
  "2xl":"1400px"
}
    },
    extend: {
      colors: {
        dark: "#1B1B1D",
        light: "#FFFCFA",
        blue: "#015EA7",
      },
    },
  },
  plugins: [],
};
export default config;
