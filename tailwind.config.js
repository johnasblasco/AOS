/** @type {import('tailwindcss').Config} */
export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
           
          fontFamily: {
            sans: ['Fredoka', 'sans-serif'], // Sets Fredoka as the default sans-serif font
            roboto: ['Roboto', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            fredoka: ['Fredoka', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
