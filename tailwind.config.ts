import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4730d3',
        secondary: '#ccf381',
        tertiary: '#001427',
        darkGrey: '#232325',
        lightGrey: '#f2f2f2',
        red: '#ff5943',
        purple: '#3d155f',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
