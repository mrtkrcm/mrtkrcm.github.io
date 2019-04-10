module.exports = {
  extends: ['plugin:node/recommended', 'standard', 'eslint:recommended', 'airbnb-base', 'dmi'],
  plugins: ['node'],
  env: {
    es6: true,
    node: true
  },
  rules: {
    'key-spacing': 0,
    'comma-dangle': 0,
    'object-curly-spacing': 0,
    'node/no-unpublished-require': 0,
    'import/no-extraneous-dependencies': 0,
    'node/no-extraneous-require': 0,
    'no-console': 0
  }
}
