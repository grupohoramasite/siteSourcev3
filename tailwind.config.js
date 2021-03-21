module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homeHero': "url('/assets/home/hero/background.png')",
        'homeAvailability': "url('/assets/home/worldwideAvailability/Background-1.png')",
        'homeMonitoring': "url('/assets/home/monitoring/Background-2.png')",
        'homeContactus': "url('/assets/home/homeContactCTA/homeContactCTA.png')"
      }),
      colors: {
        'horama-yellow': '#FFE463'
      }
    },
    maxWidth: {
      '1/3': '33.33%'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    }
  },
  plugins: [],
}
