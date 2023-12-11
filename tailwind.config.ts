import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        foregroundDark: '#131313',
        primary: '#131313',
        secondary: '#C4C4C4',
        accent: '#CAAC59',
        primaryInvert: '#000',
        grey: '#3D3D3D'
      }
    },
  },
  plugins: [],
}
export default config
