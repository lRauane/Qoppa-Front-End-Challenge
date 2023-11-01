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
        primary: 'var(--primary-color)',
        secondary:  'var(--secondary-color)',
        cards:'var(--cards)',
        'card-30': 'var(--cards-30)',
        btn:'var(--btn)',
        'btn-30':'var(--btn-30)',
      },
      height: {
        'screen-navbar': 'calc(100vh - 64px)!important'
      }
    },
  },
  plugins: [],
}
export default config
