/*
  TailwindCSS Configuration File
  Docs: https://tailwindcss.com/docs/configuration
  Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      manrope: 'Manrope, sans-serif',
      helvetica: 'Helvetica',
    },
    boxShadow: {
      btn: '2px 0 35px rgba(110, 121, 142, 0.24)',
      card: '2px 0 24px rgba(139, 149, 169, 0.24)',
    },
    colors: {
      white: '#fff',
      red: {
        primary: '#ed8590',
        light: '#fdf3f4',
        'light-2': '#f6e7e9',
      },
      green: {
        primary: '#409c89',
        secondary: '#419d8a',
        tertiary: '#3b9583',
        light: '#f0f7f6',
      },
      dark: {
        primary: '#363636',
        secondary: '#1f1f1f',
      },
      grey: {
        light: '#f8f8f8',
        'light-2': '#777777',
        'light-3': '#dfe3e3',
        'light-4': '#fafafa',
        'light-5': '#e9eaea',
        'darken-1': '#656464',
        'darken-2': '#4a4a4a',
        'light-6': '#a4a4a4',
        'light-7': '#8d8d8d',
        'light-8': '#666666',
        'light-9': '#f8f8f8',
        'light-10': '#8d8d8d',
        'light-11': '#e5e5e5',
        'light-12': '#acabab',
        primary: '#545454',
        secondary: '#6c6c6c',
        tertiary: '#969696',
      },
      purple: {
        primary: '#d24bff',
        secondary: '#d256fc',
        light: '#faeeff',
      },
      blue: {
        primary: '#7788fd',
        light: '#f1f3ff',
      },
      orange: {
        primary: '#ff8965',
        light: '#fff3ef',
      },
      pink: {
        primary: '#f35f99',
      },
      yellow: {
        primary: '#ffc107',
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
