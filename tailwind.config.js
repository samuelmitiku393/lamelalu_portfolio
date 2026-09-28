/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ink & paper: a near-black base with slate mid-tones and a single
        // cyan accent reserved for interactive elements. Deliberately NOT
        // the purple-gradient SaaS look.
        ink: {
          950: '#070b12',
          900: '#0a0f1a',
          850: '#0e1524',
          800: '#131c2e',
          700: '#1c2740',
          600: '#2a3854',
        },
        paper: {
          DEFAULT: '#e2e8f0',
          dim: '#a9b7c9',
          // Passes WCAG AA (>=4.5:1) on ink-900 and ink-850 backgrounds.
          faint: '#8496ad',
        },
        accent: {
          DEFAULT: '#22d3ee',
          dim: '#67e8f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Slightly tightened display sizes for a typographic, editorial feel.
        '5xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
