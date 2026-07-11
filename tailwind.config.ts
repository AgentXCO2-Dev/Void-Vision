import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          900: '#090014',
          800: '#120022',
          700: '#1d0633'
        }
      }
    }
  },
  plugins: []
} satisfies Config
