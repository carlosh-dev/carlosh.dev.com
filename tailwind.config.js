
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ocilate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        handshake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 60%': { transform: 'rotate(-10deg)' },
          '40%, 80%': { transform: 'rotate(10deg)' },
        },
        "spin-reverse": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'fadein': 'fadein 1s ease-in forwards',
        'ocilate': 'ocilate 2s ease-in infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-slow-reverse': 'spin-reverse 2s linear infinite',
        'handshake': 'handshake 1s ease-in-out forwards',
        'handshake-infinite': 'handshake 1s ease-in-out infinite',
      },
      boxShadow: {
        'purple': '0px 0px 100px -5px rgba(139, 92, 246, 0.9);',
      },
      "animation-delay": {

      }
    },
  },
  plugins: [],
}
