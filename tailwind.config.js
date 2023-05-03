/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6aed36",

          secondary: "#eda693",

          accent: "#77ce52",

          neutral: "#191B1F",

          "base-100": "#EDE7F4",

          info: "#90B9EE",

          success: "#135D52",

          warning: "#955904",

          error: "#F3161E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
