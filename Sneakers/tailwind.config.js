/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '390px',
      md: '800px',
      lg: '960px',
      xl: '1140px',
      // '2xl': '1320px',
    },
  },
  plugins: [],
}

