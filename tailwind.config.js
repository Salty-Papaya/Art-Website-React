/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Path to all JS and JSX files
      "./public/index.html", // Path to the index HTML file
      "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
