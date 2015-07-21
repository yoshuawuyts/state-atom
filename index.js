const immutable = require('seamless-immutable')
const assert = require('assert')

module.exports = stateStore

// initialize a new application state store
// null -> fn -> fn
function stateStore () {
  const store = immutable({})

  createCursor.emit = emit
  createCursor.on = on
  return createCursor

  // create a new lens
  // null -> null
  function createCursor (query) {
    assert.equal(typeof query, 'string')
  }

  // attach a listener to an event
  // (str, cb) -> null
  function on (event, cb) {
    assert.equal(typeof event, 'string')
    assert.equal(typeof cb, 'function')
  }

  // call an event with it's corresponding action
  // or get the value of the store if no args
  // are passed
  // [any]? -> null
  function emit (future) {
    if (!future) return store.asMutable({ deep: true })
    store.merge(future)
  }
}
