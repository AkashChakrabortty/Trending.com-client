/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea272b",

          secondary: "#e53b52",

          accent: "#bdb3fc",

          neutral: "#171E26",

          "base-100": "#ECE6F4",

          info: "#91E5F8",

          success: "#1D916C",

          warning: "#AE7804",

          error: "#F96C94",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
