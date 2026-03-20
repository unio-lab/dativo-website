import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#022A5A",
          mid: "#1A3A62",
        },
        grey: {
          accent: "#687A92",
        },
        white: "#FEFFFF",
      },
      fontFamily: {
        heading: ["'Geist Sans'", "system-ui", "-apple-system", "sans-serif"],
        body: ["'Geist Sans'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'Geist Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
