import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        surface: '#111111',
        card: '#171717',
        'card-border': '#1f1f1f',
        gold: '#c9a24d',
        'gold-dark': '#8c6a2f',
        'gold-light': '#e8c97a',
        muted: '#8a8a8a',
        subtle: '#d6d6d6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a24d 0%, #8c6a2f 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #111111 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201, 162, 77, 0.15)',
        'gold-glow-strong': '0 0 40px rgba(201, 162, 77, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-xl': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
