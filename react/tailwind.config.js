/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Anton: ["Anton", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    fluidTypography: {
        remSize: 14,
        minScreenSize: 640,
        maxScreenSize: 1536,
        minTypeScale: 1.250,
        maxTypeScale: 1.618,
        lineHeight: 1
    },
    extend: {
      colors: {
        'mm-dark': '#121212',
        'mm-black': '#000000',
        'mm-orange': '#E07006',
        'mm-sage': '#3991B0',
        'mm-white': '#FFFFFF',
        'mm-smoke': "#1F1F1F"
      },
      backgroundImage: { 'background': 'url("src/assets/hero.png")' },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwind-fluid-typography"),
    // require('preline/plugin'),
  ],
}

