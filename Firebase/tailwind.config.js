/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        // red: "#D01C28",
        yellow: "#FFEAAE",
        "dark-yellow": "#FCCA3F",
        orange: "#F6828C"
        // purple: "#5F00D9",
        // white: "#FFFFFF",
      },
      spacing: {
        15: '60px',
      },
    },
  },
  plugins: [],
}
