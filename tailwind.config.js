/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'body': ['"Open Sans"'],
    },
    container: {
      padding: {
        DEFAULT: '1rem'
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
