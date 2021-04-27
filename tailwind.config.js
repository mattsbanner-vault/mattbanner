module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          darkest: '#0b63f3',
          dark: '#2372f5',
          DEFAULT: '#3b82f6',
          light: '#5392f7',
          lightest: '#6ca1f8',
        },
        'primary-copy': {
          DEFAULT: '#ffffff'
        },
        secondary: '#6B7280'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
