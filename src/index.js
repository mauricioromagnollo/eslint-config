const env = require('./env')
const extendsPlugin = require('./extends')
const { parser, parserOptions } = require('./parser')
const plugins = require('./plugins')
const globals = require('./globals')
const settings = require('./settings')
const rules = require('./rules')

module.exports = {
  env,
  extendsPlugin,
  parser,
  parserOptions,
  plugins,
  globals,
  settings,
  rules
}
