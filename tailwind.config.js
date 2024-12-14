/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary : '#264653',
        secondary : '#2A9D8F',
        alert: '#E76F51',
        warning: '#E9C46A'
      }
    },
  },
  plugins: [],
}