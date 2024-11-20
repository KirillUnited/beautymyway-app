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
        mulish: ['var(--font-mulish)'],
        futura: ['var(--font-futura)']
      },
      colors: {
        foreground: 'var(--COLOR_FOREGROUND)',
        foregroundDark: 'var(--FOREGROUND_DARK)',
        primary: 'var(--PRIMARY)',
        secondary: 'var(--SECONDARY)',
        accent: 'var(--ACCENT)',
        primaryInvert: 'var(--PRIMARY_INVERT)',
        grey: 'var(--GREY)',
      }
    },
  },
  plugins: [],
}
export default config
