const node = require('../node')
const react = require('../react')
const test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isObject(node.parserOptions))
  t.ok(isObject(react.parserOptions))
  t.ok(isObject(node.env))
  t.ok(isObject(react.env))
  t.ok(isObject(node.globals))
  t.ok(isObject(react.globals))
  t.ok(isObject(node.rules))
  t.ok(isObject(react.rules))
  t.end()
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
