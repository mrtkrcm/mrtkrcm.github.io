const isClient = typeof window !== 'undefined'
const env = (isClient ? window.ENV : process.env.environment) || 'dev'
const isProd = process.env.NODE_ENV !== 'development'

const silentLogger = (log) => {
  // Show console logs on Test and Development servers only
  if (env === 'test' || !isProd) {
    console.log(log) // eslint-disable-line no-console
  }
}

export default silentLogger
