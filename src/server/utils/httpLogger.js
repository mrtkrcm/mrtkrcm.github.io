/* eslint-disable no-console, max-len, global-require, no-underscore-dangle, no-param-reassign, no-nested-ternary */
const morgan = require('morgan')
const kleur = require('kleur')

const LOGLEVEL = process.env.NPM_CONFIG_LOGLEVEL || 'info'
const isDebug = LOGLEVEL === 'debug' || LOGLEVEL === 'silly'
const loggers = require('../utils/logger')

const logger = loggers.baseLogger
const { stream } = loggers.httpLogger
const { okLabel, warnLabel } = loggers.logStyles

morgan.token('sid', req => 'cookies' in req && (req.cookies['mfp.sid'] || undefined))

const headersSent = res => (typeof res.headersSent !== 'boolean' ? Boolean(res._header) : res.headersSent)

morgan.token('by', (req, res, colors = true) => {
  const serverLabel = colors === true ? okLabel(' SERVER ') : 'SERVER'
  const clientLabel = colors === true ? warnLabel(' CLIENT ') : 'CLIENT'
  try {
    if (req.headers && typeof req.headers['user-agent'] === 'string') {
      return req.headers['user-agent'].indexOf('axios') === 0 ? serverLabel : clientLabel
    }
  } catch (e) {
    logger.warn(e)
  }

  return undefined
})

morgan.token('req-headers', (req, stringify = true) => {
  const headers = { ...(req.headers || {}) } || { count: 0 }
  const filteredHeaders = { ...headers }
  const excluded = [
    'accept',
    'content-type',
    'content-length',
    'user-agent',
    'connection',
    'pragma',
    'referer',
    'accept-encoding',
    'accept-language',
    'upgrade-insecure-requests'
  ]

  excluded.map((e) => {
    delete filteredHeaders[e]
    return e
  })

  return stringify ? JSON.stringify(filteredHeaders) : filteredHeaders
})

morgan.token('cstatus', (req, res) => {
  const status = headersSent(res) ? res.statusCode : '-'

  // get status color
  const color = status >= 500
    ? 31 // red
    : status >= 400
      ? 33 // yellow
      : status >= 300
        ? 36 // cyan
        : status >= 200
          ? 32 // green
          : 0 // no color

  // Return colored status
  if (status === undefined) {
    return undefined
  }
  return `\u001B[${color}m${status}\u001B[0m`
})

logger.debug('Listening HTTP events with \'morgan\'')

let printFormat = [
  ':by [:date[clf]]',
  '":method :cstatus :url HTTP/:http-version"',
  kleur.dim(':res[content-length] - :response-time ms :req-headers #:sid \n')
].join(' ')

if (process.env.NODE_ENV === 'production') {
  printFormat = [
    ':by[false] :remote-addr - :remote-user [:date[clf]]',
    '":method :status :url HTTP/:http-version"',
    ':res[content-length] - :response-time ms :req-headers #:sid'
  ].join(' ')
}

const format = (tokens, req, res) => JSON.stringify({
  print: morgan.compile(printFormat)(tokens, req, res),
  by: tokens.by(req, res, false),
  date: tokens.date(req, res, 'web'),
  method: tokens.method(req, res),
  status: tokens.status(req, res),
  url: tokens.url(req, res),
  headers: tokens['req-headers'](req, false),
  cookies: req.cookies || {},
  responsetime: tokens['response-time'](req, res, 1),
  sid: tokens.sid(req, res)
})

module.exports = morgan(format, {
  skip(req) {
    if (!isDebug) return req.url.indexOf('/_next') === 0 || req.url.indexOf('/static') === 0
    return false
  },
  stream
})
