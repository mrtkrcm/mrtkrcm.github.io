/* eslint-disable no-param-reassign */
const _ = require('lodash')
const TransportStream = require('winston-transport')
const stripAnsi = require('strip-ansi')
const supportsColor = require('supports-color')

const terminalColorsSupported = supportsColor.stdout.has256 || supportsColor.stderr.has16m

const debug = require('debug')
const kleur = require('kleur')
kleur.enabled = require('color-support').level

const LOGLEVEL = process.env.NPM_CONFIG_LOGLEVEL || 'info'
const APP_NS = process.env.APP_NS ? process.env.APP_NS : 'MFP'

const isDebug = LOGLEVEL === 'debug' || LOGLEVEL === 'silly'
const debugNamespaces = [`${APP_NS}:*`, '-*:watch']
const nsArgs = debugNamespaces.join(',')

debug.enable(nsArgs)
debug.formatArgs = formatArgs
function formatArgs(args) {
  const { namespace: name, useColors } = this
  if (useColors) {
    const c = this.color
    const colorCode = `\u001B[3${c < 8 ? c : `8;5;${c}`}`
    const prefix = `${kleur.dim('..')}${colorCode};1m${name} \u001B[0m`

    args[0] =
      prefix +
      args[0]
        .split('\n')
        .filter((line) => {
          // do not prefix empty line
          if (line.length > 0) return `${prefix}`
          return '\n'
        })
        .join('\n')
    isDebug && args.push(kleur.dim(`${colorCode}m+${debug.humanize(this.diff)}\u001B[0m`))
  } else {
    args[0] = `${name} ${args[0]}`
  }

  if (!terminalColorsSupported) args[0] = stripAnsi(args[0])
}

const nsLoggers = {}

const debugBase = ens => debug(`${APP_NS}${ens}`)
const debugExtend = ens => (nsOrLog) => {
  const isNs = _.isString(nsOrLog) ? nsOrLog.startsWith(':') : false

  try {
    return isNs ? debugBase(`${nsOrLog}`) : debugBase(ens)(nsOrLog)
  } catch (e) {
    return debugBase(ens)(_.isObject(nsOrLog) && 'Error' in nsOrLog ? nsOrLog.Error : `${ens}${nsOrLog}`)
  }
}

/**
 * Transport for outputting to the console via debug module.
 * @type {Console}
 * @extends {TransportStream}
 */
module.exports = class ConsoleWithDebugModule extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options)

    // Expose the name of this Transport on the prototype
    this.name = options.name || 'consoleDebug'
    this.ns = options.ns || ':log'

    this.setMaxListeners(30)
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info))

    const logNS = info.ns || (info.metadata && info.metadata.ns) || this.ns
    let loggerFn = () => null
    let logMessage = info.message
    if (!terminalColorsSupported) logMessage = stripAnsi(info.message)

    // Is there already a debugger with the namespace?
    if (!(logNS in nsLoggers) && info.message && info.message.length > 0) {
      nsLoggers[logNS] = debugExtend(logNS)
    }

    // Use cached debugger instance
    if (logNS in nsLoggers) loggerFn = nsLoggers[logNS]

    loggerFn(logMessage)

    if (callback) {
      callback() // eslint-disable-line callback-return
    }
  }
}
