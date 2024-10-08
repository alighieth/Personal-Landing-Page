import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        myPhoto: "url('/me.png')",
      },
      maxWidth: {
        maxScreen: "1220px",
      },
      colors: {
        mainBlue: "#445D96",
      },
    },
  },
  plugins: [],
};
export default config;
