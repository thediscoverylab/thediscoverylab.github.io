/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
 daisyui: {
  themes: [
    {
      lightwhite: {
        'base-100': 'oklch(100% 0 0)',      // pure white background
        'base-content': 'oklch(0% 0 0)',    // black text
        'primary': 'oklch(0% 0 0)',
        'primary-content': 'oklch(100% 0 0)',
        'secondary': 'oklch(35% 0 0)',
        'secondary-content': 'oklch(100% 0 0)',
        'accent': 'oklch(35% 0 0)',
        'accent-content': 'oklch(100% 0 0)',
        'neutral': 'oklch(35% 0 0)',
        'neutral-content': 'oklch(100% 0 0)',
      },
      black: {
        // main site background = business gray
        'base-100': 'oklch(25% 0 0)',        // dark gray (not black)
        'base-content': 'oklch(95% 0 0)',    // near-white text
        // sidebar = slightly darker for contrast
        'neutral': 'oklch(20% 0 0)',         // darker gray for sidebar or nav
        'neutral-content': 'oklch(95% 0 0)',
        // brand accent colors
        'primary': 'oklch(80% 0 0)',         // light gray/white for buttons
        'primary-content': 'oklch(20% 0 0)', // dark text on light button
        'secondary': 'oklch(45% 0 0)',       // medium gray highlight
        'secondary-content': 'oklch(100% 0 0)',
        'accent': 'oklch(55% 0 0)',          // softer accent tone
        'accent-content': 'oklch(15% 0 0)',
      },
    },
  ],
  darkTheme: 'black',
  logs: false,
}}
