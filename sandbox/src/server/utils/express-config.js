/* eslint-disable global-require, no-param-reassign */
(async function expressInit(moduleExports) {
  /*
   * "environment": test, staging, production, dev, qa, ....
   * "NODE_ENV": 'development' or 'production' only
   */
  const { environment = 'dev', NODE_ENV } = process.env
  const config = require('../../app/config')
  const kl = require('kleur')

  const env = NODE_ENV
  const dev = env !== 'production'

  const APISERVER = process.env.mch_microservices_url
  const LOGLEVEL = process.env.NPM_CONFIG_LOGLEVEL || 'info'

  const isDebug = !!process.env.x_app_debug
  const isExperiment = !!process.env.x

  const loggers = require('./logger')
  const httpLogger = require('./httpLogger')

  const logger = loggers.baseLogger
  const { okLabel, errorLabel, errorText } = loggers.logStyles

  const cdnEnabled = global.next_publicRuntimeConfig.useCdnPrefix
  const cdnPrefix = global.next_publicRuntimeConfig.staticFolder

  moduleExports.init = (server, app) => {
    if (!dev) {
      logger.debug('Enabling GZip compression...')
      server.use(require('compression')())
    }

    logger.info(`${errorLabel(' LOG LEVEL ')} ${LOGLEVEL}`)

    isExperiment && logger.info(`🤓 ${errorText('ALL EXPERIMENTAL FEATURES ENABLED')}`)
    cdnEnabled && logger.info(`${okLabel(' CDN ENABLED ')} /static -> ${kl.blue(cdnPrefix)}`)
    isDebug && logger.info(`${errorLabel(' 🤔 DEBUG MODE ')} ${errorText('Debug level error messages will be shown.')}`)

    logger.info(`${okLabel(' APP VERSION ')} ${kl.blue(config.MCHAPP_VERSION)}`)
    logger.info(`${okLabel(' NODE_ENV ')} ${kl.blue(NODE_ENV)}`)
    logger.info(`${okLabel(' CURRENT ENVIRONMENT ')} ${kl.blue(environment)}`)
    logger.info(`${okLabel(' API SERVER ')} ${kl.blue(APISERVER)}`)

    // MIDDLEWARE - Universal Cookies
    logger.debug(`Setting ${kl.blue('universal cookie')} Express middleware`)
    server.use(require('universal-cookie-express')())

    // MIDDLEWARE - Cookie Parser
    logger.debug(`Setting ${kl.blue('cookie-parser')} Express middleware`)
    server.use(require('cookie-parser')())

    server.use(httpLogger)

    require('../proxy-middleware').init(server)

    // NEXT
    logger.debug('Initialize Next.js ...')
    require('../next').init(server, app)
  }
}(module.exports))
