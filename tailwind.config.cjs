/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
  themes: [
    {
      lightwhite: {
        'base-100': 'oklch(100% 0 0)',  // white background
        'base-content': 'oklch(0% 0 0)', // black text
        'primary': 'oklch(0% 0 0)', // black accents
        'primary-content': 'oklch(100% 0 0)', // white text for contrast
        'secondary': 'oklch(35% 0 0)',
        'secondary-content': 'oklch(100% 0 0)',
        'accent': 'oklch(35% 0 0)',
        'accent-content': 'oklch(100% 0 0)',
        'neutral': 'oklch(35% 0 0)',
        'neutral-content': 'oklch(100% 0 0)',
        'radius-selector': '0rem',
        'radius-field': '0rem',
        'radius-box': '0rem',
      },
      black: {
        'base-100': 'oklch(19% 0 0)', // dark background
        'base-content': 'oklch(98% 0 0)', // light text
        'primary': 'oklch(98% 0 0)', // accent color for buttons
        'primary-content': 'oklch(19% 0 0)',
        'secondary': 'oklch(45% 0 0)',
        'secondary-content': 'oklch(100% 0 0)',
        'accent': 'oklch(60% 0 0)',
        'accent-content': 'oklch(19% 0 0)',
        'neutral': 'oklch(30% 0 0)',
        'neutral-content': 'oklch(98% 0 0)',
      },
    },
  ],
  darkTheme: 'black',
  logs: false,
}}