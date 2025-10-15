// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
  darkTheme: null,
  themes: [
    {
      lightwhite: {
        'base-100': '#ffffff',
        'base-content': '#000000',
        'primary': '#6B8E23', // olive
        'primary-content': '#ffffff',
      },
    },
    {
      sidebarDark: {
        'base-100': '#1f1f1f', // dark gray
        'base-content': '#ffffff', // white text
        'primary': '#6B8E23',
        'primary-content': '#ffffff',
      },
    },
  ],
},}