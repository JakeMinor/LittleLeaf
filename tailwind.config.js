/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#bab059",
          secondary: "#f7f8e5",
          accent: "#ecd0c5",
          neutral: "#0c0c0b"
        }
      }

    ]
  }
}

