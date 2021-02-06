module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homeHero': "url('/assets/home/hero/background.png')"
      }),
      colors: {
        'horama-yellow': '#FFE463'
      }
    },
  },
  variants: {},
  plugins: [],
}