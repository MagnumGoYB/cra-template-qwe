module.exports = {
  '*': 'pretty-quick --staged',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  'package.json': 'prettier-package-json --write'
}
