const axios = require('axios')
const _ = require('lodash')
const kl = require('kleur')
const prettyjson = require('prettyjson')

const { baseLogger, log } = require('../utils/logger')

// ! - Environment Variables to Fetch Environment Configurations
const FAIR = process.env.mch_fair || 'artbasel'
let API_HOST = process.env.mch_microservices_url || 'https://mch-ab-ops-test.dminc-intl.com'
let ENVIRONMENT = process.env.environment
if (process.env.NODE_ENV === 'development') {
  API_HOST = 'https://mch-ab-ops-test.dminc-intl.com'
  ENVIRONMENT = 'development'
}

const apiPath = 'msvc/v1/configuration'

// ! - Fetched configurations from remote API will be stored in this variable
let apiResponse = null

// ! -
const keysWithPrefix = (obj, prefix) => Object.keys(obj).reduce((acc, key) => {
  const objectPath = key.replace(/_/g, '.')
  return key.indexOf(prefix) === 0 ? acc.concat([objectPath]) : acc
}, [])

// ! -
const pick = (keys, obj) => keys.reduce((acc, key) => {
  /*
     * All values are coming as a string (Linux/Node env. variables doesnt support other types)
     * Hence, env. vars. stringified by using "JSON.stringify" order to support basic Object's and Array's
     * JSON.parse below will fail in case the value is not stringified object so it will fallback to original value.
     */
  try {
    acc[key] = JSON.parse(_.get(obj, key))
  } catch (e) {
    acc[key] = _.get(obj, key)
  }
  return acc
}, {})

/*
 * Create or Manipulate environment variable by the given key and default value
 * All "requested" API data will be available as an environment variables if its not already set by dot file
 * Environment variable will be defined by "key" argument and the response from the API or "defaultValue"
 */
const populateAppConfigItem = (key = null, defaultValue = '') => {
  // ! - "defaultValue" will be used if both API and environment does NOT contain the data with "key" argument
  let finalValue = defaultValue

  const apiHas = _.has(apiResponse, key)
  const apiVal = _.get(apiResponse, key, defaultValue)

  /*
   * Convert dot-separated key to underscore-separated
   * This provides full compatibility between Linux/Node environment variables and API Object
   * Original "key" (mch.fe.cdn.prefix) -> converted "envVarKey" = (mch_fe_cdn_prefix)
   */
  const envVarKey = key.replace(/\./g, '_')
  const envHas = envVarKey in process.env
  const envVal = envHas ? process.env[envVarKey] : undefined

  // ! - Environment variable exist, use it, it has precedence over API data
  if (envHas && typeof envVal !== 'undefined') finalValue = envVal

  // ! - Use the value from the API response (if exists)
  if (!envHas && apiHas && apiVal !== defaultValue) {
    finalValue = apiVal
  }

  // ! - Stringify Array, Object and Boolean type values. Linux/Node.js only support String environment variables
  // eslint-disable-next-line no-new-object
  if (!envHas && (_.isArray(finalValue) || finalValue === new Object(finalValue) || typeof finalValue === 'boolean')) {
    // ! - Define an environment variable from either API or defaultValue
    process.env[envVarKey] = JSON.stringify(finalValue)
  }

  log.app(':config')(`${kl.bold(key)}: ${kl.blue(JSON.stringify(finalValue))}`, {
    finalValue,
    defaultValue,
    envHas,
    envVal,
    apiHas,
    apiVal
  })

  return finalValue
}

/*
 * Creates a instance of configuration service.
 * Fetches app configuration from the remote API and expose them with "get" method
 */
const envConfigConstructor = async () => {
  log.app(':config')('Fetch the App configuration by using following environment variables')
  log.app(':config')(`[API_HOST] ${kl.blue(API_HOST)}`)
  log.app(':config')(`[FAIR] ${kl.blue(FAIR)}`)
  log.app(':config')(`[ENVIRONMENT] ${kl.blue(ENVIRONMENT)}`)

  const apiUrl = `${API_HOST}/${apiPath}/${FAIR}/mch-cms-fe-${ENVIRONMENT}.json?resolvePlaceholders=true`
  // ! - Fetch configurations from remote API
  try {
    log.app(':config')(`Fetching app configurations from: ${kl.blue(apiUrl)}`)
    apiResponse = await axios.get(apiUrl, {
      baseUrl: API_HOST,
      timeout: ENVIRONMENT === 'dev' || process.env.NODE_ENV === 'development' ? 5000 : 30000
    })
    apiResponse = apiResponse.data || null
  } catch (error) {
    if ((ENVIRONMENT === 'dev' || process.env.NODE_ENV === 'development') && error) {
      const mockFile = `./mock/mch-cms-fe-development__${FAIR}`
      log.app(':config')(`${kl.red('FETCH FAILED/TIMEOUT! Fallback to local data:')} ${kl.blue(mockFile)}`)
      // eslint-disable-next-line global-require, import/no-dynamic-require
      apiResponse = require(mockFile)
    } else if (error) {
      baseLogger.error(error)
      throw error
    }
  } finally {
    if (apiResponse) {
      log.app(':config')('Fetching app configuration succeed!')
      baseLogger.debug('API Response', apiResponse)
      baseLogger.debug(`\n${prettyjson.render(apiResponse, { inlineArrays: true })}`)
    }
  }
  return { get: populateAppConfigItem }
}

module.exports = {
  init: envConfigConstructor,
  get: populateAppConfigItem,
  keysWithPrefix,
  pick
}
