/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
        display: ['"Arimo"', '"Public Sans"', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#070707',
          800: '#0d0d0d',
          700: '#141414',
          600: '#1f1f1f',
        }
      },
      letterSpacing: {
        ultra: '-0.05em',
        editorial: '-0.03em',
      },
      fontSize: {
        'hero-xl': ['clamp(4.5rem, 15vw, 17rem)', { lineHeight: '0.82', letterSpacing: '-0.04em' }],
        'section-xl': ['clamp(3.5rem, 10vw, 11rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
      }
    },
  },
  plugins: [],
}
