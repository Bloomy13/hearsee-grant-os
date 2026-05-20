/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hs-navy': '#003F73', 'hs-blue': '#004B87',
        'hs-mid': '#1A7EC2', 'hs-sky': '#41B6E6',
        'hs-orange': '#E87722', 'hs-offwhite': '#F5F7FA',
      },
      fontFamily: {
        head: ['Poppins', 'sans-serif'],
        body: ['Atkinson Hyperlegible', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
