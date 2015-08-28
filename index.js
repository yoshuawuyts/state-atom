const struct = require('observ-struct')
const array = require('observ-array')
const assert = require('assert')
const value = require('observ')
const xtend = require('xtend')

stateAtom.struct = struct
stateAtom.array = array
stateAtom.value = value

module.exports = stateAtom

// create a state atom
// obj -> obj
function stateAtom (obj) {
  assert.equal(typeof obj, 'object')
  const copy = xtend(obj)
  return struct(copy)
}
