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
        foreground: 'var(--color-foreground)',
        foregroundDark: '#0E0E0E',
        primary: '#f5f5f5',
        secondary: '#C4C4C4',
        accent: '#FFCC00',
        primaryInvert: '#000',
        grey: '#3D3D3D'
      }
    },
  },
  plugins: [],
}
export default config
