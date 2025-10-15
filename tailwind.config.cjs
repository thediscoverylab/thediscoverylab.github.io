// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    // Do NOT auto-switch to a dark theme
    darkTheme: null,
    themes: [
      // Global site theme: black text on white
      {
        lightwhite: {
          'base-100': '#ffffff',   // page background
          'base-content': '#000000',
          'primary': '#6B8E23',    // olive
          'primary-content': '#ffffff',
          'accent': '#6B8E23',
          'accent-content': '#ffffff',
          // safe neutrals for borders/cards etc.
          'neutral': '#2f2f2f',
          'neutral-content': '#f5f5f5',
        },
      },
      // Sidebar-only theme (manually applied with data-theme="black")
      {
        black: {
          'base-100': '#000000',   // sidebar bg (pure black)
          'base-content': '#ffffff',
          'primary': '#6B8E23',
          'primary-content': '#ffffff',
          'neutral': '#000000',
          'neutral-content': '#ffffff',
        },
      },
    ],
    logs: false,
  },
}
