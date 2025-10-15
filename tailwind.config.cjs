/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
  themes: [
    {
      // White background, black text
      lightwhite: {
        '--color-base-100': 'oklch(100% 0 0)',  // white background
        '--color-base-content': 'oklch(0% 0 0)', // black text
        '--color-primary': 'oklch(0% 0 0)', // black accents
        '--color-primary-content': 'oklch(100% 0 0)', // white text for contrast
        '--color-secondary': 'oklch(35% 0 0)',
        '--color-secondary-content': 'oklch(100% 0 0)',
        '--color-accent': 'oklch(35% 0 0)',
        '--color-accent-content': 'oklch(100% 0 0)',
        '--color-neutral': 'oklch(35% 0 0)',
        '--color-neutral-content': 'oklch(100% 0 0)',
        '--radius-selector': '0rem',
        '--radius-field': '0rem',
        '--radius-box': '0rem',
      },
      black: {
        '--color-base-100': 'oklch(19% 0 0)',
        '--color-base-content': 'oklch(98% 0 0)',
        '--color-primary': 'oklch(0% 0 0)',
        '--color-primary-content': 'oklch(100% 0 0)',
        '--color-secondary': 'oklch(35% 0 0)',
        '--color-secondary-content': 'oklch(100% 0 0)',
        '--color-accent': 'oklch(35% 0 0)',
        '--color-accent-content': 'oklch(100% 0 0)',
      },
    },
  ],
  darkTheme: 'black',
  logs: false,
}}
