module.exports = {
  extends: ['standard-with-typescript', 'prettier'],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
