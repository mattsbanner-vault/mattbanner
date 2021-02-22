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
          darkest: '#1E40AF',
          dark: '#1D4ED8',
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          lightest: '#60A5FA',
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
