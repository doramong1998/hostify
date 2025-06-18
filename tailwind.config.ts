import type { Config } from 'tailwindcss';

const config: Config = {
  // Bật important cho toàn bộ project
  important: true,
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
