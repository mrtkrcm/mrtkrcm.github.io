module.exports = {
  extends: ['standard', 'eslint:recommended', 'plugin:node/recommended'],
  plugins: ['unicorn'],
  env: {
    node: true
  },
  rules: {
    'key-spacing': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'object-curly-spacing': 0,
    semi: [0, 'never'],
    'node/no-unpublished-require': 0,
    'import/no-extraneous-dependencies': 0,
    'node/no-extraneous-require': 0,
    'no-console': 0
  }
}
