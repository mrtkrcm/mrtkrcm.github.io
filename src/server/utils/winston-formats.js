const kl = require('kleur')
const { format } = require('winston')
const prettyjson = require('prettyjson')

const { printf, colorize, timestamp, metadata } = format

const basicMetaFormat = info => {
  const { timestamp, level, message, ...args } = info
  const ts = timestamp.slice(0, 19).replace('T', ' ')
  const pargs = Object.keys(args).length ? (Object.keys(args), '', '') : ''
  const argTree = prettyjson.render(pargs, { inlineArrays: true })

  return `${ts} ${level}: ${message} ${argTree}`
}

const detailedFormat = info => {
  const { timestamp, level, message, ...args } = info
  const ts = timestamp.slice(0, 19).replace('T', ' ')
  // let pargs = Object.keys(args).length ? JSON.stringify(args, '', '') : ''

  if (info instanceof Error) return `${ts} ${level}: ${kl.red.bold(message)} ${info}`

  const pargs = kl.gray.dim(Object.keys(args).length ? JSON.stringify(args, '', '') : '')

  return `${ts} ${level}: ${message} ${pargs}`
}

module.exports.developmentFormat = format.combine(timestamp(), colorize(), printf(detailedFormat))

module.exports.productionFormat = format.combine(
  timestamp(),
  metadata({ fillExcept: ['message', 'level', 'timestamp'] }),
  colorize(),
  printf(basicMetaFormat)
)
