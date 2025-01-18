/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--main-color)',
        secondaryBg: 'var(--secondary-bg-color)',
        light: 'var(--light-color)',
        headerBg: 'var(--header-bg-color)',
      },
      fontFamily: {
        primary: ['Lato', 'serif'],
        secondary: ['Poltawski Nowy', 'serif'],
      },
    },
  },
  plugins: [],
}

