'use strict'

module.exports = {
  'extends': [
    './rules/default',
    './rules/react'
  ].map(require.resolve)
}
