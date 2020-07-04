/*
  TailwindCSS Configuration File
  Docs: https://tailwindcss.com/docs/configuration
  Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      manrope: 'Manrope, sans-serif',
    },
    boxShadow: {
      btn: '2px 0 35px rgba(110, 121, 142, 0.24)',
      card: '2px 0 24px rgba(139, 149, 169, 0.24)',
    },
    colors: {
      white: '#fff',
      red: {
        primary: '#ed8590',
      },
      green: {
        primary: '#409c89',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
