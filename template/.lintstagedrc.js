module.exports = {
  '*': 'pretty-quick --staged',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  'package.json': 'sort-package-json'
}
