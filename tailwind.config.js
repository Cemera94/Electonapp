/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#003f62",
        mainOrange: "#eda415",
        headingColor: "#185a7d",
        textColor: "3a3a3a",
        textWhite: "#fff",
      }
    },
  },
  plugins: [],
}
