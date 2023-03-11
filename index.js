const {
  env,
  extendsPlugin,
  parser,
  parserOptions,
  plugins,
  globals,
  settings,
  rules
} = require('./src')

module.exports = {
  env,
  extends: extendsPlugin,
  parser,
  parserOptions,
  plugins,
  globals,
  settings,
  rules
}
