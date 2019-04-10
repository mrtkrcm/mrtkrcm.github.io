/* eslint-disable global-require, no-param-reassign, no-console, unicorn/no-process-exit */
const { zipObjectDeep, get } = require('lodash')
const cookieParser = require('cookie-parser')
require('dotenv-load')()
const express = require('express')
const nextjs = require('next')
const prettyjson = require('prettyjson')

const { publicConfigObjectPaths } = require('../../mfp.config')
const { envVariables } = require('../app/constants/prefixes')

// ! - Environment Variables
const env = process.env.environment
const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV === 'development'

// ! - Logger
const printTaskBanner = require('./utils/print-task-banner')
const loggers = require('./utils/logger')

const logger = loggers.baseLogger
const { logStyles, log } = loggers

let server

// ! - Populate Environment Configuration and Expose It to The Next.js App
const setupEnvConfig = async () => {
  const envConfigUtil = require('./api/envConfig')
  const envConfig = await envConfigUtil.init()

  let publicConfig = {}
  const getParamByPath = oPath => envConfig.get(oPath || undefined)

  publicConfigObjectPaths.map((oPath) => { // eslint-disable-line array-callback-return
    publicConfig[oPath] = getParamByPath(oPath)
  })

  const envKeys = envConfigUtil.keysWithPrefix(process.env, envVariables.publicPrefix)
  envKeys.map((oPath) => { // eslint-disable-line consistent-return, array-callback-return
    if (publicConfigObjectPaths.indexOf(oPath) !== -1) return undefined
    publicConfig[oPath] = getParamByPath(oPath)
  })

  const envValues = envConfigUtil.pick(Object.keys(publicConfig), publicConfig)

  /*
   * Create an Object from Array of object paths and set Object values with an Array which contain values
   * "mch.fe.google.analytics_id" becomes "Object { mch: { fe: { google: { analytics_id: 'value' } } } }"
   */
  publicConfig = zipObjectDeep(Object.keys(publicConfig), Object.keys(publicConfig).map(oPath => get(envValues, oPath)))

  log.app(':config')('Environment running with following configurations:')
  log.app(':config')(`\n${prettyjson.render(publicConfig, { inlineArrays: true })}\n\n`)

  return publicConfig
}

const startNextAppServer = () => {
  printTaskBanner(' MCH CMS SERVER')

  global.next_publicRuntimeConfig = {
    ...global.next_publicRuntimeConfig
  }

  // Init Next.js
  const app = nextjs({ dev, dir: 'src/app' })
  app
    .prepare()
    .then(() => {
      logger.info('Initializing Application Server...')

      logger.debug('Configuring Express...')
      server = express()
      server.use(cookieParser())
      require('./utils/express-config').init(server, app)
      logger.debug('Express configured')

      // Start Express Server
      server.listen(port, (err) => {
        if (err) throw err
        const startupInfo = `${port} [${env}]`

        logger.info(`${logStyles.okText(' 💡 SERVER STARTED ')} Ready on port ${logStyles.okText(startupInfo)}`)
      })
    })
    .catch((err) => {
      logger.error(
        `${logStyles.errorLabel(' ‼️ STARTUP ERROR ')} ${logStyles.errorText('Unable to start the server')}`,
        err
      )
      console.error(err)
      if (err) throw err
    })
}

// ! - APP SERVER TASK EXECUTOR
;(async () => { // eslint-disable-line semi-style
  printTaskBanner('    MCH CMS FE')
  log.app('📍 Booting the application...')

  const publicConfig = await setupEnvConfig()

  // Expose it to the global object so Next.js can get the config
  global.next_publicRuntimeConfig = publicConfig

  log.http('✅ Running HTTP Next.js App Server...')
  startNextAppServer()
})()

process.on('exit', () => {
  log.app('🔔 Process "exit" signal received.')
})

process.on('SIGINT', () => {
  log.app('🔔 SIGINT signal received.')

  // Stops the server from accepting new connections and finishes existing connections.
  server
    && server.on('close', (err) => {
      log.app('💀 Express server terminated!')
      if (err) {
        console.error(err)
        // eslint-disable-next-line no-process-exit
        process.exit(0)
      }
    })
  log.app('💀 Application Terminated!')
  // eslint-disable-next-line no-process-exit
  process.exit(2)
})
