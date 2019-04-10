'use strict'

module.exports = {
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'es6': true
  },
  'plugins': ['standard', 'import', 'promise', 'unicorn', 'no-loops'],
  'rules': {
    'quotes': ['error', 'single'],
    'max-len': [2, 120, 2],
    'semi': [2, 'never'],
    'key-spacing': 0,
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': 0,
    'prefer-rest-params': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [
      1,
      {
        'allowTaggedTemplates': true,
        'allowShortCircuit': true
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'no-loops/no-loops': 2,
    'unicorn/no-abusive-eslint-disable': ['warn', 'always'],
    'unicorn/filename-case': 0,
    'unicorn/catch-error-name': 0,
    'import/no-extraneous-dependencies': 0,
    'import/first': ['warn']
  }
}
