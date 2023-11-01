import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#3454d1',
        secondary: '#fcfdaf',
        terinary: '#00171F',
        darkGrey: '#232325',
        background: '#f2f2f2',
        lightGrey: '#D3D3D3',
        red: '#ff5943',
        blue: '#35a7ff',
        green: '#17b890',
        white: '#ffffff',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
