import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        "bama-navy": "#152e49",
        "bama-blue": "#204063",
        "bama-sky": "#4386ce",
        "bama-light": "#d8e7f7",
        "bama-cream": "#f7f0e9",
        "bama-hover": "#477fba",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "Verdana", "Trebuchet MS", "sans-serif"],
        heading: ["Helvetica", "Arial", "Verdana", "Trebuchet MS", "sans-serif"],
      },
    },
  },
} satisfies Config;
