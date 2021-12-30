const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}'
    // './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Barlow Condensed', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#181818',
      white: colors.white,
      gray: '#6d6e71',
      // blue: '#00a6d0',
      cyan: '#79FFE1'
      // primary: 'var(--color-primary)',
      // secondary: 'var(--color-secondary)',
      // accent: 'var(--color-accent)',
      // muted: 'var(--color-muted)',
      // neutral: 'var(--color-neutral)'
    },
    extend: {
      colors: {
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#79FFE1',
        // primary: 'var(--color-primary)',
        // secondary: 'var(--color-secondary)',
        // accent: 'var(--color-accent)',
        // muted: 'var(--color-muted)',
        // neutral: 'var(--color-neutral)'
        primary: '#00a6d0',
        secondary: '#0073b5',
        accent: '#74cee2',
        'accent-1': '#ade9f7',
        // muted: '#6d6e71',
        muted: '#6d6e71',
        neutral: '#74cee2',
        light: '#868686'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tighter: 0.875,
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.35)'
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
