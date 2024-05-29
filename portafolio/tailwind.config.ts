import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "rgb(251, 133, 0)",
        darkBg:"rgb(2, 48, 71)"
      },
      backgroundImage: {
        "gradient-cover":
        "linear-gradient(90.21deg, rgba(70, 54, 124, 0.5) 5.91%, rgba(74, 47,189,0.5)111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
