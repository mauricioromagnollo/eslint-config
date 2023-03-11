const { describe, it } = require('mocha')
const assert = require('assert')
const { ESLint } = require('eslint')

const baseConfig = require('../index')
const { isObject } = require('./helpers')

describe('Basic Object Config', () => {
  it('should have basic properties of config', () => {
    assert.ok(isObject(baseConfig.parserOptions))
    assert.ok(isObject(baseConfig.env))
    assert.ok(isObject(baseConfig.globals))
    assert.ok(isObject(baseConfig.rules))
  })

  it('should load config in eslint to validate if all rule syntax is correct', async () => {
    const eslint = new ESLint({ baseConfig })
    const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
    const [lintResult] = await eslint.lintText(code)
    console.log(lintResult.messages)
    assert.equal(lintResult.errorCount, 0)
  })
})
