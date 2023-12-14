import type { Config } from "tailwindcss";

const colors = (() => {
  const colors = {
    brand: {
      black: "#181818",
      green: {
        500: "#05B97E",
        DEFAULT: "#05B97E",
      },
      purple: {
        500: "#7F36A7",
        DEFAULT: "#7F36A7",
      },
      pink: {
        500: "#BC017E",
        DEFAULT: "#BC017E",
      },
      orange: {
        500: "#F5803E",
        DEFAULT: "#F5803E",
      },
    },
  };

  return {
    ...colors,
  };
})();

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

//https://s.cmania.co/guru/95c3cfef-3fdc-477d-b8cc-7bf0b2d659d4?name=[field id="fname"]&amp;email=[field id="femail"]&amp;nome=[field id="fname"]
