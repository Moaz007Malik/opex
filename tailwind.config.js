/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors — dark theme
        background: '#0F172A', // Page Background (Dark Navy)
        foreground: '#F8FAFC',

        // UI surfaces
        primary: '#0F172A',
        secondary: '#1E293B', // Section / card background
        'card-bg': '#1E293B',

        // Brand / action
        accent: '#6366F1', // Indigo buttons / highlights

        // Supporting colors
        highlight: '#F59E0B', // Launch offer badge / pricing callouts
        success: '#10B981',
        danger: '#EF4444',

        // Text colors
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',

        // Borders
        border: '#334155',
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