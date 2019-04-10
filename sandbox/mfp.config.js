const path = require('path')

// store entire config object in a constant
const C = {}

/* Availabe fair options */
C.fairs = ['grandbasel', 'artbasel']

/* Current Environment Theme -- will be used by web app and build tasks... */
C.envTheme = process.env.mch_fe_theme || 'artbasel'

/* Paths */
C.paths = {}

/* Paths -- App */
C.paths.app = {}
C.paths.app.static = path.resolve(__dirname, './src/app', 'static')

// ! - Object paths of environment varibles to be exposed to the client/browser
C.publicConfigObjectPaths = [
  'mch.cms',
  'mch.labels'
]

module.exports = C
