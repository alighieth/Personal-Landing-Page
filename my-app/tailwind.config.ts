import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxScreen: "1220px",
      },
      backgroundColor: {
        mainBlue: "#445D96",
      },
    },
  },
  plugins: [],
};
export default config;
