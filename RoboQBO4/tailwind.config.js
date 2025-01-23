import getPalette from "tailwindcss-palette-generator";



const palette = getPalette([
  {
    color: "#0d3b66",
    name: "primary",
    shades: [100, 200, 300, 400, 450, 500, 600, 700, 800, 900]
  },
]);



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    extend: {
      colors: palette,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "primary": "#0d3b66",
        "primary-focus": "#0d3b66",
      }
    }],
  }
}
