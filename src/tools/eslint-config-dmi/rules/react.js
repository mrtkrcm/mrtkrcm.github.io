'use strict'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/require-default-props': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-unused-prop-types': 0,
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }]
  }
}
