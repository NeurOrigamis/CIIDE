/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ciide-primary': '#1A4F63',
        'ciide-secondary': '#66C2A5',
        'ciide-accent': '#E3B23C',
        'ciide-neutral': '#E5E9EC',
        'ciide-background': '#F8F9FA',
        'ciide-text': '#1C1C1C',
        'ciide-hover': '#66C2A5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
