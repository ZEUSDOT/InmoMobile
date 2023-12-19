/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue}", "./node_modules/flowbite/**/*.js"],
  dark: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
