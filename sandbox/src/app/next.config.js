/* eslint-disable max-len, no-param-reassign, no-console, no-underscore-dangle, global-require */
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const path = require('path')
const nanoid = require('nanoid')
const prettyjson = require('prettyjson')

const { log } = require('../server/utils/logger')
/*
 * "environment": build, test, staging, production, dev or qa
 * "NODE_ENV": 'development' or 'production' only
 */
const { environment = 'build' } = process.env
const cliArgs = process.argv.slice(2)
const isDebug = process.env.x_app_debug === 'true'
const runtimeId = nanoid()

// ! - Get webpack log format from CLI arguments --wp-log={format} e.g. $ yarn dev --wp-log=compact
let wpLogFormat = cliArgs.filter(arg => arg.indexOf('--wp-log=') !== -1)
wpLogFormat = (wpLogFormat[0] && wpLogFormat[0].length) > 0 ? wpLogFormat[0].split('=')[1] : false

// ! - Print environment variables to console
if (environment === 'build' || isDebug) {
  log.sys('ENVIRONMENT VARIABLES: (_npm filtered)')
  const appVars = ['PORT', 'environment', 'mch_microservices_url', 'NPM_CONFIG_LOGLEVEL']
  const envVars = {
    npm: [],
    yarn: [],
    node: [],
    system: [],
    APP_ENV_CONFIGURATIONS: []
  }

  Object.keys(process.env).map((evar) => {
    if (evar.indexOf('npm_') >= 0 && evar.indexOf('npm_package_') === -1) {
      envVars.npm.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('YARN') >= 0) {
      envVars.yarn.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('NODE') >= 0) {
      envVars.node.push({ [evar]: process.env[evar] })
    } else if (appVars.indexOf(evar) >= 0) {
      envVars.APP_ENV_CONFIGURATIONS.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('mch_') >= 0) {
      envVars.APP_ENV_CONFIGURATIONS.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('npm_package_') === -1) {
      envVars.system.push({ [evar]: process.env[evar] })
    }
    return null
  })

  // eslint-disable-next-line no-unused-vars
  const { npm, ...cleanEnvVars } = envVars

  log.sys(prettyjson.render(cleanEnvVars, { inlineArrays: true, keysColor: 'gray' }))
}

let analyzeTarget = ''
if (process.argv.indexOf('--bundle=server') !== -1) analyzeTarget = 'server'
else if (process.argv.indexOf('--bundle=client') !== -1) analyzeTarget = 'client'
else if (process.argv.indexOf('--bundle=both') !== -1) analyzeTarget = 'both'
// Ignore flags and analyze bundle on build phase
if (environment === 'build') analyzeTarget = 'both'
const nextPlugins = []
nextPlugins.push(require('@zeit/next-source-maps'))
nextPlugins.push([
  require('@zeit/next-bundle-analyzer'),
  {
    analyzeServer: analyzeTarget === 'server' || analyzeTarget === 'both',
    analyzeBrowser: analyzeTarget === 'client' || analyzeTarget === 'both',
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../.next/analysis/server-bundle.html',
        openAnalyzer: false
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../.next/analysis/client-bundle.html',
        openAnalyzer: false
      }
    }
  }
])

const nextConfig = {
  transpileModules: ['rbx', 'dmi-ui'],
  sassLoaderOptions: {
    includePaths: ['../../src', '../dmi-ui']
  },
  publicRuntimeConfig:
  environment !== 'build'
    ? {
      ...global.next_publicRuntimeConfig,
      runtimeId
    }
    : {
      runtimeId
    },
  webpack: (config, options) => {
    const { isServer } = options
    isDebug && console.log(`\n\nwebpack Configurations: ${isServer ? 'SERVER' : 'CLIENT'}`)
    isDebug
      && console.log(prettyjson.render({ nextOptions: options, environment, isDebug }, { inlineArrays: true, keysColor: 'gray' }))

    config.resolve.alias = {
      ...config.resolve.alias,
      '/static': path.resolve(__dirname, 'static')
    }

    let staticPath = 'static'
    if (isServer) {
      staticPath = '../static'
    }

    const urlLoader = {
      loader: 'url-loader',
      options: {
        limit: 100000, // in bytes
        publicPath: './',
        outputPath: `${staticPath}/`,
        name: '[name].[ext]'
      }
    }

    // aliases to import or require certain modules more easily
    // see: https://webpack.js.org/configuration/resolve/
    config.resolve.alias = {
      ...config.resolve.alias,
      'dmi-ui': path.resolve(__dirname, '../dmi-ui'),
      icons: path.resolve(__dirname, './components/icons'),
      services: path.resolve(__dirname, './services'),
      utils: path.resolve(__dirname, './utils'),
      '/static': path.resolve(__dirname, './static'),
      storage: path.resolve(__dirname, './utils/storage'),
      context: path.resolve(__dirname, './context')
    }

    // svg loader to use svg's as a React Component which support many optimizations with SVGO
    // see: https://github.com/smooth-code/svgr
    config.module.rules.push(
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.js?$/
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react', ['@babel/preset-env', { modules: 'auto' }]]
            }
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              prettier: false
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(css)$/
        },
        loader: urlLoader
      }
    )

    // loaders for static assets to be handled by webpack
    // see: https://github.com/webpack-contrib/file-loader and https://github.com/webpack-contrib/url-loader
    config.module.rules.push(
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: urlLoader
      },
      {
        test: /\.(woff|woff2?|[ot]tf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '../../static/fonts/',
          outputPath: `${staticPath}/fonts/`
        }
      }
    )

    /*
     * =======================================================================================================
     * Replaces WebpackBarPlugin of Next.js with SimpleProgressWebpackPlugin on build phase
     * for client bundle logs only. process.env.x_app_debug and --wp-log flags enables it for both server and client.
     */
    if (wpLogFormat) {
      config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'WebpackBarPlugin')

      // format: minimal | extended | debug | verbose
      config.plugins.push(new SimpleProgressWebpackPlugin({
        format: wpLogFormat
      }))
    }

    config.plugins.unshift(new webpack.ProvidePlugin({
      getEnvConfig: [path.resolve(__dirname, './utils/getEnvConfig'), 'default']
    }))

    return config
  },
  // possible routes, if not needed later we will remove
  exportPathMap() {
    return {
      '/signin': { page: '/signin' },
      '/menu': { page: '/menu' },
      '/error': { page: '/error' }
    }
  }
}

module.exports = withPlugins(nextPlugins, withTM(withSass(withCSS(nextConfig))))
