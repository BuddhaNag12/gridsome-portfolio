// const colors = require('tailwindcss/colors')

module.exports = {
  // darkMode: false, // or 'media' or 'class'
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
      },
      colors: {
        primary: {
          light: "#3D4057",
          dark: "#11152b",
          dimmed: "#04e8b9",
        },
        accent: {
          light: "#00CECD",
          dark: "#0EE6B7",
          code: "#e68fff",
        },

        "primary-text-color": "#08e7b9",
        "secondary-text-color": "#73d9ff",
        "muted-text-color": "#b0c8dd",
        "bar-color": "#0BA990",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
