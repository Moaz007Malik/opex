/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',      // Dark Navy
        secondary: '#1E293B',    // Slate
        accent: '#6366F1',       // Indigo
        highlight: '#F59E0B',   // Amber
        success: '#10B981',
        danger: '#EF4444',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        border: '#334155',
        'card-bg': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
