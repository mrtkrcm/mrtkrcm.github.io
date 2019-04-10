/* eslint-disable global-require,no-param-reassign */
(function initalizeProxyMiddleware(proxyMiddleware) {
  const proxy = require('http-proxy-middleware')
  const { log } = require('./utils/logger')
  const logger = (level = 'info') => log.http(':proxy', level)

  const options = {
    target: process.env.mch_microservices_url,
    changeOrigin: true,
    logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    logProvider: () => ({
      log: logger('verbose'),
      debug: logger('debug'),
      info: logger('info'),
      warn: logger('warn'),
      error: logger('error')
    })
  }

  // Create proxy instance and attach to the paths
  proxyMiddleware.init = (server) => {
    logger('verbose')(`Proxy options updated: ${Object.keys(options)}`)
    const proxyInstance = proxy(options)

    // Proxify "express" request from defined paths(/msvc, /arbs) to the gateway
    if (options) {
      server.use(['/msvc'], proxyInstance)
    }
  }
}(module.exports))
