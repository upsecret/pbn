import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c5ce7',
          dark:    '#5849c2',
          light:   '#a29bfe',
        },
        site: {
          dark:  '#1a1a2e',
          dark2: '#2d2d44',
          light: '#f0f8f8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
