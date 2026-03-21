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

        // Text colors — body copy uses full white for maximum readability on dark UI
        'text-primary': '#FFFFFF',
        // Long-form / paragraph text (same as primary — easy to read)
        'text-secondary': '#FFFFFF',
        // Meta, captions, placeholders (softer than body, still readable)
        'text-muted': '#B4C0CC',

        // Borders
        border: '#263244',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Body 18px; step up lg/xl for headings and long-form legal copy
        base: ['1.125rem', { lineHeight: '1.65' }],
        lg: ['1.25rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.55' }],
        hero: ['3.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}