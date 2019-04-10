/* eslint-disable no-param-reassign, no-underscore-dangle, no-console */
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const processEnv = publicRuntimeConfig || process.env || {}
const { mch, ...restVars } = processEnv

const injectedVars = {
  ...mch,
  ...restVars
}
let varsLogged = false

if (process && !process.browser && !varsLogged) {
  console.debug('Following configurations injected to the app')
  console.debug(JSON.stringify(injectedVars, ' ', 2))
  varsLogged = true
}

export default processEnv || {}
