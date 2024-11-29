
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
        ocilate: {
          '0%%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'transform: scale(2, 0.5);' },
          '75%': { transform: 'transform: scale(0.5, 2);' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'ocilate': 'ocilate 1.5s linear infinite',
      },
      boxShadow: {
        'purple': '0px 0px 100px -5px rgba(228, 158, 255, 0.9)',
      },
      colors: {
        'woodsmoke': {
          '50': '#f8f5fa',
          '100': '#efe9f5',
          '200': '#dbcfe8',
          '300': '#b9a5d4',
          '400': '#9174bc',
          '500': '#7453a4',
          '600': '#604089',
          '700': '#4f3470',
          '800': '#442e5e',
          '900': '#3c2b4f',
          '950': '#0a070d',
        },
        'electric-violet': {
          '50': '#f5f0ff',
          '100': '#ede4ff',
          '200': '#ddcdff',
          '300': '#c6a6ff',
          '400': '#ad73ff',
          '500': '#973bff',
          '600': '#9014ff',
          '700': '#8400ff',
          '800': '#6f01d6',
          '900': '#5c03af',
          '950': '#380077',
        },
      }
    },
  },
  plugins: [],
}
