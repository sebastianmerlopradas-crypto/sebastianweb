/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        bg: '#080808',
        surface: '#111111',
        border: '#1e1e1e',
        accent: '#c9a96e',
        'accent-light': '#e8c992',
        muted: '#666666',
        text: '#f0ece4',
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.accent-light'),
            '--tw-prose-pre-code': theme('colors.text'),
            '--tw-prose-pre-bg': theme('colors.surface'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
