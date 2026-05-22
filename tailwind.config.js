/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        brand: {
          beige: '#FAFAFA',
          blush: '#FBE8E8', // Light pink background
          rose: '#D6A8A8', // Elegant blush dark
          dark: '#3F3935', // Soft brownish dark instead of aggressive black
          taupe: '#8C827A',
          sage: '#E3E8E1'
        }
      }
    },
  },
  plugins: [],
}
