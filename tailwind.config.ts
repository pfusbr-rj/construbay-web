import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#cbb26a',
        'brand-dark': '#0a1628',
        'brand-tan': '#cbb26a',
        'brand-gradient-start': '#bb8b4a',
        'brand-gradient-end': '#f7eb9e',
      },
      fontFamily: {
        'repo': ['Repo', 'Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #bb8b4a, #f7eb9e)',
      },
    },
  },
  plugins: [],
}
export default config
