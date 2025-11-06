import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1DB954',
          dark: '#1ED760',
          muted: '#1A1A1A'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'gradient-spotify': 'linear-gradient(135deg, #1DB954 0%, #121212 50%, #040404 100%)'
      }
    }
  },
  plugins: []
};

export default config;
