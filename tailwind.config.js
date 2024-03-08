/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f6f6f6",
          200: "#eaeaea",
          400: "#b6b6b6",
          600: "#6c6c6c",
          700: "#595959",
          800: "#3c3c3c",
          "800_01": "#3a3a3a",
          "400_01": "#b1b1b1",
        },
        white: { A700: "#ffffff" },
        deep_orange: { A100: "#f5ab67" },
        black: { 900: "#000000", "900_60": "#00000060", "900_68": "#00000068" },
        red: { 50: "#ffecec", 300: "#f56767", "400_01": "#e05d5d", A200: "#ff3c53" },
        cyan: { 50: "#ccfaf5", 400: "#38b5c6" },
        lime: { 800: "#a1a325" },
        yellow: { 100: "#fffccc" },
        pink: { 400: "#c63973" },
        green: { 600: "#27a953", A100: "#ccffd7" },
        light_blue: { 400: "#2dc3f2" },
        deep_purple: { 800: "#3d349d" },
        indigo: { 800: "#20398d" },
        orange: { A200: "#ffb039" },
        blue: { 50: "#e5eeff" },
      },
      fontFamily: { sourcesanspro: ["var(--font-family)"] },


    },
  },
  plugins: [],
}

