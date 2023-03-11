const { describe, it, beforeEach } = require('mocha')
const assert = require('assert')
const { ESLint } = require('eslint')

const baseConfig = require('../index')

describe('Rules React', () => {
  let eslint = null

  beforeEach(() => {
    eslint = new ESLint({ baseConfig })
  })

  it('should NOT allow alert()', async () => {
    const code = 'alert(\'hello\')\n'
    const [lintResult] = await eslint.lintText(code)
    assert.equal(lintResult.errorCount, 1)
  })
})
