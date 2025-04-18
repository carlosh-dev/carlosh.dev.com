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
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      keyframes: {
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        ocilate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        handshake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '20%, 60%': {
            transform: 'rotate(-10deg)',
          },
          '40%, 80%': {
            transform: 'rotate(10deg)',
          },
        },
        'spin-reverse': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        fadein: 'fadein 1s ease-in forwards',
        ocilate: 'ocilate 2s ease-in infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-slow-reverse': 'spin-reverse 2s linear infinite',
        handshake: 'handshake 1s ease-in-out forwards',
        'handshake-infinite': 'handshake 1s ease-in-out infinite',
      },
      boxShadow: {
        purple: '0px 0px 100px -5px rgba(255, 85, 0, 0.9);',
      },
      'animation-delay': {},
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        orange: {
          10:"#fcf4f0",
          50: '#fff2eb',
          100: '#ffd8cc',
          200: '#ffb399',
          300: '#ff8d66',
          400: '#ff6833',
          500: '#ff5500',
          600: '#cc4400',
          700: '#993300',
          800: '#662200',
          900: '#331100',
          950: '#1a0800',
        },
        grayLight: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fcfcfc',
          300: '#f9f9f9',
          400: '#f5f5f5',
          500: '#f0f0f0',
          600: '#d9d9d9',
          700: '#bfbfbf',
          800: '#a6a6a6',
          900: '#8c8c8c',
          950: '#737373',
        },
        grayDark: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bfbfbf',
          300: '#999999',
          400: '#737373',
          500: '#4d4d4d',
          600: '#3a3a3a',
          700: '#2a2a2a',
          800: '#1e1e1e',
          900: '#141414',
          950: '#0a0a0a',
        },
        black: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#4d4d4d',
          700: '#262626',
          800: '#121212',
          900: '#0a0a0a',
          950: '#000000',
        },
        white: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#f7f7f7',
          700: '#eeeeee',
          800: '#e5e5e5',
          900: '#dcdcdc',
          950: '#d3d3d3',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
