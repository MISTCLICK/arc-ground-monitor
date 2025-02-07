// import MainFont from "./app/fonts/Multicolore_Pro.otf";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004785",
        secondary: "#212121",
      },
      fontFamily: {
        multicolore: ["Multicolore", ...fontFamily.sans],
      },
    },
  },
};
