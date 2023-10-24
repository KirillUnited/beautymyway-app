import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        mulish: ['var(--font-mulish)']
      },
      colors: {
        foreground: '#254030',
        primary: '#fff',
        secondary: '#C4C4C4',
        primaryInvert: '#000'
      }
    },
  },
  plugins: [],
}
export default config
