/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        background: '#FFFFFF',
        foreground: '#000000',

        // UI surfaces
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        'card-bg': '#F8FAFC',

        // Brand / action
        accent: '#2563EB',

        // Supporting colors
        highlight: '#F59E0B',
        success: '#10B981',
        danger: '#EF4444',

        // Text colors (no gray text)
        'text-primary': '#000000',
        'text-secondary': '#000000B3', // black at ~70% opacity

        // Borders
        border: '#0000001A', // black at ~10% opacity
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        hero: ['3.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}