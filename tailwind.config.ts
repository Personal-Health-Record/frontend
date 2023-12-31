import type { Config } from 'tailwindcss';

const config: Config = {
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
      colors: {
        mainBlue: '#2CA3FA',
        lightGrey: '#9A9A9A',
        mainGrey: '#5F5F5F',
        superLightGrey: '#F5F5F5',
        lightBlue: '#4FB3FD33',
      },
    },
  },
  plugins: [],
};
export default config;
