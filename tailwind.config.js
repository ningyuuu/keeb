const colors = require('tailwindcss/colors')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ["./src/*.html"],
  purge: false,
  theme: {
    extend: {
      colors: {
        lightblue: colors.lightBlue
      },
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {},
  plugins: [],
};
