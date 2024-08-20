import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        accent: {
          100: '#B30013',
          800: '#b34700',
        },
        second: '#006CB3',
        'custom-bg-color': {
          100: '#FFFFFF',
          200: '#fff7c2',
          300: '#E8FFC2',
        },
        'custom-text-color': {
          100: '#FFFFFF',
          400: '#4b414b',
          800: '#000000',
        },
      },
      screens: {
        'small-mobile': '480px',
      },
    },
  },
  plugins: [],
};
export default config;
