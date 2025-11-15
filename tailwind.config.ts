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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        sans: ['Unbounded', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        alexandria: ['var(--font-alexandria)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
