const { describe, it, beforeEach } = require('mocha')
const assert = require('assert')
const { ESLint } = require('eslint')

const baseConfig = require('../index')

describe('Rules', () => {
  let eslint = null

  beforeEach(() => {
    eslint = new ESLint({ baseConfig })
  })

  it('should allow top level await', async () => {
      const code = 'const foo = await 1\nconst bar = function() {}\nawait bar(foo)\n'
      const [lintResult] = await eslint.lintText(code)
      assert.equal(lintResult.errorCount, 0)
  })

  it('should NOT allow console.log()', async () => {
    const code = 'console.log(1)\n'
    const [lintResult] = await eslint.lintText(code)
    assert.equal(lintResult.errorCount, 1)
  })

  it('should allow space before function paren', async () => {
    const code = 'const bar = function() {}\nbar(1)\n'
    const [lintResult] = await eslint.lintText(code)
    assert.equal(lintResult.errorCount, 0)
  })
})
