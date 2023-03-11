const { describe, it } = require('mocha')
const assert = require('assert')
const { ESLint } = require('eslint')

const node = require('../node')
const react = require('../react')
const { isObject } = require('./helpers')

describe('Basic Object Config', () => {
  describe('Node', () => {
    it('should have basic properties of config', () => {
      assert.ok(isObject(node.parserOptions))
      assert.ok(isObject(node.env))
      assert.ok(isObject(node.globals))
      assert.ok(isObject(node.rules))
    })

    it('should load config in eslint to validate if all rule syntax is correct', async () => {
      const eslint = new ESLint({ baseConfig: node })
      const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
      const [lintResult] = await eslint.lintText(code)
      assert.equal(lintResult.errorCount, 0)
    })
  })

  describe('React', () => {
    it('should have basic properties of config', () => {
      assert.ok(isObject(react.parserOptions))
      assert.ok(isObject(react.env))
      assert.ok(isObject(react.globals))
      assert.ok(isObject(react.rules))
    })

    it('should load config in eslint to validate if all rule syntax is correct', async () => {
      const eslint = new ESLint({ baseConfig: react })
      const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
      const [lintResult] = await eslint.lintText(code)
      assert.equal(lintResult.errorCount, 0)
    })
  })
})
