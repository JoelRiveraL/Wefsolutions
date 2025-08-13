/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        animation: {
          blob: 'blob 7s infinite',
        },
        keyframes: {
          blob: {
            '0%': {
              transform: 'translate(0px, 0px) scale(1)',
            },
            '33%': {
              transform: 'translate(30px, -50px) scale(1.2)',
            },
            '66%': {
              transform: 'translate(-20px, 20px) scale(0.8)',
            },
            '100%': {
              transform: 'translate(0px, 0px) scale(1)',
            },
          },
        },
        animationDelay: {
          2000: '2000ms',
          4000: '4000ms',
        },
      },
    },
    plugins: [
      // Optional: Add a plugin to support animation-delay if not already supported
      function ({ addUtilities }) {
        const newUtilities = {
          '.animation-delay-2000': {
            'animation-delay': '2000ms',
          },
          '.animation-delay-4000': {
            'animation-delay': '4000ms',
          },
        };
        addUtilities(newUtilities);
      },
    ],
  };