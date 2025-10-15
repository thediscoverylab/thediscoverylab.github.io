// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      // Default: black text on white background
      {
        lightwhite: {
          'base-100': '#ffffff', // page bg
          'base-content': '#000000', // text
          // Accent = olive green
          'primary': '#6B8E23',            // use for buttons/links you want branded
          'primary-content': '#ffffff',
          'accent': '#6B8E23',
          'accent-content': '#ffffff',
          // Greys for borders, cards, etc.
          'neutral': '#2b2b2b',
          'neutral-content': '#f9f9f9',
        },
      },
      // Sidebar-only theme (applied locally with data-theme="black")
      {
        black: {
          'base-100': '#000000',   // sidebar bg
          'base-content': '#ffffff',
          'primary': '#6B8E23',
          'primary-content': '#ffffff',
          'neutral': '#000000',
          'neutral-content': '#ffffff',
        },
      },
    ],
    darkTheme: 'black', // not used globally; we’ll apply locally to the sidebar
    logs: false,
  },
}
