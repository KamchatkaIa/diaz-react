const withMT = require('@material-tailwind/react/utils/withMT')
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './components/Layout/**/*.{js,jsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
})
