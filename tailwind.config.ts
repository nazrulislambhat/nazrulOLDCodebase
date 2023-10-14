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
        secondary: '#CCF381',
        terinary: '#101935',
        darkGrey: '#232325',
        background: '#f2f2f2',
        lightGrey: '#D3D3D3',
        red: '#ff5943',
        purple: '#320072',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
