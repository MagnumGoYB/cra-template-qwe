module.exports = {
  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  settings: {
    react: {
      version: 'detect'
    },
    polyfills: ['Promise', 'URL']
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'multiline-ternary': 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': ['error', { named: 'never' }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error'
  }
}
