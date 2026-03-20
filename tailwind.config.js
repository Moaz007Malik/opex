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
        background: '#0D1117', // Page Background (dark navy)
        foreground: '#FFFFFF',

        // UI surfaces
        primary: '#0D1117',
        secondary: '#161B27', // Section / card background
        'card-bg': '#161B27',

        // Brand / action
        accent: '#5B5FEF', // Blue-purple buttons / tags

        // Supporting colors
        highlight: '#F59E0B', // Launch offer badge / pricing callouts
        success: '#10B981',
        danger: '#EF4444',

        // Text colors
        'text-primary': '#FFFFFF',
        // Body / secondary copy
        'text-secondary': '#A0ADB8',
        // Dimmer grey for disclaimers / small print
        'text-muted': '#7B8A9B',

        // Borders
        border: '#263244',
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