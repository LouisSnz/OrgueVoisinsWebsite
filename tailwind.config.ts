import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm wood tones
        wood: {
          light: '#D4A574',
          DEFAULT: '#C8A882',
          dark: '#8B6F47',
        },
        // Secondary Colors - Deep browns
        brown: {
          light: '#5D4E37',
          DEFAULT: '#4A3728',
        },
        // Accent Colors
        accent: {
          blue: '#2C3E50',
          burgundy: '#8B4049',
        },
        // Neutrals
        cream: '#F5F5DC',
        lightgray: '#E8E8E8',
        charcoal: '#333333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '28px',
        'body': '16px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F5F5DC 0%, #D4A574 100%)',
        'gradient-brown': 'linear-gradient(135deg, #C8A882 0%, #8B6F47 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
