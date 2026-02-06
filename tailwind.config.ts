import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          100: '#FDE8D8',
          200: '#F9D4BA',
          300: '#F5C6A0',
          400: '#F0A875',
          500: '#E8914E',
        },
        lime: {
          300: '#E2E87A',
          400: '#D4D95C',
          500: '#C0C94A',
        },
        pink: {
          300: '#FFB0C5',
          400: '#FF85A2',
          500: '#FF6B8A',
        },
        mint: {
          200: '#D4EDDA',
          300: '#C8E6C9',
          400: '#A8D5AB',
        },
        lavender: {
          100: '#F8F0FF',
          200: '#F0E6FF',
          300: '#E6D4FF',
        },
        cream: '#FFF8F0',
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee-scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
