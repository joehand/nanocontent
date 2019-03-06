var assert = require('assert')

var readPageSync = require('./readPageSync')
var utilFile = require('../utils/file')

module.exports = readFileSync

function readFileSync (pathFile, opts) {
  assert.strictEqual(typeof pathFile, 'string', 'arg1: pathFile must be type string')
  assert.strictEqual(typeof opts, 'object', 'arg2: opts must be type object')
  assert.strictEqual(typeof opts.fs, 'object', 'arg2: opts.fs must be type object')

  if (!utilFile.isFile(pathFile)) {
    return readPageSync(pathFile, opts)
  } else {
    return false
  }
}
