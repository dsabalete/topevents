/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      fontFamily: {
        courier: ['Courier', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

