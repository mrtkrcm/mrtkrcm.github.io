const { version } = require('./package.json')

const config = {
  PORT: process.env.PORT || 3001,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  COOKIE_KEYS: {
    LANGUAGE: 'mfpLocale',
    CSRF_TOKEN: 'csrfToken',
    ACCESS_TOKEN: 'access_token' // Must remain for compatibility with all current sessions
  }
}

config.MCHAPP_VERSION = version

module.exports = config
