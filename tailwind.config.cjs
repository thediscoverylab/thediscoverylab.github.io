/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    // Load the built-in light/dark themes AND your custom one:
    themes: [
      'light',
      'dark',
      {
        black: {
          // your custom variables:
          '--color-base-100': 'oklch(98% 0.003 247.858)',
          '--color-base-200': 'oklch(19% 0 0)',
          '--color-base-300': 'oklch(22% 0 0)',
          '--color-base-content': 'oklch(87.609% 0 0)',
          '--color-primary': 'oklch(0% 0 0)',
          '--color-primary-content': 'oklch(100% 0 0)',
          '--color-secondary': 'oklch(35% 0 0)',
          '--color-secondary-content': 'oklch(100% 0 0)',
          '--color-accent': 'oklch(35% 0 0)',
          '--color-accent-content': 'oklch(100% 0 0)',
          '--color-neutral': 'oklch(35% 0 0)',
          '--color-neutral-content': 'oklch(100% 0 0)',
          '--color-info': 'oklch(45.201% 0.313 264.052)',
          '--color-info-content': 'oklch(89.04% 0.062 264.052)',
          '--color-success': 'oklch(51.975% 0.176 142.495)',
          '--color-success-content': 'oklch(90.395% 0.035 142.495)',
          '--color-warning': 'oklch(96.798% 0.211 109.769)',
          '--color-warning-content': 'oklch(19.359% 0.042 109.769)',
          '--color-error': 'oklch(62.795% 0.257 29.233)',
          '--color-error-content': 'oklch(12.559% 0.051 29.233)',
          '--radius-selector': '0rem',
          '--radius-field': '0rem',
          '--radius-box': '0rem',
          '--size-selector': '0.25rem',
          '--size-field': '0.25rem',
          '--border': '1px',
          '--depth': '0',
          '--noise': '0',
        },
      },
    ],
    // If you want “black” to be the dark fallback, set this:
    // darkTheme: 'black',
    darkTheme: 'dark',
    logs: false,
  },
}
