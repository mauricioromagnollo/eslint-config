const { describe, it, beforeEach } = require('mocha')
const assert = require('assert')
const { ESLint } = require('eslint')

const node = require('../node')

describe('Node', () => {
  let eslint = null

  beforeEach(() => {
    eslint = new ESLint({ baseConfig: node })
  })

  it('should allow top level await', async () => {
      const code = 'const foo = await 1\nconst bar = function () {}\nawait bar(foo)\n'
      const [lintResult] = await eslint.lintText(code)
      assert.equal(lintResult.errorCount, 0)
  })
})
