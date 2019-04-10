'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-dmi'],
  plugins: ['module-resolver'],
  env: {
    browser: true
  },
  globals: {
    React: false
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      }
    ],
    'no-shadow': ['error', { allow: ['webpackConfig'] }],
    'no-unused-vars': ['error', { vars: 'local' }],
    'no-param-reassign': ['error', { props: true }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id']
        }
      }
    ],
    'jsx-a11y/media-has-caption': 0,
    'import/first': 'warn'
  }
}
