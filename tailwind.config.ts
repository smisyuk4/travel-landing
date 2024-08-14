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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        //'header-decore': "url('../public/header-decore.svg')",
      },
      colors: {
        accent: '#52a3b1',
        second: '#93d1a4',
        'custom-bg-color': {
          100: '#e9e5cb',
          200: '#d1ddb9',
        },
        'custom-text-color': {
          100: '#FFFFFF',
          400: '#4b414b',
          800: '#000000',
        },
      },
    },
  },
  plugins: [],
};
export default config;
