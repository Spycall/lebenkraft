/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'; // Flowbite plugin for Tailwind CSS

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add this to include Flowbite React components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Set Open Sans as the default sans-serif font
        roboto: ['Roboto', 'sans-serif'],  // Add Roboto for other specific usage
      },
    },
  },
  plugins: [
    flowbitePlugin, // Flowbite plugin for custom Tailwind components
  ],
}