/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'karjo-purple': '#8F11A6',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
 ]
}