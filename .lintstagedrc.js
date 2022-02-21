module.exports = {
  '*': 'pretty-quick --staged',
  'package.json': 'prettier-package-json --write',
  'template.json': 'prettier-package-json --write ./template.json'
}
