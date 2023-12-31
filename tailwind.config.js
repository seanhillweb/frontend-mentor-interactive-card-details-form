/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff5252",
          violet: {
            100: "#dedddf",
            200: "#8e8593",
            300: "#21092f",
          },
          gradient: {
            start: "#6448fe",
            end: "#600594"
          }
        },
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
