/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1C1B1B',
          800: '#2C2C2C',
          700: '#343434',
          600: '#959595',
          500: '#737373',
          400: '#565656',
          300: '#616161',
          200: '#CFCFCF',
          100: '#DBDBDB',
        },
        green: {
          900: '#42C83C',
        },
      },
      fontFamily: {
        heading: 'Roboto_700Bold',
        subtitle: 'Roboto_500Medium',
        body: 'Roboto_400Regular',
      },
    },
  },
  plugins: [],
}
